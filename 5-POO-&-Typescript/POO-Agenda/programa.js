const prompt = require('prompt-sync')();
const Contacto = require("./contacto.js");
const Agenda = require("./agenda.js");

function ObtenerOpcion(texto)
{
    let leido = false;
    let valorLeido = 0;
    while(!leido)
    {
        try
        {
            valorLeido = parseInt(prompt(texto));
            leido = true;
        }
        catch
        {
            console.log("ERROR: Tienes que introducir un número.");
        }
    }
    return valorLeido;
}

function MostrarMenu()
{
    console.log("--- Menú ---");
    console.log("1.- Mostrar contactos");
    console.log("2.- Buscar contactos");
    console.log("3.- Crear contacto nuevo");
    console.log("4.- Borrar contactos");
    console.log("5.- Guardar contactos");
    console.log("6.- Salir");            
}

function BuscarContactos()
{
    console.log("Buscar contactos: ");
    console.log("1.- Por nombre");
    console.log("2.- Por teléfono");
    console.log("3.- Volver");
    let finBuscar = false;
    while (!finBuscar)
    {
        let opcion = ObtenerOpcion("Opción: ");
        switch (opcion)
        {
            case 1:
                let nombre = prompt("Introduzca el nombre a buscar: ");
                let encontradosNombre = AgendaContactos.BuscarContactosPorNombre(nombre);
                if (encontradosNombre.length > 0)
                {
                    console.log("########## CONTACTOS ENCONTRADOS ##########");
                    for (contacto of encontradosNombre)
                        contacto.MostrarContacto();
                    console.log("###########################################");
                }
                else
                    console.log("INFO: No se han encontrado contactos con ese nombre.");
                finBuscar = true;
                break;
            case 2:
                let telefono = prompt("Introduzca el teléfono a buscar: ");
                let encontradosTelefono = AgendaContactos.BuscarContactosPorTelefono(telefono);
                if (encontradosTelefono.length > 0)
                {
                    console.log("########## CONTACTOS ENCONTRADOS ##########");
                    for (contacto of encontradosTelefono)
                        contacto.MostrarContacto();
                    console.log("###########################################");
                }
                else
                    console.log("INFO: No se han encontrado contactos con ese teléfono.");
                finBuscar = true;
                break;
            case 3:
                finBuscar = true;
                break;
        }
    }
}

function ProcesoCrearContactos()
{
    let contacto = new Contacto();
    contacto.Nombre = prompt("Introduzce el nombre: ");
    contacto.Apellidos = prompt("Introduzce los apellidos: ");
    contacto.FechaNacimiento = prompt("Introduzce la fecha de nacimiento: ");
    contacto.TelefonoMovil = prompt("Introduzce el teléfono móvil: ");
    contacto.TelefonoFijo = prompt("Introduzce el teléfono fijo: ");
    contacto.TelefonoTrabajo = prompt("Introduzce el teléfono del trabajo: ");
    contacto.Calle = prompt("Introduzce la calle: ");    
    contacto.Piso = prompt("Introduzce el piso: ");    
    contacto.Ciudad = prompt("Introduzce la ciudad: ");   
    contacto.CodigoPostal = prompt("Introduzce el código postal: ");    
    contacto.Email = prompt("Introduzce el email: ");
    AgendaContactos.CrearNuevoContacto(contacto);
}

function BorrarContacto()
{
    console.log("Buscar contactos a borrar por: ");
    console.log("1.- Por nombre");
    console.log("2.- Por teléfono");
    console.log("3.- Volver");
    let finBuscar = false;
    while (!finBuscar)
    {
        let opcion = ObtenerOpcion("Opción: ");
        switch (opcion)
        {
            case 1:
                let nombre = prompt("Introduzca el nombre: ");
                AgendaContactos.BorrarContactosPorNombre(nombre);
                finBuscar = true;
                break;
            case 2:
                let telefono = prompt("Introduzca el teléfono: ");
                AgendaContactos.BorrarContactosPorTelefono(telefono);
                finBuscar = true;
                break;
            case 3:
                finBuscar = true;
                break;
        }
    }
}

let AgendaContactos = new Agenda("Agenda.txt");
if (!AgendaContactos.CargarContactos())
    console.log("ERROR: No se pueden cargar los contactos del fichero.");
let fin = false;
while(!fin)
{
    MostrarMenu();
    switch(ObtenerOpcion("Opción: "))
    {
        case 1:
            AgendaContactos.MostrarAgenda();
            break;
        case 2:
            BuscarContactos();
            break;
        case 3:
            ProcesoCrearContactos();
            break;
        case 4:
            BorrarContacto();
            break;
        case 5:
            AgendaContactos.GuardarContactos();
            break;
        case 6:
            fin = true;
            break;
    }
}
console.log("FIN DEL PROGRAMA");