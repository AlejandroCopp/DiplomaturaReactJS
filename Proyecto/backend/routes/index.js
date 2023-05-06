var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('admin/login');                 //redirecciona a admin/login directo osea que al poner localhost3000 va a admin/login
});                                         // borramos el express y demas por que 
;                                              //cuando trabajamos con redireccionamietno no hay express
module.exports = router;









/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); // se puede poner tambien res.redirect("admin/login")
});                                           //entonces cuando ente a el "/" que es localhost3000 va a
                                                //redireccionar a admin/login directo 

*/