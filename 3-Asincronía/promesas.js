// *****************************************************
//  5. Promesas
//  Mier. 08/05/2024
// *****************************************************


// CONSTRUCTOR JS Y PALABRA CLAVE NEW
// La función constructora es técnicamente una función normal. Aunque hay dos convenciones:
    // Son nombradas con la primera letra mayúscula.
    // Sólo deben ejecutarse con el operador "new".

    function User(name) {
        this.name = name;
        this.isAdmin = false;
      }
    
      let user = new User("Jack");
      alert(user.name); // Jack
      alert(user.isAdmin); // false
    
    // Cuando una función es ejecutada con new, realiza los siguientes pasos:
    
    //   Se crea un nuevo objeto vacío y se asigna a this. 
    //   Se ejecuta el cuerpo de la función. Normalmente se modifica this y se le agrega nuevas propiedades.
    //   Se devuelve el valor de this.
    
    // Entonces let user = new User("Jack") da el mismo resultado que:
    
    let user = {
      name: "Jack",
      isAdmin: false
    };
    
    // Técnicamente cualquier función (excepto las de flecha pues no tienen lugar pare el this) puede ser
    //  utilizada como constructor. Puede ser llamada con new, y ejecutará el algoritmo de arriba. 
    // La “primera letra mayúscula” es un acuerdo general, para dejar en claro que la función debe ser 
    // ejecutada con 'new'.
    
    
    
      //PROMESAS 
    
    
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
    // Sin este paso, no se sabremos si 'resuelve' o 'rechaza' 
    
    miNuevaPromesa
        .then(resultado => {
            console.log(resultado); // Mostrar el resultado en la consola si la promesa se resuelve correctamente
        })
        .catch(error => {
            console.error(error); // Mostrar el error en la consola si la promesa es rechazada
        });
    
    
    
    
    
    
    // Otro ejemplo, pero con arrays
    
    // Función que simula una operación asincrónica para sumar los elementos de un array
    function sumarArray(array) {
        return new Promise((resolve, reject) => {
            // Simular una operación asincrónica con setTimeout
            setTimeout(() => {
                // Verificar si el array es válido  (❓❓❓ podríamos eliminar esta logica if-else y solo dejar un resolve()?? )
                if (!Array.isArray(array)) {
                    reject('El argumento no es un array.');
                } else {
                    // Sumar los elementos del array
                    const suma = array.reduce((total, num) => total + num, 0);
                    resolve(suma);
                }
            }, 2000); // Simulamos una operación que toma 2 segundos
        });
    }
    
    // Array de ejemplo
    const numeros = [1, 2, 3, 4, 5];
    
    // Usar la promesa para sumar los números del array
    sumarArray(numeros)
        .then(resultado => {
            console.log('La suma de los números es:', resultado);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    
    
    
    
        // FINALLY ejemplo con arrays
    
        // Función que filtra un array y devuelve solo los números pares de manera asincrónica
    function filtrarNumerosPares(array) {
        return new Promise((resolve, reject) => {
            // Simular una operación asincrónica con setTimeout
            setTimeout(() => {
                // Verificar si el argumento es un array
                if (!Array.isArray(array)) {
                    reject('El argumento no es un array.');
                } else {
                    // Filtrar los números pares del array
                    const numerosPares = array.filter(numero => numero % 2 === 0);
                    resolve(numerosPares);
                }
            }, 2000); // Simulamos una operación que toma 2 segundos
        });
    }
    
    // Array de ejemplo
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Usar la promesa para filtrar los números pares del array
    filtrarNumerosPares(numeros)
        .then(numerosPares => {
            console.log('Números pares:', numerosPares);
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            console.log('La operación de filtrado ha finalizado.'); // Se ejecuta independientemente de si la promesa se resuelve o se rechaza
        });
    
    
    
    // PROMISE ALL
    
    // Ejemplo de Promise.all
    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Uno'), 2000);
    });
    const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Dos'), 2000);
    });
    const promesa3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Tres'), 2000);
    });
    
    Promise.all([promesa1, promesa2, promesa3])
        .then(resultados => {
            console.log('Todos los resultados:', resultados);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    
    
    // PROMISE ANY (parecido a .find - la primera que cumpla)
    
    // Ejemplo de Promise.any
    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Uno'), 2000);
    });
    const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Dos'), 2000);
    });
    const promesa3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Tres'), 2000);
    });
    
    Promise.any([promesa1, promesa2, promesa3])
        .then(resultado => {
            console.log('El primer resultado:', resultado);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    
    
    // PROMISE RACE (la primera promesa que se procese: ya se cumpla o se rechace)
    
    // Ejemplo de Promise.race
    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Uno'), 2000);
    });
    const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => reject('Dos'), 2000);
    });
    const promesa3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Tres'), 2000);
    });
    
    Promise.race([promesa1, promesa2, promesa3])
        .then(resultado => {
            console.log('El primer resultado:', resultado);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    
    
    
    // ENCAPSULANDO PROMESAS
    
    // Función que devuelve una promesa que realiza una suma asíncrona de dos números
    function sumarAsync(num1, num2) {
        return new Promise((resolve, reject) => {
            // Simular una operación asíncrona con setTimeout
            setTimeout(() => {
                // Realizar la suma
                const resultado = num1 + num2;
                // Resolver la promesa con el resultado
                resolve(resultado);
            }, 2000); // Simulamos una operación que toma 2 segundos
        });
    }
    
    // Uso de la función encapsulada para realizar la suma
    sumarAsync(5, 3)
        .then(resultado => {
            console.log('El resultado de la suma es:', resultado);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    
        // En este ejemplo, la función sumarAsync encapsula la operación de suma asíncrona
        // de dos números y devuelve una promesa. Dentro de la promesa, se realiza la suma
        // después de un tiempo simulado de 2 segundos con setTimeout. Si la suma se 
        // completa con éxito, la promesa se resuelve con el resultado de la suma usando
        // resolve(resultado). Si ocurre algún error durante la suma, la promesa se 
        // rechaza utilizando reject(error).
    
        // Luego, utilizamos la función sumarAsync para realizar la suma de dos números 
        // (en este caso, 5 y 3). Manejamos el resultado de la promesa utilizando then 
        // para mostrar el resultado de la suma en la consola si la promesa se resuelve 
        // correctamente, y catch para manejar cualquier error que pueda ocurrir durante 
        // la ejecución de la promesa.
    
    
    
    
    
    // PROMESAS DEPENDIENTE Y CALLBACK HELL ~ HADOUKEN CODE
    // ¡¡¡ jugar con el timeout para ver la dependencia
    
    
    getUser((user) => {
        getAge(user, (age) => {
            printMessage(user, age, () => {
                console.log('Mensaje impreso con éxito.');
            }, (error) => {
                console.error('Error al imprimir el mensaje:', error);
            });
        }, (error) => {
            console.error('Error al obtener la edad:', error);
        });
    }, (error) => {
        console.error('Error al obtener el usuario:', error);
    });
    
    function getUser(callbackSuccess, callbackError) {
        setTimeout(() => {
            const user = 'John';
            callbackSuccess(user);
        }, 2000);
    }
    
    function getAge(user, callbackSuccess, callbackError) {
        setTimeout(() => {
            if (user === 'John') {
                const age = 30;
                callbackSuccess(age);
            } else {
                callbackError('Usuario no encontrado.');
            }
        }, 2000);
    }
    
    function printMessage(user, age, callbackSuccess, callbackError) {
        setTimeout(() => {
            if (user && age) {
                console.log(`El usuario ${user} tiene ${age} años.`);
                callbackSuccess();
            } else {
                callbackError('Datos incompletos.');
            }
        }, 2000);
    }
    
    
    
    
    
    // ASYNC AWAIT
    
    // ejemplo temario
    
    function cargaNotas() {
        const miPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                let randomNum = Math.random() * 15;
                resolve(parseFloat(randomNum.toFixed(2)));
            }, 1500);
        });
        return miPromesa;
    }
    
    async function comprobarNotas() {
        let nota = await cargaNotas();
        console.log(nota);
    }
    
    comprobarNotas()
    
    //hasta aqui es el minimo indispensable
        // .then(() => {
        //     console.log('Proceso completado');
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
    
    
    // ************ OTRO EJEMPLO async await ********
    
    // Función que simula obtener el nombre de un usuario después de un tiempo de espera
    function obtenerUsuario() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('John Doe'); // Simulación de obtener el nombre del usuario
            }, 2000); // Simulamos una operación que toma 2 segundos
        });
    }
    
    // Función que utiliza async/await para esperar a que se resuelva la promesa
    async function saludarUsuario() {
        console.log('Obteniendo nombre del usuario...');
        const nombreUsuario = await obtenerUsuario(); // Esperamos a que se resuelva la promesa
        console.log('Hola,', nombreUsuario);
    }
    
    // Llamamos a la función que utiliza async/await
    saludarUsuario()
        .then(() => {
            console.log('Fin del programa.');
        })
    
    
    
    
    // TRY ~ CATCH

  
// Imagina que tienes una función llamada obtenerUsuario que devuelve el nombre de un usuario
// después de un cierto tiempo de espera simulado. Queremos usar async y await para esperar 
// a que esta función se complete antes de continuar con la ejecución del código.


// Función que simula obtener el nombre de un usuario después de un tiempo de espera
function obtenerUsuario() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('John Doe'); // Simulación de obtener el nombre del usuario
        }, 2000); // Simulamos una operación que toma 2 segundos
    });
}

// Función que utiliza async/await para esperar a que se resuelva la promesa
async function saludarUsuario() {
    try {
        console.log('Obteniendo nombre del usuario...');
        const nombreUsuario = await obtenerUsuario(); // Esperamos a que se resuelva la promesa
        console.log('Hola,', nombreUsuario);
    } catch (error) {
        console.error('Error al obtener el nombre del usuario:', error);
    }
}

// Llamamos a la función que utiliza async/await
saludarUsuario();
console.log('Fin del programa.');


// En este ejemplo:

// Definimos la función obtenerUsuario, que devuelve una promesa que se resuelve con el 
// nombre del usuario después de un tiempo de espera simulado de 2 segundos.

// Luego, definimos la función saludarUsuario con la palabra clave async, lo que 
// indica que esta función contendrá expresiones await.

// Dentro de saludarUsuario, utilizamos await para esperar a que la promesa devuelta 
// por obtenerUsuario se resuelva. Esto significa que la ejecución del código se pausará 
// en esta línea hasta que la promesa se resuelva con el nombre del usuario.

// Usamos try y catch para manejar cualquier error que pueda ocurrir durante la ejecución de la promesa.

// Finalmente, llamamos a saludarUsuario(). Como saludarUsuario contiene expresiones await, 
// se ejecutará de forma asíncrona, permitiendo que otras partes del código continúen 
// ejecutándose mientras esperamos a que se resuelva la promesa.

