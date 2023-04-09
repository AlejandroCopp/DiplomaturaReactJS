const moment = require("moment")   /* Se importa aa libreria moment   */
moment.locale("es")     /* se pone en español */

console.log("Naci " + moment("02/03/1996", "DD/MM/YYYY").fromNow())     /* se imprime los años desde ... naci hace...*/

const endOfDay = moment().endOf('day').fromNow();             /*  cuanto falta para que termine el dia  */
console.log("El dia termina " + endOfDay)           /*  se carga en una variable y luego se imprime la misma */

const NombDia = moment().format('dddd');
console.log ("El dia de hoy es "+ NombDia)







/*

Ejecutamos npm init (se crea un archivo .json)

Las librerias de JS se pueden instalar a partir de npm

se instalo npm i jquery   (son dependencias)
	   npm i aos
	   npm i moment

lo llamo en el archivo js:
	Const moment = require("moment");
	moment.locale ("es");
	console.log(

podemos sacar de la siguiente pag. la "sintaxis":
https://momentjs.com/

*/