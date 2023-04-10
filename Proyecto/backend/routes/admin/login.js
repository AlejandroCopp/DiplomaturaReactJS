var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{     //login.hbs  son archivos que cree en la carpeta vista/admin
    layout: "admin/layout"      //layout.hbs ... al parecer se complementar los dos hbs 
  });
});

module.exports = router;
