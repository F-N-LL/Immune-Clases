// *****************************************************
//  4. Arrays
//  Lun. 06/05/2024
// *****************************************************

// ✅ Intro Arrays.

// 1. Usando corchetes: Puedes declarar un array vacío o con elementos dentro de corchetes [ ]. Por ejemplo:

let arrayVacio = [];
let arrayConElementos = [1, 2, 3, 4, 5];

console.log(arrayConElementos); // salida [1, 2, 3, 4, 5]


// 2. Usando el constructor Array(): También puedes usar el constructor Array() para crear un array. Puedes pasar elementos como argumentos al constructor o simplemente especificar la longitud del array. Por ejemplo:

let arrayConConstructor = new Array(); 
let arrayConElementosA = new Array(1, 2, 3, 4, 5); 

console.log(arrayConElementosA); // salida [1, 2, 3, 4, 5]

// 3. Usando el método .push(): Puedes declarar un array vacío y luego agregar elementos usando el método push(). Por ejemplo:

let arrayVacio1 = [];
arrayVacio1.push(1); 
arrayVacio1.push(2);
arrayVacio1.push(3);

console.log(arrayVacio1) // salida [1, 2, 3]

// ✅ Array.lenght: Obtener la longitud de un array:

const array = [1, 2, 3, 4, 5];
const longitud = array.length;
console.log(`La longitud del array es: ${longitud}`);


// -> Iterar sobre un array utilizando su longitud:

const array = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// Esto imprimirá cada elemento del array en la consola, utilizando la longitud del array para
// determinar cuándo detenerse en la iteración.


// -> Agregar elementos a un array con un bucle:

const array = [];

for (let i = 0; i < 5; i++) {
    array.push(i);
}

console.log(array); // Resultado: [0, 1, 2, 3, 4]

// En este ejemplo, se utiliza la longitud del array para iterar y agregar elementos en un bucle.


// -> Eliminar el último elemento de un array utilizando su longitud: 

const array = [1, 2, 3, 4, 5];
array.length = array.length - 1;
console.log(array); // Resultado: [1, 2, 3, 4]
// Al establecer la longitud del array en un valor menor que su longitud actual, se eliminan los elementos adicionales del final del array.


// -> Comprobar si un array está vacío:
//Esto verifica si el array está vacío o no, comparando su longitud con cero.

const array = [];

if (array.length === 0) {
    console.log("El array está vacío.");
} else {
    console.log("El array NO está vacío.");
}


// ✅ Bucle for of

// Iterar sobre los elementos de un array:
const array = ['a', 'b', 'c', 'd', 'e'];

for (const elemento of array) {
    console.log(elemento);
}

// Esto imprimirá cada elemento del array en la consola.
// Obtener el índice y el valor de cada elemento:

const array = ['a', 'b', 'c', 'd', 'e'];

for (const [indice, valor] of array.entries()) {
    console.log(`Índice: ${indice}, Valor: ${valor}`);
}
// Esto imprimirá el índice y el valor de cada elemento del array.
// Sumar todos los elementos de un array numérico:

const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (const numero of numeros) {
    suma += numero;
}

console.log(`La suma de todos los números es: ${suma}`);


// Buscar un elemento específico en un array:

const nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];
const nombreBuscado = 'Pedro';

let encontrado = false;
for (const nombre of nombres) {
    if (nombre === nombreBuscado) {
        encontrado = true;
        break;
    }
}
if (encontrado) {
    console.log(`${nombreBuscado} encontrado en el array.`);
} else {
    console.log(`${nombreBuscado} no encontrado en el array.`);
}

// Duplicar cada elemento de un array numérico:

const numeros = [1, 2, 3, 4, 5];
const duplicados = [];

for (const numero of numeros) {
    duplicados.push(numero * 2);
}

console.log(duplicados); //creará un nuevo array 'duplicados' con cada elemento del array original multiplicado por 2.



// > Array multidimensional
// Un array multidimensional es un array que contiene otros arrays como elementos.

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]); // Output: 1
console.log(matriz[1][2]); // Output: 6


// > Objeto JSON:
//JSON (JavaScript Object Notation) es un formato de intercambio de datos que es fácilmente legible
//por humanos. Un objeto JSON es una colección de pares clave-valor.

const json = {
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Madrid"
}



// > Array Multidimensional JSON:
//Un array multidimensional JSON es un array que contiene objetos JSON como elementos.


const jsonM = [
  {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Madrid"
  },
  {
    "nombre": "María",
    "edad": 25,
    "ciudad": "Barcelona"
  },
  {
    "nombre": "Pedro",
    "edad": 35,
    "ciudad": "Sevilla"
  }
]

// > Metodos Arrays


// 1. Agregar elementos al final
const numeros = [1, 2, 3];
numeros.push(4, 5); // Agregando múltiples elementos al final
console.log(numeros); // Output: [1, 2, 3, 4, 5]



// 2. Extraer elementos del final
const numeros = [1, 2, 3];
const ultimoNumero = numeros.pop(); // Eliminando el último elemento
console.log(ultimoNumero); // Output: 3
console.log(numeros); // Output: [1, 2]



// 3. Extraer elementos del inicio
const numeros = [1, 2, 3];
const primerNumero = numeros.shift(); // Eliminando el primer elemento
console.log(primerNumero); // Output: 1
console.log(numeros); // Output: [2, 3]



// 4. Agregar elementos al inicio
const numeros = [2, 3];
numeros.unshift(0, 1); // Agregando múltiples elementos al inicio
console.log(numeros); // Output: [0, 1, 2, 3]



// 5. Eliminar e insertar elementos en una posición
const numeros = [1, 2, 3, 4, 5];
const elementosEliminados = numeros.splice(1, 2, 'a', 'b'); // Eliminando 2 elementos a partir del índice 1 y agregando 'a' y 'b'
console.log(elementosEliminados); // Output: [2, 3]
console.log(numeros); // Output: [1, 'a', 'b', 4, 5]



// 6. Crear un nuevo array copiando elementos desde una posición hasta otra (no incluida)
const letras = ['a', 'b', 'c', 'd', 'e'];
const subArray = letras.slice(1, 4); // Copiando elementos desde el índice 1 hasta el índice 4 (no incluido)
console.log(subArray); // Output: ['b', 'c', 'd']



// 7. Unir arrays
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const arrayConcatenado = array1.concat(array2, array3);
console.log(arrayConcatenado); // Output: [1, 2, 3, 4, 5, 6]



// 8. Buscar elementos
const numeros = [1, 2, 3, 4, 5];
const posicionDos = numeros.indexOf(2); // Buscando el índice del número 2
console.log(posicionDos); // Output: 1



// 9. Verificar si un array contiene un valor
const numeros = [1, 2, 3, 4, 5];
const contieneTres = numeros.includes(3);
console.log(contieneTres); // Output: true



// 10. Iterar sobre elementos del array
const numeros = [1, 2, 3];
numeros.forEach(numero => console.log(numero * 2)); // Multiplicar cada número por 2 y mostrarlo



// 11. Crear un nuevo array aplicando una función a cada elemento
const numeros = [1, 2, 3];
const dobles = numeros.map(numero => numero * 2); // Duplicar cada número
console.log(dobles); // Output: [2, 4, 6]



// 12. Filtrar elementos basados en una condición
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(numero => numero % 2 === 0); // Filtrar números pares
console.log(numerosPares); // Output: [2, 4]



// 13. Encontrar el primer elemento que cumple con una condición
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 35 }
];
const personaMayor30 = personas.find(persona => persona.edad > 30); // Encontrar la primera persona mayor de 30 años
console.log(personaMayor30); // Output: { nombre: 'María', edad: 30 }



// 14. Encontrar el índice del primer elemento que cumple con una condición
const numeros = [10, 20, 30, 40, 50];
const indiceMayor30 = numeros.findIndex(numero => numero > 30); // Encontrar el índice del primer número mayor de 30
console.log(indiceMayor30); // Output: 3



// 15. Ordenar el array
const numeros = [5, 2, 8, 1, 4];
numeros.sort((a, b) => a - b); // Ordenar de forma ascendente
console.log(numeros); // Output: [1, 2, 4, 5, 8]



// 16. Invertir el orden de los elementos del array
const numeros = [1, 2, 3, 4, 5];
numeros.reverse(); // Invertir el orden
console.log(numeros); // Output: [5, 4, 3, 2, 1]



// 17. Verificar si una variable es un array
const array = [1, 2, 3];
const esArray = Array.isArray(array); // Verificar si 'array' es un array
console.log(esArray); // Output: true

