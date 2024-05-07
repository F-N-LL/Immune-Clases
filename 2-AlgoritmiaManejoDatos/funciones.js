// *****************************************************
//  3. Funciones
//  Lun. 29/04/2024 y 06/05/2024
// *****************************************************


// ✅ Funciones

// ▶︎ Funcion que recibe parametros 

function saludar(nombre) {
    console.log(`¡Hola, ${nombre}`);
}

saludar("Marta");


// ▶︎ Funcion que devuelve/returns params

function suma(a, b) {
    return a + b;
}

let resultado = suma(2, 7);
console.log(resultado)


// ▶︎ Funciones anónimas
let saludar = function saludar(nombre) {
    console.log(`¡Hola, ${nombre}`);
}

saludar("Marta");


// ▶︎ Arrow functions - Funciones flecha =>

    // esto es una funcion anonima
    let saludar = function saludar(nombre) {
        console.log(`¡Hola, ${nombre}`);
    }

    saludar("Marta");

    // se convierte en flecha, así: 

    let saludar1 = (nombre) => {
        console.log(`¡Hola, ${nombre}`);
    }

    saludar1("Carles");

    // otro modo de hacerla Arrow Function

    saludar2 = (nombre) => console.log(`Hola, ${nombre}`)
    saludar2("Alba");


//  ******** Continua 6 de Mayo... **********

//Repasamos funciones:

function showMessage(from, text) {
    from = '#' + from + '#';

    alert( from + ':' + text );
}

let from = "Daniel";

showMessage(from, "Aprendiendo JS");





// ▶︎ Funciones Callback

function modificar (array, callback) {
    // en primer lugar
    array.push('Alba')

    callback(array)
}

const names = ['Martha', 'Daniel', 'Alexander']

modificar (names, function(array){
    console.log(`Vaya! El array ha cambiado. Ahora su longitud es de ${array.length}`)
})


// fijando un setTimeout para retrasar la ejecución:

function modificar (array, callback) {
    // en primer lugar
    array.push('Alba')

    setTimeout(function() { callback(array) }, 3000)
}

const names = ['Martha', 'Daniel', 'Alexander']

modificar (names, function(array){
    console.log(`Vaya! El array ha cambiado. Ahora su longitud es de ${array.length}`)
})






// ▶︎ Funciones autoejecutadas

//Básico sin argumentos:

(function() {
    console.log("Esta función se ejecuta automáticamente");
})();
// En este ejemplo, la función se define entre paréntesis y se invoca inmediatamente
// después con (). No toma ningún argumento.

// Con argumentos:

(function(nombre) {
    console.log("Hola, " + nombre);
})("Juan");
// Aquí, la función toma un argumento nombre. Se define entre paréntesis y se invoca
// inmediatamente con ("Juan"), pasando "Juan" como argumento.

// Retornando un valor:

let resultado = (function(a, b) {
    return a + b;
})(3, 5);

console.log(resultado); // Output: 8
// En este caso, la función toma dos argumentos a y b, los suma y devuelve el resultado.
// Luego, el resultado se asigna a la variable resultado mediante la invocación inmediata (3, 5).





// ▶︎ Funciones REST  ...parameters 

// Ejemplo contenidos:

function calcular(pTipo, ...pDatos) { // Los tres puntos (... spread operator) nos indica que todos los argumentos que pasemos a la función después de pTipo, se almacenarán en ...pDatos.
switch (pTipo) {
    case "sumar":
        sumar(pDatos);
        break;
    case "multiplicar":
        multiplicar(pDatos);
        break;
}
}

function multiplicar(pArray) {
let multiplicacion = 1;
for (let i = 0; i < pArray.length; i++) {
    multiplicacion *= pArray[i];
}
console.log(multiplicacion);
}

calcular('multiplicar', 1, 2, 3, 4, 5);



// ejemplo más sencillo

function sumar(...numeros) {
let total = 0;
for (let numero of numeros) {
    total += numero;
}
return total;
}

console.log(sumar(1, 2, 3)); // Output: 6
console.log(sumar(1, 2, 3, 4, 5)); // Output: 15
