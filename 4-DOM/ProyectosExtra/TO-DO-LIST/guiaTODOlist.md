### Diagrama de Flujo

<style>
    code {
        font-family: 'hack', monospace;
    }
</style>


1. **Inicio**
   - El usuario accede a la página web.

2. **Agregar una Tarea**
   - El usuario ingresa el nombre de la tarea y la fecha en los campos correspondientes.
   - Al hacer clic en el botón "Agregar", se ejecuta `button.onclick`.

3. **Acciones del Botón**
   - Llama a `addTask()` para agregar la tarea a la lista.
   - Llama a `resetForm()` para limpiar los campos de entrada.
   - Llama a `renderListOfTasks()` para actualizar la visualización de la lista de tareas.

4. **Renderizar Lista de Tareas**
   - Limpia la lista actual en el DOM.
   - Itera sobre `listOfTasks` y agrega cada tarea como un nuevo elemento `li` en la lista.
   - Añade botones de "Eliminar", "Subir" y "Bajar" a cada tarea.
   - Asigna eventos `onclick` a cada botón para las acciones correspondientes.

5. **Mover Tareas**
   - Los botones de flecha permiten mover tareas hacia arriba o hacia abajo en la lista.
   - Llaman a `moveTaskUp(index)` o `moveTaskDown(index)` y luego a `renderListOfTasks()`.

6. **Eliminar Tareas**
   - El botón "Eliminar" llama a `showDeleteConfirmation(index)` que muestra una ventana de confirmación.
   - Si se confirma, llama a `removeTask(index)` y luego a `renderListOfTasks()`.

7. **Fetch desde API**
   - El botón de "Fetch" obtiene datos desde una API externa (`jsonplaceholder.typicode.com`).
   - Agrega la tarea recibida a `listOfTasks` con la fecha actual.
   - Llama a `renderListOfTasks()` para actualizar la lista.

### Guía Paso a Paso

1. **Definición de Variables y Elementos del DOM**
   ```javascript
   const button = document.getElementById('mySubmitButton');
   const textInput = document.getElementById('descriptionInput');
   const dateInput = document.getElementById('dateInput');
   const listUIElement = document.getElementById('list');
   let listOfTasks = [];
   ```

2. **Evento de Clic del Botón Principal**
   ```javascript
   button.onclick = e => {
       e.preventDefault();
       addTask();
       resetForm();
       renderListOfTasks();
   }
   ```
   - Evita el comportamiento predeterminado del formulario.
   - Llama a las funciones `addTask`, `resetForm` y `renderListOfTasks`.

3. **Función `resetForm`**
   ```javascript
   function resetForm() {
       textInput.value = '';
       dateInput.value = '';
   }
   ```
   - Limpia los campos de entrada para que estén listos para una nueva tarea.

4. **Función `addTask`**
   ```javascript
   function addTask() {
       const newTask = {
           name: textInput.value,
           dueDate: dateInput.value
       };
       listOfTasks.push(newTask);
   }
   ```
   - Crea un objeto `newTask` con los valores de entrada.
   - Añade `newTask` a `listOfTasks`.

5. **Funciones para Mover Tareas**
   ```javascript
   function moveTaskUp(index) {
       if (index > 0) {
           const temp = listOfTasks[index];
           listOfTasks[index] = listOfTasks[index - 1];
           listOfTasks[index - 1] = temp;
       }
   }

   function moveTaskDown(index) {
       if (index < listOfTasks.length - 1) {
           const temp = listOfTasks[index];
           listOfTasks[index] = listOfTasks[index + 1];
           listOfTasks[index + 1] = temp;
       }
   }
   ```
   - `moveTaskUp` intercambia la tarea con la anterior.
   - `moveTaskDown` intercambia la tarea con la siguiente.

6. **Función para Eliminar Tareas**
   ```javascript
   function removeTask(indexOfTaskToBeRemoved) {
       listOfTasks.splice(indexOfTaskToBeRemoved, 1);
   }
   ```
   - Remueve la tarea del array `listOfTasks`.

7. **Función para Confirmar Eliminación**
   ```javascript
   function showDeleteConfirmation(index) {
       const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar esta tarea?");
       if (confirmDelete) {
           removeTask(index);
           renderListOfTasks();
       }
   }
   ```
   - Muestra una ventana de confirmación antes de eliminar una tarea.

8. **Función para Renderizar la Lista de Tareas**
   ```javascript
   const renderListOfTasks = () => {
       listUIElement.innerHTML = '';
       listOfTasks.forEach((task, index) => {
           const liElement = document.createElement('li');
           liElement.className = 'item';

           const nameElement = document.createElement('p');
           nameElement.innerText = task.name;

           const dateElement = document.createElement('p');
           dateElement.innerText = task.dueDate;

           const buttonElement = document.createElement('button');
           buttonElement.innerText = 'ELIMINAR';
           buttonElement.className = 'delete-button';
           buttonElement.onclick = () => {
               showDeleteConfirmation(index);
           };

           const buttonUpElement = document.createElement('button');
           buttonUpElement.innerText = '▲';
           buttonUpElement.className = 'arrow-button arrow-up';
           buttonUpElement.onclick = () => {
               moveTaskUp(index);
               renderListOfTasks();
           };

           const buttonDownElement = document.createElement('button');
           buttonDownElement.innerText = '▼';
           buttonDownElement.className = 'arrow-button arrow-down';
           buttonDownElement.onclick = () => {
               moveTaskDown(index);
               renderListOfTasks();
           };

           liElement.appendChild(nameElement);
           liElement.appendChild(dateElement);
           liElement.appendChild(buttonElement);
           liElement.appendChild(buttonUpElement);
           liElement.appendChild(buttonDownElement);

           listUIElement.appendChild(liElement);
       });
   };
   ```

9. **Evento para el Botón de Fetch**
   ```javascript
   const fetchButton = document.getElementById('fetchButton');

   fetchButton.onclick = () => {
       fetch('https://jsonplaceholder.typicode.com/todos/1')
           .then(response => {
               if (!response.ok) {
                   throw new Error('Network response was not ok');
               }
               return response.json();
           })
           .then(data => {
               const currentDate = new Date();
               const formattedDate = currentDate.toLocaleDateString();

               listOfTasks.push({
                   name: data.title,
                   dueDate: formattedDate
               });

               renderListOfTasks();
           })
           .catch(error => {
               console.error('There was a problem with the fetch operation:', error);
           });
   };
   ```
   - Realiza una solicitud a una API externa.
   - Añade la tarea recibida a `listOfTasks` con la fecha actual.
   - Llama a `renderListOfTasks` para actualizar la lista.

Este flujo y guía detallan cómo cada parte del código contribuye a la funcionalidad general de la aplicación de lista de tareas, desde la entrada y manipulación de datos hasta la renderización en el DOM.