// *****************************************************
//  5. Dudas REST
//  Mier. 08/05/2024
// *****************************************************


// Spread operator para concatenar los arrays:

const estudiantes = [ 'JuanCarlos', 'Alba', 'Jason', 'Martha' ]

const profesores = [ 'Pablo', 'Daniel', 'Rafael', 'Emilio' ]

const immune = [ ...estudiantes, ...profesores ]

//console.log(immune)


const aves = new Array('Aguila', 'Cuervo', 'Periquito');
const felinos = new Array('Tigre', 'Leon', 'Pantera', 'Leopardo');
const reptiles = new Array('Serpiente', 'Iguana', 'Cocodrilo');
const zoo = new Array(felinos, aves, reptiles);


for (let especie of zoo) {
    for (let animal of especie) {
        console.log(animal)
    }
}
    
console.log(zoo)

const zoo2 = [ ...aves, ...felinos, ...reptiles];
console.log(zoo2)







// 🏋🏽 Ejercicios ...spread operator REST parameters
// Resuelve estos enunciados creando funciones que pasen ...REST parameters 

// ✅Enunciado 1: Suma de Números
// Desarrolla una función llamada sumarNumeros que reciba un número variable 
//de argumentos numéricos y devuelva la suma de todos ellos.Ejemplo de entrada:






// no tocar
console.log(sumarNumeros(1, 2, 3, 4))
//Salida esperada: 10



// ✅Enunciado 2: Calcular Promedio
// Implementa una función llamada calcularPromedio que acepte una cantidad 
//variable de números y calcule el promedio de todos ellos.Ejemplo de entrada:




// no tocar
console.log(calcularPromedio(2, 4, 6, 8, 10))
//Salida esperada: 6




//✅ Enunciado 3: Encontrar el Mayor
//Crea una función llamada encontrarMayor que tome una cantidad indefinida de 
//argumentos numéricos y devuelva el número más grande de todos.Ejemplo de entrada:



// no tocar
console.log(encontrarMayor(10, 5, 23, 8, 17))
//Salida esperada: 23


