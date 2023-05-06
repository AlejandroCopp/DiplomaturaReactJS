var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/novedades', {     //novedades.hbs son archivos que cree en la carpeta vista/admin
    layout: "admin/layout",      //layout.hbs ... al parecer se complementan los dos hbs este de layout trae la base de la pagina, es decir el header el footer el body 
    persona: req.session.nombre
  });
});

module.exports = router;