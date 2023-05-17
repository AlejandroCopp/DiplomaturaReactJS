const { getSystemErrorMap } = require('util');
var pool = require ('./bd'); //llamada a la base de datos

async function getNovedades() {
    var query = 'select * from novedades';   // trae todo de la tabla novedades
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function deleteNovedadesById(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows; 
}



async function getNovedadById(id) {
    var query = 'select * from novedades where id = ?' ;
    var rows = await pool.query (query, [id]);
    return rows[0];
}


async function modificarNovedadById(obj, id){                                                                       // objeto por que es un array, voy a recibir titulo, subtitulo y cuerpo
    try{
        var query = 'update novedades set ? where id=?';                                                            //modificame todos esos valores, set, 
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    } 
}


module.exports = {getNovedades, insertNovedades, deleteNovedadesById, getNovedadById, modificarNovedadById}