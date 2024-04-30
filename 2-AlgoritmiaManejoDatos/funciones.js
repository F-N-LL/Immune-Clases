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

// ▶︎ Funciones Callback

// ▶︎ Funciones autoejecutadas

// ▶︎ Funciones REST 