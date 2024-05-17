## Eventos: event.preventDefault()

<style>
    code {
        font-family: 'hack', monospace;
    }
</style>


`preventDefault()` es utilizado dentro de un listener de evento en un botón de envío (`submit`) dentro de un formulario. Aquí está el fragmento relevante:

```javascript
botonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputNombre.value);
});
```

Cuando un formulario es enviado (normalmente haciendo clic en un botón de envío como el que tienes aquí), el navegador intentará enviar los datos del formulario a una URL específica, lo que resultará en una recarga de la página o una navegación a esa URL.

Sin embargo, `preventDefault()` previene el comportamiento predeterminado asociado con el evento de clic en este contexto particular. En otras palabras, evita que el navegador ejecute su acción predeterminada cuando se hace clic en el botón de envío del formulario. 

En este caso específico, cuando el usuario hace clic en el botón de envío, en lugar de enviar el formulario y recargar la página (lo cual es el comportamiento predeterminado), `preventDefault()` asegura que eso no suceda. En su lugar, el código dentro del bloque de la función de callback se ejecuta. En tu caso, simplemente imprime el valor del campo de entrada de nombre (`inputNombre.value`) en la consola del navegador.

Por lo tanto, `preventDefault()` es útil cuando deseas manejar manualmente el envío del formulario mediante JavaScript, por ejemplo, para realizar alguna validación de datos o enviar los datos de manera asíncrona a través de AJAX, sin recargar la página.