var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();     //este proyecto va a trabajar con variables de entorno
var session = require('express-session');              // esto se trabajo en la unidad 4 creo... las variables de sesion retienen una informacion a lo largo de toda la sesion 
;                                                       //

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');   //login.js
var adminRouter = require('./routes/admin/novedades');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'PW2021awqyeudj',       //esto es la palabra secreta
  cookie: { maxAge: null },        //la cookie no expirara incluso si se cierra el navegador
  resave: false,                   //la sesion solo se volvera a guardar si se modifica 
  saveUninitialized: true           //se guardara una sesion incluso si no se establecen datos en ella
}))

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}



app.use("/admin/login", loginRouter);  //controlador loginRouter
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/novedades', secured, adminRouter); //cuando entre al enlace /admin/novedades levanta adminRouter que a su vez levanta ./routes/admin/novedades que es el js

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
