var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function (req, res, next) {     // se hace async por que no se sabe cuando se va a usar.... aca recibe localhost3000/admin/novedades

  var novedades = await novedadesModel.getNovedades(); // para que cuando hace la salida se comunique con novedadesModel y me traiga getNovedades 

  res.render('admin/novedades', {     //novedades.hbs son archivos que cree en la carpeta vista/admin
    layout: "admin/layout",      //layout.hbs ... al parecer se complementan los dos hbs este de layout trae la base de la pagina, es decir el header el footer el body 
    persona: req.session.nombre,
    novedades                       // por lo visto se va a hacer un each que es un handlebars que recorra e imprima novedades
  });
});

router.get('/agregar', (req, res, next) => {          // cuando se reciba a travez del metodo get la barra localhost3000/admin/novedades/agregar 
  res.render('admin/agregar', {                        // traeme un render de admin con el layout
    layout: 'admin/layout'
  })
});


router.post('/agregar', async (req, res, next) => {
  try {
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


/* eliminar */

router.get ('/eliminar/:id', async (req, res, next) => {                                      //a trevez del get por que tengo un boton, cuando reciba /eliminar/id
  var id = req.params.id;                                                                      // genero una variable y con req.params.id caputrp
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
    var obj = {                                                                                 // capturo los datos
      titulo: req.body.titulo,                                                                  //como hicimos en la clase de node esto de pasar los datos
      subtitulo: req.body.subtitulo,                                                            // y en el agregar
      cuerpo: req.body.cuerpo
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






