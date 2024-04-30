// *****************************************************
//  3. Control de flujo: if, else & switch
//  Lun. 29/04/2024
// *****************************************************


// ✅ If, else y else if:

// Un programa de calificación automático que nos
// solicite ingresar mediante prompt() una nota
// y devuelva su calificación usando if y else.

let nota = parseInt(prompt('Introduce una nota'));

// Convertir la entrada de nota a un número
//nota = parseFloat(nota); // También puedes usar parseInt(nota) si solo esperas números enteros

if (!isNaN(nota)) { // Verificar si la conversión a número fue exitosa
    if (nota >= 5 && nota < 8) {
        console.log('Aprobado'); // Imprime 'Aprobado' si la nota está entre 5 y 7.9999...
    } else if (nota >= 8) {
        console.log('Excelente.'); // Imprime 'Excelente' si la nota es 8 o mayor
    } else {
        console.log('Reprobado'); // Imprime 'Reprobado' si la nota es menor que 5
    }
} else {
    console.log('Por favor, introduce un número válido.'); // Imprime un mensaje si la entrada no es un número
}



// ✅ Sentencias SWITCH 

var color = prompt('Dame un color').toLowerCase();

//Estamos pidiendo un color por pantalla y vamos a traducirlo al ingles.
//la función toLowerCase() y toUpperCase() transforman cualquier cadena de caracteres
//en minuscula y mayuscula respectivamente.

switch (color) {
        case 'rojo':
        case 'bermellon':
        alert('red');
        break;
        case 'azul':
        alert('blue');
        break;
        case 'amarillo':
        alert('yellow');
        break;
    default:
    alert('la palabra no existe en mi diccionario');
    break;
}


// ✅ Operadores Ternarios ? :

let age = prompt('¿edad?', 18);

let message = (age < 3) ? '¡Hola, bebé!' :
  (age < 18) ? '¡Hola!' :
  (age < 100) ? '¡Felicidades!' :
  '¡Qué edad tan inusual!';

alert( message );

// El primer signo de pregunta revisa si age < 3.
// Si es cierto, devuelve '¡Hola, bebé!'. De lo contrario, continúa a la expresión que está después de los dos puntos “:”, la cual revisa si age < 18.
// Si es cierto, devuelve '¡Hola!'. De lo contrario, continúa con la expresión que está después de los dos puntos siguientes “:”, la cual revisa si age < 100.
// Si es cierto, devuelve '¡Felicidades!'. De lo contrario, continúa a la expresión que está después de los dos puntos “:”, la cual devuelve '¡Qué edad tan inusual!'.



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

// ▶︎ Funciones Callback

// ▶︎ Funciones autoejecutadas

// ▶︎ Funciones REST 