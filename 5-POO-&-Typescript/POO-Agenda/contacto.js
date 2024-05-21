const Telefono = require("./telefono.js");
const Persona = require("./persona.js");
const Direccion = require("./direccion.js");

class Contacto
{
    constructor()
    {
        this._Persona = new Persona();
        this._Direccion = new Direccion();
        this._Telefono = new Telefono();
        this._Email = "";
    }

    set Email(email) { this._Email = email; }
    get Email() { return this._Email; }
    
    set Nombre(nombre) { this._Persona.Nombre = nombre; }
    set Apellidos(apellidos) { this._Persona.Apellidos = apellidos; }
    set FechaNacimiento(fechanacimiento) { this._Persona.FechaNacimiento = fechanacimiento; }
    get Nombre() { return this._Persona.Nombre; }
    get Apellidos() { return this._Persona.Apellidos; }
    get FechaNacimiento() { return this._Persona.FechaNacimiento; }
    
    set TelefonoMovil(movil) { this._Telefono.TelefonoMovil = movil; }
    set TelefonoFijo(fijo) { this._Telefono.TelefonoFijo = fijo; }
    set TelefonoTrabajo(trabajo) { this._Telefono.TelefonoTrabajo = trabajo; }
    get TelefonoMovil() { return this._Telefono.TelefonoMovil; }
    get TelefonoFijo() { return this._Telefono.TelefonoFijo; }
    get TelefonoTrabajo() { return this._Telefono.TelefonoTrabajo; }
    
    set Calle(calle) { this._Direccion.Calle = calle; }
    set Piso(piso) { this._Direccion.Piso = piso; }
    set Ciudad(ciudad) { this._Direccion.Ciudad = ciudad; }
    set CodigoPostal(codigopostal) { this._Direccion.CodigoPostal = codigopostal; }
    get Calle() { return this._Direccion.Calle; }
    get Piso() { return this._Direccion.Piso; }
    get Ciudad() { return this._Direccion.Ciudad; }
    get CodigoPostal() { return this._Direccion.CodigoPostal; }
    
    MostrarContacto()
    {
        console.log("----- Contacto -----");
        console.log("Nombre: " + this._Persona.Nombre);
        console.log("Apellidos: " + this._Persona.Apellidos);
        console.log("Fecha de nacimiento:" + this._Persona.FechaNacimiento);
        console.log("Teléfono móvil: " + this._Telefono.TelefonoMovil);
        console.log("Teléfono fijo: " + this._Telefono.TelefonoFijo);
        console.log("Teléfono trabajo: " + this._Telefono.TelefonoTrabajo);
        console.log("Calle: " + this._Direccion.Calle);
        console.log("Piso: " + this._Direccion.Piso);
        console.log("Ciudad: " + this._Direccion.Ciudad);
        console.log("Código postal: " + this._Direccion.CodigoPostal);
        console.log("Email: " + this._Email);
        console.log("--------------------");
    }
}

module.exports = Contacto;