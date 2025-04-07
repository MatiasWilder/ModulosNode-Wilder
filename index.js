//1
const concatenar =  require ('./modulos/strings.js');
console.log(concatenar("Buenas" , " que tal"))

//2
const matematica = require ('./modulos/matematica.js');

console.log(matematica.suma(2,4));
console.log(matematica.resta(2,4));
console.log(matematica.multiplicacion(2,4));
console.log(matematica.division(2,4));

//3

const {mostrarDatos,alumno} = require ('./modulos/alumno.js');
const Mati = new alumno("Mati", "48178321");

console.log(mostrarDatos(Mati.username))
console.log(mostrarDatos(Mati.DNI))

//4
// import archivo from './modulos/archivo.js'
// archivo ("./prueba.txt", "./hola.txt")


//5
const url = require('./modulos/urlparse.js')
let objeto = url("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2219601/tp4-modulos-con-node");

console.log(objeto);


//6

try {
    const url = require('./modulos/urlparse.js')
let objeto = url("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2219601/tp4-modulos-con-node");

console.log(objeto);
  } catch (error) {
    console.error(error);
  }
  

//7
const avPais = require("./modulos/pais.js")
console.log( avPais("US") );