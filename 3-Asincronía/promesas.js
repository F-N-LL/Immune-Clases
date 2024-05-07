// *****************************************************
//  5. Promesas
//  Mier. 08/05/2024
// *****************************************************



const miNuevaPromesa = new Promise((resolve, reject) => {
    // Aquí ocurre toda la lógica de la promesa
    setTimeout(() => {
        let randomNum = Math.random() * 15;
        if (randomNum > 0 && randomNum < 5) {
            resolve('La promesa se resuelve, suspenso ' + randomNum);
        } else if (randomNum >= 5 && randomNum <= 10) {
            resolve('La promesa se resuelve, aprobado ' + randomNum);
        } else {
            reject('La promesa da error, número no válido ' + randomNum);
        }
    }, 2000);
});

// Manejar el resultado de la promesa usando .then() y .catch()

miNuevaPromesa
    .then(resultado => {
        console.log(resultado); // Mostrar el resultado en la consola si la promesa se resuelve correctamente
    })
    .catch(error => {
        console.error(error); // Mostrar el error en la consola si la promesa es rechazada
    });