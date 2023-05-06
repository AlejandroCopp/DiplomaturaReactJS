var pool = require('./bd'); //llamado a base de datos
var md5 = require ('md5'); // era algo de la encriptacion de la contraseña

async function getUserByUsernameAndPassword(user, password) {                 //es una funcion asyncronica por que no se sabe cuando se va a usar
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';  // se genera una varianble que hace la consulta . limit 1 trae un solo resultado
        var rows = await pool.query(query, [user, md5(password)]);      //conecta con la variable query y trae los datos y chequea  
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }