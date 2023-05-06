var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel'); //nos permite acceder a las funciones que tengamos hechas con la tabla


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {     //login.hbs  son archivos que cree en la carpeta vista/admin
    layout: "admin/layout"      //layout.hbs ... al parecer se complementan los dos hbs este de layot trae la base de la pagina, es decir el header el footer el body 
  });
});

router.get('/logout', function (req,res,next){
  req.session.destroy(); //destrui la variables de sesion (id y usuario)
  res.render('admin/login', {
    layout: 'admin/layout'
  });
})

router.post('/', async (req, res, next) => {       // a travez del post (la informacion que se esconde en el url) de localhost3000 que direcciona a admin/login
  try {
    var usuario = req.body.usuario; //captura la info de usuario .... Ale
    var password = req.body.password; // captura 1234
    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);           //la variable data se conecta con usuariosModel que tiene todas las funciones
    ;                                                                                         //busco la funcion getUserByUsernameAndPassword y le paso lo que esta almacenando en
     ;                                                                                       // las variables usuario y password que obtienen la info del metodo post en '/' 
      ;                                                                                       // la funcion getUserByUsernameAndPassword consulta la base de datos y los trae si son correctos
       ;                                                                                      //await le da el cierre a la funcion asincronica
    if (data != undefined) {                                  //si data es diferente a undefined .... es decir, que tengo un registro 

      req.session.id_usuario = data.id;                        //guarda en la variable de sesion, el id
      req.session.nombre = data.usuario;                       //guarda en la variable de sesion, el usuario

      res.redirect('/admin/novedades');                       //redirecciona a admin novedades
    } else {
      res.render('admin/login', {                             //si no, hace un render de la pagina de nuevo 
        layout: 'admin/layout',                               // levanta el layout, que es la base estructural de las pag. body footer header, etc.
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  } //cierro catch

});  //cierro router.post


module.exports = router;
