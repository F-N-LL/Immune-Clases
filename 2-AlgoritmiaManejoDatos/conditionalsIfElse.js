// *****************************************************
//  2. Control de flujo: if & else
//  Lun. 22/04/2024
// *****************************************************

// Un programa de calificación automático que nos
// solicite ingresar mediante prompt() una nota
// y devuelva su calificación usando if y else.

let nota = prompt('Introduce una nota');

// Convertir la entrada de nota a un número
nota = parseFloat(nota); // También puedes usar parseInt(nota) si solo esperas números enteros

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

