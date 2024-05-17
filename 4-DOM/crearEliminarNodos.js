// Crear nodo de tipo element parrafo

let parrafo = document.createElement("p");

// Crear nodo de tipo text con texto cualquiera

let contenido = document.createTextNode("Hola desde el DOM");

// Añadir el nodo de texto como hijo del nodo parrafo

parrafo.appendChild(contenido);

// Añadir el nodo parrafo ya con el texto como hijo del body.

document.body.appendChild(parrafo);




//ELIMINAR NODOS, más facil

let segundoLi = document.querySelector('ul li:nth-child(2)');

//le pregunto quien es su elemento padre.

console.log(segundoLi.parentNode) // me devuelve el ul.

//Ahora solo tengo que aplicar el método removeChild (contrario del appendChild )
//para eliminar ese elemento desde el padre.

segundoLi.parentNode.removeChild(segundoLi)