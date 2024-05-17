<style>
    code {
        font-family: 'hack', monospace;
    }
</style>

Explicacion de Fetch() y las diferentes operaciones CRUD (Crear, Leer, Actualizar, Eliminar) que se pueden realizar con él.

### Introducción a Fetch:

Fetch es una API moderna de JavaScript que permite realizar peticiones HTTP asíncronas de forma más sencilla y directa, utilizando promesas. Se puede utilizar para interactuar con recursos en servidores remotos. 

### Ejemplos de Peticiones:

#### GET - Obtener datos:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

Este código realiza una petición GET a la URL proporcionada, convierte la respuesta a formato JSON y la imprime en la consola. Si hay algún error, se maneja en el bloque `catch`.

### Filtrado de datos:

Si deseas filtrar y extraer información específica de la respuesta obtenida mediante la solicitud Fetch, puedes hacerlo utilizando funciones de array como `filter()`, `map()`, `reduce()`, entre otras.


Por ejemplo para sacar elementos de posiciones del array:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const firstPostTitle = data[0].title;
        console.log(firstPostTitle);
    })
    .catch(error => console.error('Error:', error));
```



1. **Filtrar datos:**

   Supongamos que deseas filtrar los posts por un criterio específico, por ejemplo, por el usuario que los creó. Puedes utilizar el método `filter()` para ello. Por ejemplo, si quieres obtener solo los posts creados por el usuario con el ID igual a 1:

   ```javascript
   fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => {
           const filteredPosts = data.filter(post => post.userId === 1);
           console.log(filteredPosts);
       })
       .catch(error => console.error('Error:', error));
   ```

   En este caso, `filteredPosts` contendrá solo los posts cuyo `userId` sea igual a 1.

2. **Extraer información específica:**

   Si deseas extraer solo cierta información de los posts, como por ejemplo solo los títulos, puedes utilizar el método `map()`:

   ```javascript
   fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => {
           const titles = data.map(post => post.title);
           console.log(titles);
       })
       .catch(error => console.error('Error:', error));
   ```

   Aquí, `titles` contendrá un array con los títulos de todos los posts.

3. **Combinar filtrado y extracción de información:**

   Puedes combinar ambas operaciones para filtrar los posts y luego extraer solo la información deseada. Por ejemplo, si quieres obtener solo los títulos de los posts creados por el usuario con ID igual a 1:

   ```javascript
   fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => {
           const filteredPosts = data.filter(post => post.userId === 1);
           const titles = filteredPosts.map(post => post.title);
           console.log(titles);
       })
       .catch(error => console.error('Error:', error));
   ```

   Este código primero filtra los posts por `userId`, y luego extrae los títulos de los posts filtrados.

Al utilizar estos métodos, puedes manipular y trabajar con los datos obtenidos de la solicitud Fetch de manera más específica y adaptada a tus necesidades.


#### POST - Enviar datos:

```javascript
const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

Aquí se envían datos al servidor utilizando el método POST. Se especifica el cuerpo de la solicitud con la propiedad `body`, que se convierte a formato JSON utilizando `JSON.stringify`.

#### PUT - Actualizar datos:

```javascript
const putData = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(putData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

En este ejemplo, se actualizan datos utilizando el método PUT. Se especifica la URL del recurso a actualizar y se proporciona el cuerpo de la solicitud con los datos actualizados.

#### DELETE - Eliminar datos:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

Aquí se elimina un recurso utilizando el método DELETE. Se especifica la URL del recurso a eliminar y se envía la solicitud al servidor.

### Consideraciones adicionales:

- **Encadenamiento de promesas:** Fetch devuelve una promesa, lo que permite encadenar métodos `then()` y `catch()` para manejar la respuesta y los errores de manera ordenada y legible.
  
- **Headers:** Se pueden especificar encabezados personalizados en la solicitud utilizando la propiedad `headers`.
  
- **Gestión de errores:** Es importante manejar los errores adecuadamente utilizando el bloque `catch()` para evitar problemas y mejorar la robustez del código.

