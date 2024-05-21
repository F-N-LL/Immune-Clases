const fs = require('fs');
const Contacto = require("./contacto.js");

class Agenda
{
    constructor(path)
    {
        this._Path = path;
        this._ListaContactos = new Array();
    }

    CargarContactos()
    {
        try
        {
            fs.statSync(this._Path)
            
            this._ListaContactos = new Array();
            const datos = fs.readFileSync(this._Path, 'utf8'); 
            
            let cadenas = datos.split("\n");
            
            if(cadenas.length > 0)
            {
                for (let cad of cadenas)
                {             
                    let datos = cad.split("#");
                    if(datos.length == 11)
                    {
                        let contacto = new Contacto();
                        contacto.Nombre = datos[0];
                        contacto.Apellidos = datos[1];
                        contacto.FechaNacimiento = datos[2];
                        contacto.TelefonoMovil = datos[3];
                        contacto.TelefonoFijo = datos[4];
                        contacto.TelefonoTrabajo = datos[5];
                        contacto.Calle = datos[6];
                        contacto.Piso = datos[7];
                        contacto.Ciudad = datos[8];
                        contacto.CodigoPostal = datos[9];
                        contacto.Email = datos[10];
                        this._ListaContactos.push(contacto);
                    }
                }
            }
        
            console.log("INFO: Se han cargado un total de %s contactos.", this._ListaContactos.length);
            return true;
        }
        catch(ex)
        {
            console.log(ex.Message);
            return false;
        }
    }
    
    CrearNuevoContacto(contacto)
    {
        this._ListaContactos.push(contacto);            
    }
    
    GuardarContactos()
    {
        try
        {
            let cadena = "";
            for(let contacto of this._ListaContactos)
            {
                cadena = cadena.concat(contacto.Nombre + "#");
                cadena = cadena.concat(contacto.Apellidos + "#");
                cadena = cadena.concat(contacto.FechaNacimiento + "#");
                cadena = cadena.concat(contacto.TelefonoMovil + "#");
                cadena = cadena.concat(contacto.TelefonoFijo + "#");
                cadena = cadena.concat(contacto.TelefonoTrabajo + "#");
                cadena = cadena.concat(contacto.Calle + "#");
                cadena = cadena.concat(contacto.Piso + "#");
                cadena = cadena.concat(contacto.Ciudad + "#");
                cadena = cadena.concat(contacto.CodigoPostal + "#");
                cadena = cadena.concat(contacto.Email + "\n");
            }

            fs.writeFileSync(this._Path, cadena);
            console.log("INFO: Contactos guardados correctamente.");
            return true;
        }
        catch(ex)
        {
            console.log("ERROR: " + ex.Message);
        }
        return false;
    }

    MostrarAgenda()
    {
        console.log("########## AGENDA ##########");
        console.log("Número de contactos: %s", this._ListaContactos.length);
        for(let i of this._ListaContactos)
        {
            i.MostrarContacto();
        }
        console.log("############################");

    }
    
    BuscarContactosPorNombre(nombre)
    {
        let listaEncontrados = new Array();
        for(let contacto of this._ListaContactos)
        {
            if(contacto.Nombre==nombre)
                listaEncontrados.push(contacto);
        }
        return listaEncontrados;
    }
    
    BuscarContactosPorTelefono(telefono)
    {
        let listaEncontrados = new Array();
        for (let contacto of this._ListaContactos)
        {
            if (contacto.TelefonoMovil == telefono 
                || contacto.TelefonoFijo == telefono
                || contacto.TelefonoTrabajo == telefono)
                listaEncontrados.push(contacto);
        }
        return listaEncontrados;
    }

    BorrarContactosPorNombre(nombre)
    {
        let listaFinal = new Array();
        for (let contacto of this._ListaContactos)
        {
            if (!(contacto.Nombre == nombre))
                listaFinal.push(contacto);
        }
        console.log("INFO: Se han borrado %s contactos.", (this._ListaContactos.length - listaFinal.length));
        this._ListaContactos = listaFinal;
    }
    
    BorrarContactosPorTelefono(telefono)
    {
        let listaFinal = new Array();
        for (let contacto of this._ListaContactos)
        {
            if (!(contacto.TelefonoMovil == telefono
                || contacto.TelefonoFijo == telefono
                || contacto.TelefonoTrabajo == telefono))
                listaFinal.push(contacto);                
        }
        console.log("INFO: Se han borrado %s contactos.", (this._ListaContactos.length - listaFinal.length));
        this._ListaContactos = listaFinal;
    }
}

module.exports = Agenda;