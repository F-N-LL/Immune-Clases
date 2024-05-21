class Persona
{
    constructor()
    {
        this._Nombre = "";
        this._Apellidos = "";
        this._FechaNacimiento = "";        
    }
    get Nombre() { return this._Nombre; }
    get Apellidos() { return this._Apellidos; }
    get FechaNacimiento() { return this._FechaNacimiento; }
    set Nombre(nombre) { this._Nombre = nombre; }
    set Apellidos(apellidos) { this._Apellidos = apellidos; }
    set FechaNacimiento(fechanacimiento) { this._FechaNacimiento = fechanacimiento; } 
}

module.exports = Persona;