// *****************************************************
//  1. Asignación de Variables y tipos de datos
//  Mié. 17/04/2024
// *****************************************************

// Comentarios.
// 
//      // Esto es un comentario de línea  única en JS
//
//      /*
//      Esto
//      es 
//      un 
//      comentario
//      multi-línea
//      */


// *****************************************************


// ✅ VARIABLES: asignamos valores.

var miCadenaVar = "Hola a todos";
var miCadena2Var = 'Hola clase';

// 🚨 Usar 'var' como palabra clave es una práctica desfasada, aunque se
// ve habitualemnte en tutoriales y ambitos educativos, lo mejor es que
// acostumbremos desde el comienzo a usar 'const', para constantes, cuando no
// cambie su valor a lo largo del código y 'let' para variables cuyo 
// valor puede volver a ser asignado en el código. Esta es una pregunta frecuente
// en entrevistas técnicas para desarrolladores juniors 'el alcance de las variables'.

 
const miCadena = "Hola a todos"; // 'String', una cadena
let miCadena2 = 'Hola clase';    // 'String' también, una cadena


// console.log(miCadena + " " + miCadena2);
// console.log(`${miCadena} ${miCadena2}`);


let unNumero = 200;         // 'Number'
let otroNumero = "200";     // 'String'
let cincuenta = 50;         // 'Number'
let veinticinco = 25;       // 'Number'

// console.log(unNumero);


const nuevoNumeroString = parseInt(otroNumero);  // parseInt nos permite convertir cadenas en numeros enteros.
 console.log(typeof nuevoNumeroString);        // typeof nos dice el tipo de dato de una variable. En este caso un 'number'
 console.log(typeof otroNumero);               // typeof 'string'


// Booleanos
let estado = false;
let resultado = 0;

// Otros tipos

let algo = null; // Indica algo definido pero vacío o de valor nulo

//let a = b + 1; //ERROR, b is undefined

let number = 'ejemplo';
typeof number * 1; //NaN

// console.log(typeof estado);  // typeof nos dice el tipo de dato de una variable.



// 🚨🚨🚨 Atención, si omitimos la palabra clave var, let o const; la variable
// se crea como global, y se puede acceder desde cualquier parte del código. 
// causando resultados inesperados. Solo a emplear en casos muy concretos 🚨🚨🚨

// unNumero = 200;

