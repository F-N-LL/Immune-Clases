// Seleccionar elementos del DOM
const button = document.getElementById('mySubmitButton');
const textInput = document.getElementById('descriptionInput');
const dateInput = document.getElementById('dateInput');
const listUIElement = document.getElementById('list');

// Lista de tareas
let listOfTasks = [];


// function resetForm
function resetForm() {
    textInput.value = '';
    dateInput.value = '';
    
}

// Añadir tareas

function addTask() {
    console.log('Valores actuales del text y date', textInput.value, dateInput.value)

    const newTask = {
        name: textInput.value,
        dueDate: dateInput.value
    }
// añadir tarea recien creada
listOfTasks.push(newTask)
}


button.onclick = e => {
    e.preventDefault();
    addTask();
    resetForm();
    renderListOfTasks();


}

function removeTask(indexOfTaskToBeRemoved) {
    listOfTasks.splice(indexOfTaskToBeRemoved, 1)
}

function showDeleteConfirmation(index) {
    const confirmDelete = window.confirm("¿Borrar tarea?");

    if (confirmDelete) {
        removeTask(index)
        renderListOfTasks();
    }

}


function moveTaskUp(index) {
    if (index > 0) {
        const temp = listOfTasks[index];
        listOfTasks[index] = listOfTasks[index - 1]
        listOfTasks[index - 1] = temp;
    }
}

function moveTaskDown(index) {
    if (index < listOfTasks.length - 1){
        const temp = listOfTasks[index];
        listOfTasks[index] = listOfTasks[index + 1]
        listOfTasks[index + 1] = temp;

    }
}



const renderListOfTasks = () => {
    console.log("cargando la lista de tareas")

    // Vaciar la lista previo a adición de nueva tareas
    listUIElement.innerHTML = '';

    // Bucle para pintar cada tarea

    listOfTasks.forEach((task, index) => {
        // crear elemento li
        const liElement = document.createElement('li');
        liElement.className = 'item';

        // crear parrafos text y date
        const nameElement = document.createElement('p');
        nameElement.innerText = task.name;

        const dateElement = document.createElement('p');
        dateElement.innerText = task.dueDate;

        // Añadir boton borrado
        const buttonElement = document.createElement('button');
        buttonElement.innerText = 'ELIMINAR';
        buttonElement.className = 'delete-button';
        buttonElement.onclick = () => {
            showDeleteConfirmation(index)
        };


        // Añadir Flechas
        const buttonUpElement = document.createElement('button');
        buttonUpElement.innerText = '↑';
        buttonUpElement.className = 'arrow-button arrow-up';
        buttonUpElement.onclick = () => {
           moveTaskUp(index);
           renderListOfTasks();
        };

        const buttonDownElement = document.createElement('button');
        buttonDownElement.innerText = '↓';
        buttonDownElement.className = 'arrow-button arrow-down';
        buttonDownElement.onclick = () => {
           moveTaskDown(index);
           renderListOfTasks();
        };


        // Pintar elementos 

        liElement.appendChild(nameElement);
        liElement.appendChild(dateElement);
        liElement.appendChild(buttonElement);
        liElement.appendChild(buttonUpElement);
        liElement.appendChild(buttonDownElement);


        listUIElement.appendChild(liElement);
        

    })

}

// Deberes crear el boton desde JS y no desde HTML


const mainElement = document.querySelector('form'); // Selecciona el formulario o main

const fetchButton = document.createElement('button');
fetchButton.innerText = 'llamada API';
fetchButton.id = 'fetchButton';
fetchButton.className = 'center bluebox fetchbutton'; 

// const fetchButton = document.getElementById('fetchButton')

fetchButton.onclick = () => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Server network not ok')
            }
            return response.json()
        })

        .then(data => {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString() //formato europeo DD/MM/YYYY
            
            // Añadimos a lista de tareas
            listOfTasks.push({
                name: data.title,
                dueDate: formattedDate
            });

            renderListOfTasks()

        })

        .catch(error => {
            console.log('Problemillas', error)
        })
    
}

//formElement.appendChild(fetchButton)
mainElement.insertAdjacentElement('afterend', fetchButton);
