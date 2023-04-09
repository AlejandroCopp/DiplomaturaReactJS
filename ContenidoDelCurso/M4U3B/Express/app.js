var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require ("./routes/productos");
var preciosRouter = require ("./routes/precios");
var promocionesRouter = require ("./routes/promociones");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Estas serian rutas mas complejas que se definen como var mas arriva
//Se pone el router.get correspondiente en cada js
//Se crea un nav en index.hbs con los href correspondientes
//y se emplean aqui :

app.use("/productos", productosRouter);
app.use("/precios", preciosRouter)
app.use("/promociones", promocionesRouter)


//estas serian formas simples de hacer rutas 
//colocando la direccion en la barra:

app.get('/1', function(req, res) {
  res.send('Hola, Esta es la direccion 1!');
});


app.get('/2', function(req, res) {
  res.send('Hola, Esta es la direccion 2!');
});


app.get('/3', function(req, res) {
  res.send('Hola, Esta es la direccion 3!');
});




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





/*

----------------------------------TENER EN CUENTA -------------------------



--------------RUTAS--------------

Recodrad tenern nodemon para pasar bien los cambios cuando se refresca la pagina

En Express.js, las rutas son una forma de asociar una solicitud HTTP entrante a una función de controlador que se encarga de esa solicitud y devuelve una respuesta.

Las rutas en Express se definen utilizando el objeto app y el método correspondiente al verbo HTTP que se quiere manejar (por ejemplo, get, post, put, delete, etc.). La sintaxis general es la siguiente: 

app.METHOD(PATH, HANDLER)

Donde:
METHOD es el verbo HTTP en mayúsculas (por ejemplo, GET, POST, PUT, DELETE, etc.).
PATH es la ruta de la URL que se está manejando.
HANDLER es la función de controlador que se ejecutará cuando se haga la solicitud.


en el app.js escribimos

app.get('/p', function(req, res) {
  res.send('Hola, mundo 1234!');
});

esto hace que cuando se acceda a localhost/p en este caso, muestre hola mundo 1234 en la pagina




----------------CONROLADOR O MNAJADOR DE RUTA -----------------

Teniendo el ul y li del nav con los href dirigiendo a una pagina se establecen las rutas igual que como veniamos haciendo antes.
1)En el archivo: layout.hbs en este caso
	
	<li><a href="/productos">Productos</a></li>
        <li><a href="/precios">Precios</a></li>
        <li><a href="/promociones">Promociones</a></li>

2)en el archivo app.js se declara las var

var productosRouter = require ("./routes/productos");
var preciosRouter = require ("./routes/precios");
var promocionesRouter = require ("./routes/promociones");

3)y el uso 

app.use("/productos", productosRouter);
app.use("/precios", preciosRouter)
app.use("/promociones", promocionesRouter)


4)despues en cada Js de las paginas ponemos

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('Hola soy la pagina de Promociones');
});

module.exports = router;


en el caso que en la pagina en vez de decir un "Hola soy...." en vez de res.send usamos res.render ("precios"), para llamar a un vista que tiene que estar creada en la carpeta views/precios.hbs




*/