// *****************************************************
//  4. Ejercicios con Arrays y métodos
//  Lun. 06/05/2024
// *****************************************************


//------------------------- LEEME ----------------------------

// HOLA DANI, TE HE DEJADO COMENTARIOS AL FINAL DE CADA EJERCICIO COMENTARIOS PARA TI, LOS COMENTARIOS QUE HAY SEGUIDOS DEL CODIGO SON PARA MI, PARA PODER SEGUIR QUE HACE EL CODIGO PORQUE ME LIO MUCHO LA VERDAD.
// SI TE DIERA TIEMPO A LEERLOS PARA VER SI LO HE PILLADO BIEN SERIA GENIAL. 
// GRACIAS DANI, ESPERO QUE NO ESTE MUY MAL HECHA LA LOGICA.

//------------------------------------------------------------

/** Ejercicio 1: 
Sumar todos los números de un array
Escribe una función que reciba un array de números como argumento y utilice
el método reduce() para sumar todos los números del array. */

const numeros = [10, 15, 20, 25, 30];

// Comienza tu código aquí

function sumarArray() {
    const sumar = numeros.reduce((acc, num) => { return acc + num; }, 0); // NOTA: es necesario poner 0 para que el parametro acc(acumulador) empiece a contar desDe 0 y vaya sumando num (elementos de la array)?? Esto es exactamente asi Dani?
    return sumar;
}
console.log(sumarArray(numeros));

// **** CON AYUDA: Lo he hecho con ayuda del chat GPT preguntandole que me explicara como se estructura la funcion de dento de reduce.

// Solución Output: 100


/** Ejercicio 2: 

Encontrar el número más grande en un array de números
Escribe una función que reciba un array de números como argumento y utilice el 
método reduce() para encontrar el número más grande en el array.
*/

const numeros = [10, 5, 8, 15, 3];

// Comienza tu código aquí

function numAlto() {
    const numeroAlto = Math.max(...numeros); // metodo math.max + operador de propagacion ... para obtener numero mas alto
    console.log(numeroAlto);
}
numAlto(numeros);

/** 
**** CON AYUDA: Aqui tambien le he tenido que preguntar porque habia hecho el ejercicio de la forma que te dejo debajo, pero luego he leido que habia que hacer una funcion y no sabia como estructurar la funcion:

const numeros = [10, 5, 8, 15, 3];
const numeroAlto = Math.max(...numeros); // metodo math.max + operador de propagacion ... para obtener numero mas alto

console.log(numeroAlto);
*/

// Output: 15


/** Ejercicio 3: 

Eliminar elementos duplicados de un array
Escribe una función que reciba un array y utilice el método filter() para 
eliminar los elementos duplicados del array.
*/

const duplicados = [1, 2, 2, 3, 4, 4, 5];

// Comienza tu código aquí

function eliminar() { // creamos una funcion sin pasarle parametros
    return duplicados.filter((totalArray, numeros) => { // metodo .filter, dentro del parentesis va primero (el valor actual del array , elementos del array)
        // .filter filtrara los elementos del array

        return duplicados.indexOf(totalArray) === numeros; 
      /** y con .indexOf, recorrera el array en busca de los numeros extrictamete iguales, 
      al encontrarlos un numero duplicado/o ya encontrado con anterioridad, 
      filtrara la segunda busqueda, por lo que no aparecera en la nueva const con el valor de la nueva array. */
    }
    )
};

const newArray = eliminar(); // constante con el valor de la funcion eliminar
console.log(newArray); // llamamos a la nueva array

/** 
**** CON AYUDA: Lo he intentado mirando solo los apuntes pero alfinal le he pedido que me lo hiciera el chat GPT y luego que me explicara bien que hacia cada funcion porque me estaba petando la cabeza al no entender como es que estaba eliminando los numeros repetidos. 

*/

// Output: [1, 2, 3, 4, 5]


/** Ejercicio 4: 

Combinar dos arrays y eliminar elementos duplicados
Escribe una función que reciba dos arrays y utilice los métodos concat() y filter() 
para combinar los arrays y eliminar elementos duplicados.
*/

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];

// Comienza tu código aquí


function fusionar() {
    const array3 = array1.concat(array2); //creamos una variable con valor = unArray.concatename (con el array que queremos unir)
    // console.log(array3); [1, 2, 3, 3, 4, 5]
    return array3.filter((newArray, numeros) => { // Aqui le decimos que .filtre la variable con el valor de la nueva array. 
        //".filtrame((parametros con nombres deseados: 1er p.: el array total, 2nd p.: con los elementos del array))"

        return array3.indexOf(newArray) === numeros; // {tu orden es que me devuelvas, (.indexOf(1er p: el array total)-> que esto es igual a que recorrar el nuevo array) y luego el que sea extrcitamente === filtralo }
    })// al filtrar un numero duplicado conseguiremos que solo mustre uno de ellos, por lo que "elimina" los numero dupicados.

}

// la funcion esta hecha, aunque necesitamos mostrarla, pues vamos a crear otra constante con valor funcion() solo para poder mostrar la funcion

const mostarNewArray = fusionar();// const = funcion()

console.log(mostarNewArray); // que nos mustre la funcion ya hecha.

/** 
AQUI YA POR FIN SOLO HE BUSCADO COMO SE ESTRUCTURA EL METODO. CONCAT() en https://developer.mozilla.org/, y basandome en el ejercicio anterior. 

*/ 

// Output: [1, 2, 3, 4, 5]


/** Ejercicio 5: 

Encontrar el número más pequeño en un array de números
Escribe una función que reciba un array de números como argumento y utilice el método reduce() para 
calcular el promedio de los números en el array.
*/
const numeros = [10, 5, 8, 15, 3];

// Comienza tu código aquí

const numeroBajo = Math.min(...numeros);

console.log('El numero mas bajo del array numeros es:', numeroBajo); // El numero mas bajo del array numeros es: 3

function promedio() {
    const inicio = 0;
    const suma = numeros.reduce((array, num) => array + num, inicio);
    const media = suma / numeros.length;
    console.log('El promedio de el array numeros es:', media);
}

promedio(numeros); // El promedio de el array numeros es: 8.2


//* SOLO CON UN POQUITO DE AYUDA: He mirado solo en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce la estructura del metodo .reduce() */

// Output: 3


/* Ejercicio 6: 

Invertir el orden de un array
Escribe una función que reciba un array y un elemento como argumentos, y utilice el método filter() para
contar la cantidad de veces que se repite ese elemento en el array.
*/
const array = [1, 2, 3, 4, 5];

// Comienza tu código aquí

const resultado = array.reverse(); // para invertir el orden del array .reverse()

console.log(resultado); // Output: [5, 4, 3, 2, 1]

// Escribe una función que reciba un array y un elemento como argumentos, y utilice el método filter() para
// contar la cantidad de veces que se repite ese elemento en el array.

function cantidad(array, numero) {
    const vecesRepetidas = array.filter((elemento) => elemento === numero).length;// . length para repetir tantas veces como sea su longitud, es decir por tantos elementos que tenga el array. 
    console.log("El numero", numero, 'se repite', vecesRepetidas, 'en este array', array, '.');
}

cantidad(array, 1);// El numero 1 se repite 0 en este array [ 5, 4, 3, 2, 1 ] .
cantidad(array, 2);// El numero 2 se repite 0 en este array [ 5, 4, 3, 2, 1 ] .
cantidad(array, 3);// El numero 3 se repite 0 en este array [ 5, 4, 3, 2, 1 ] .
cantidad(array, 4);// El numero 4 se repite 0 en este array [ 5, 4, 3, 2, 1 ] .
cantidad(array, 5);// El numero 5 se repite 0 en este array [ 5, 4, 3, 2, 1 ] .



/** Ejercicio 7: 

Eliminar todos los elementos duplicados de un array

Escribe una función que reciba un array de palabras como argumento y utilice el método join() para concatenar
todas las palabras en un solo string separado por comas.

*/
const duplicados = [1, 2, 2, 3, 4, 4, 5];

// Comienza tu código aquí
function limpiar() { // creamos una funcion sin pasarle parametros
    return duplicados.filter((array, elemento) => duplicados.indexOf(array) === elemento); // duplicados.filter filtrara la array "duplicados" formado una nueva array a la que le estamos indicando, con indexOf que los elementos sean estrictamente iguales, al encontrarse indexOf con un valor ya encontrado con anterioridad no lo filtrara por lo que la nueva array no contendra numeros repetidos.
}

const arraySinDuplicados = limpiar();

console.log(arraySinDuplicados);

// Output: [1, 2, 3, 4, 5]

// Escribe una función que reciba un array de palabras como argumento y utilice el método join() para concatenar
// todas las palabras en un solo string separado por comas.

function concatenar(array) {
    return array.join(',');
}

const texto = concatenar(['perro', 'gato', 'elefante']); // Output: perro,gato,elefante

console.log(texto);


/** Ejercicio 8: 

Parte 1: Contar la cantidad de veces que se repite cada elemento en un array

*/
const elementos = [1, 2, 2, 3, 4, 4, 4, 5];

function contar(array, num) {
    const repeticiones = array.filter(function (elemento) {
        return elemento == num;
    })
    return repeticiones.length;
}


const resultado = {}

for (let index = 0; index < elementos.length; index++) {
    const numero = elementos[index];
    const repeticionesElemento = contar(elementos, numero);
    resultado[numero] = repeticionesElemento;
}


console.log(resultado);


// Output: { '1': 1, '2': 2, '3': 1, '4': 3, '5': 1 }

/**
Parte 2: Escribe una función que reciba un array como argumento y utilice el método every()
para verificar si todos los elementos del array son iguales.

*/

let elementos = [4, 4, 3, 4, 4, 4, 5, 4];

function verificar(array) {
    return array.every((item) => item == elementos[0])
}

const resultado = verificar(elementos)
console.log(resultado)





// Ejercicio 9: Encontrar el número más pequeño en un array de números sin utilizar métodos explícitos de ordenamiento
// Escribe una función que reciba un array de números como argumento y encuentre el número más pequeño sin usar
// métodos explícitos de ordenamiento.

const numeros = [10, 5, 8, 15, 3];

function buscarMin(array) {
    const encontrar = array.find((item) => item <= array[4])
    console.log(encontrar)

}

buscarMin(numeros);


// Output: 3


// Ejercicio 10: Invertir el orden de un array sin utilizar el método reverse()
// Escribe una función que reciba un array como argumento y lo invierta sin utilizar el método reverse().
const array1 = [1, 2, 3, 4, 5];

function reverse(array) {
    var length = array.length;


    for (let posicion = 0; posicion < length / 2; posicion++) {
        const element = array[posicion];
        array[posicion] = array[length - 1 - posicion];
        array[length - 1 - posicion] = element;

    }

    return array1;
}

console.log(reverse(array1));



// Output: [5, 4, 3, 2, 1]


// Ejercicio 11: Eliminar todos los elementos duplicados de un array sin utilizar el método filter()
const duplicados = [1, 2, 2, 3, 4, 4, 5];

function eliminarDuplicados(array) {
    const arraySinDuplicados = [];

    // Recorremos el array original
    for (let i = 0; i < array.length; i++) {
        // Si el elemento actual no está en el array sin duplicados, lo agregamos
        if (arraySinDuplicados.indexOf(array[i]) === -1) {
            arraySinDuplicados.push(array[i]);
        }
    }

    return arraySinDuplicados;
}

console.log(eliminarDuplicados(duplicados));


// Output: [1, 2, 3, 4, 5]



// Ejercicio 12: Contar la cantidad de veces que se repite cada elemento en un array sin utilizar métodos explícitos de conteo
const elementosDuplicados = [1, 2, 2, 3, 4, 4, 4, 5];

function contarRepeticiones(array) {
    const contador = {}; // objeto vacio para ir agregando clave:valor--> clave  numero : valor repeticiones

    for (var posicion = 0; posicion < array.length; posicion++) {

        if (contador[array[posicion]]) {
            contador[array[posicion]]++; // Si el elemento ya existe en el contador, aumentamos su conteo

        } else {

            contador[array[posicion]] = 1; // Si el elemento no existe en el contador, lo inicializamos en 1
        }
    }

    return contador;
}


console.log(contarRepeticiones(elementosDuplicados));

// Output: { '1': 1, '2': 2, '3': 1, '4': 3, '5': 1 }

