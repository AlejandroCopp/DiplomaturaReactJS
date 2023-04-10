var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); // se puede poner tambien res.redirect("admin/login")
});                                           //entonces cuando ente a el "/" que es localhost3000 va a
;                                                //redireccionar a admin/login directo 
module.exports = router;
