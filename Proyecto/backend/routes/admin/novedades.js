var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');                                     //es para hacer mas facli la subida de las imagenes
var cloudinary = require('cloudinary').v2;                        //este es el servicio de cloudinary para que cuando tenga la info la suba a cloudinary
const uploader = util.promisify(cloudinary.uploader.upload);        //Esto hace la subida a cloudinary ... esta variable se usa despues dentro del codigo 
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */    /* este controlador muestra la vista */
router.get('/', async function (req, res, next) {     // se hace async por que no se sabe cuando se va a usar.... aca recibe localhost3000/admin/novedades

  var novedades = await novedadesModel.getNovedades(); // para que cuando hace la salida se comunique con novedadesModel y me traiga getNovedades 

  novedades = novedades.map(novedad => {                                  //map genera un nuevo array, por que ahora necesitamos devolver 2 cosas la novedad y la imagen
    if (novedad.img_id) {                                                 //chequea si la novedad tiene la imagen_id
      const imagen = cloudinary.image(novedad.img_id, {                     //si tiene la trae de cloudinary
        width: 100,                                                          //con estas propiedades
        height: 100,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  })



  res.render('admin/novedades', {                  //novedades.hbs son archivos que cree en la carpeta vista/admin
    layout: "admin/layout",                   //layout.hbs ... al parecer se complementan los dos hbs este de layout trae la base de la pagina, es decir el header el footer el body 
    persona: req.session.nombre,
    novedades                                  // por lo visto se va a hacer un each que es un handlebars que recorra e imprima novedades y las muestra en un listado 
  });                                           
});

router.get('/agregar', (req, res, next) => {          // cuando se reciba a travez del metodo get la barra localhost3000/admin/novedades/agregar 
  res.render('admin/agregar', {                        // traeme un render de admin con el layout
    layout: 'admin/layout'
  })
});


router.post('/agregar', async (req, res, next) => {
  try {
          var img_id = '';                                             //es para que inicie vacio

          if (req.files && Object.keys(req.files).length > 0) {         // si hay un archivo y si tiene un nombre osea es mayor a cero 
            imagen = req.files.imagen;                                  // a la variable imagen  le voy a pasar lo que yo capture
            img_id = (await uploader (imagen.tempFilePath)).public_id;               //guarda la variable imagen en cloudinary y genera el public id 
          }             
                                                                                        //despues cuando inserto las novedades en el codigo de abajo tengo que traer lo que pasa en 
                                                                                        // el cuerpo y demas y en la imagen
    console.log(req.body)

    if (req.body.titulo != "" && req.body.subtitulo != ""  && req.body.cuerpo != "") {            //chequeo que tenga informacion en cada campo , si esta vacio 
      await novedadesModel.insertNovedades({
        ...req.body,                                                                              //traigo lo que pasa en titulo subtitulo y cuerpo. esto lo vimos en la clase de java script
          img_id                                                                                        //le sumo... si tengo imagen o no
      });                                          
                                                                                                 
      res.redirect('/admin/novedades')                                                          // si esta todo ok redireccionamelo 
    } else {                                                                                    // si no, vuelve a agregar y tira el error "todos los campo son requeridos"
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {                                                                            // esto es por si hay un error al conectar con la base
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se creo la novedad'
    })
  }
})


/* eliminar una novedad */

router.get ('/eliminar/:id', async (req, res, next) => {                                      //a trevez del get por que tengo un boton, cuando reciba /eliminar/id
  var id = req.params.id;                                                                      // genero una variable y con req.params.id caputrp
  
  let novedad = await novedadesModel.getNovedadById(id);                                            //obtenemos la novedad por el id 
  if (novedad.img_id) {                                                                               //si la novedad tiene una imagen la destruye
    await (destroy(novedad.img_id));
  }

  await novedadesModel.deleteNovedadesById(id);                                               //me conecto con la variable y la funcion de borrar y le paso el id
  res.redirect('/admin/novedades');                                                             //una vez que esta hace un redireccionamiento a novedades 

});


/* la vista del form de modificar */

router.get ('/modificar/:id', async (req, res, next) => {                                           //cuando se recibe la ruta modificar/id
  var id = req.params.id;                                                                           // traeme la variable
  console.log(req.params.id);                                                                       //chequea que traiga el id
  var novedad = await novedadesModel.getNovedadById(id);                                            // guarda en la variable el resultado de la funcion a la que se le paso el id
  
  console.log(req.params.id);                             
  res.render('admin/modificar',{                                                                    // la nueva vista es modificar
    layout: 'admin/layout',                                                                          // con el layout que venimos trabajando 
    novedad                                                                                        // pasa novedad al render, para que lo imprima en los imput y text areas
  })
})


/* para modificar la novedad */

router.post('/modificar', async (req, res, next) => {                                           //cuando recibo a travez del metodo post el /modificar
  try{

      let img_id = req.body.img_original;

      let borrar_img_vieja = false;

      if (req.body.img_delete === "1") {                        //si recibo esto el check apretado ,el id pasa a estar null y habilito para borrar la imagen
        img_id = null;
        borrar_img_vieja = true;
      } else {
        if (req.files && Object.keys(req.files).length > 0) {        //si recibo el cheque no apretado
          imagen = req.files.imagen;                                    //captura la imagen 
          img_id = (await uploader(imagen.                                    //sube la nueva imagen
            tempFilePath)).public_id;
            borrar_img_vieja = true;                                            //habilita el borrar imagen
        }
      }
      if (borrar_img_vieja && req.body.img_original) {                        //si el primer if se da, va a funcionar este que va a destruir la imagen
        await (destroy(req.body.img_original));
      }



    var obj = {                                                                                 // capturo los datos
      titulo: req.body.titulo,                                                                  //como hicimos en la clase de node esto de pasar los datos
      subtitulo: req.body.subtitulo,                                                            // y en el agregar
      cuerpo: req.body.cuerpo,
      img_id
    }
    console.log(obj)
    console.log(req.body.id)                                                                    //console log del id

    await novedadesModel.modificarNovedadById(obj, req.body.id);                                // me voy a modificar y me paso el objeto y tambien el id
    res.redirect('/admin/novedades');                                                           // el req.body.id viene de el imput hidden {{novedad.id}} name=id de modificar.hbs

  }catch (error) {                                                                              
    console.log(error)
    res.render('admin/modificar',{                                                              //este render de error es por si no se conecta con la base o algo
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  }
})




module.exports = router;









/*

Antes de pasar la imagen, la ruta agregar estaba asi: 


router.post('/agregar', async (req, res, next) => {
  try {
          var img_id = '';                                             //es para que inicie vacio
          if (req.files && Object.keys(req.files).lenght > 0) {         // si hay un archivo y si tiene un nombre osea es mayor a cero 
            imagen = req.files.imagen;                                  // a la variable imagen  le voy a pasar lo que yo capture
            img_id = (await uploader (imagen.tempFilePath)).public_id;               //guarda la variable imagen en cloudinary y genera el public id 
          }             
                                                                                        //despues cuando inserto las novedades en el codigo de abajo tengo que traer lo que pasa en 
                                                                                        // el cuerpo y demas y en la imagen
    console.log(req.body)
    if (req.body.titulo != "" && req.body.subtitulo != ""  && req.body.cuerpo != "") {            //chequeo que tenga informacion en cada campo , si esta vacio 
      await novedadesModel.insertNovedades(req.body);                                           //comunicate con las novedades y busca la funcion de insertar y le paso los elementos req.body
                                                                                                 //req.body seria el objeto que tiene los datos
      res.redirect('/admin/novedades')                                                          // si esta todo ok redireccionamelo 
    } else {                                                                                    // si no, vuelve a agregar y tira el error "todos los campo son requeridos"
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {                                                                            // esto es por si hay un error al conectar con la base
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se creo la novedad'
    })
  }
})



*/