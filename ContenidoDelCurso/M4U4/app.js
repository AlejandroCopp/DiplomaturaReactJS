var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var session = require ("express-session")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({                                         //se definen parametros de la session que son obligatorios
  secret: "4n24n98fsb2&",
  resave: false,
  saveUninitialized: true,
}))

app.get("/", function (req, res){                         //cuando reciba localhost3000
  var conocido = Boolean(req.session.nombre);             //esta var guarda si esta o no el nombre escrito en un boolean (true o false)
  res.render("index",{                                    //en la salida se comunica con el render index.hbs
    title: "sesiones en Expres.js",                       // se le pasa el titulo
    conocido:conocido,          
    nombre: req.session.nombre,                           // se puden pueden pasar propiedades dentro de los hbs, se imprimen {{asi}}
    edad: req.session.edad,
  })
})


app.post("/ingresar", function (req, res){                //funcion que se ejecuta cuando reciba una solicitud post en la ruta /ingresar
  if (req.body.nombre) {                                  //captura el dato.... si tengo informacion en el nombre...
    req.session.nombre = req.body.nombre                  //el contenido de nombre se guarda en la variable de session
    req.session.edad = req.body.edad
  }
  res.redirect("/");                                      //redirecciona a "/" , el codigo de arriba 
});

app.get("/salir", function (req, res){                    //cuando se resiba la direccion /salir 
  req.session.destroy();                                  //se destruye la session y redirecciona
  res.redirect("/");
})


// app.use('/', indexRouter);                               se comentan estas 2 lineas
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
