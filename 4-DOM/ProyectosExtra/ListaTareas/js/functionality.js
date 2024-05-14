// Seleccionar elementos del DOM
const button = document.getElementById('mySubmitButton');
const textInput = document.getElementById('descriptionInput');
const dateInput = document.getElementById('dateInput');
const listUIElement = document.getElementById('list');

// Lista de tareas
let listOfTasks = [];

// Función para agregar una nueva tarea
function addTask() {
    // Obtener los valores del input
    const newTask = {
        name: textInput.value,
        dueDate: dateInput.value
    }
    // Agregar la nueva tarea a la lista
    listOfTasks.push(newTask);
}

// Función para resetear el formulario
function resetForm() {
    textInput.value = '';
    dateInput.value = '';
}

// Función para renderizar la lista de tareas
const renderListOfTasks = () => {
    // Limpiar la lista antes de renderizar
    listUIElement.innerHTML = '';

    // Iterar sobre la lista de tareas y renderizar cada tarea
    listOfTasks.forEach((task, index) => {
        // Crear elementos HTML para mostrar la tarea
        const liElement = document.createElement('li');
        // Agregar contenido a los elementos
        // ...
        // Agregar los elementos al DOM
        // ...

        // Event listener para el botón de eliminar tarea
        // ...

        // Event listeners para los botones de mover la tarea
        // ...

        // Agregar el elemento li a la lista
        listUIElement.appendChild(liElement);
    });
}

// Event listener para el botón de agregar tarea
button.onclick = e => {
    e.preventDefault();
    addTask();
    resetForm();
    renderListOfTasks();
}

// Funciones para mover tareas hacia arriba y hacia abajo
// ...

// Función para eliminar una tarea
// ...

// Función para mostrar confirmación de eliminación
// ...
