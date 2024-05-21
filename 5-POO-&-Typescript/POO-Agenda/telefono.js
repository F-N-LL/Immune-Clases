class Telefono
{
    constructor()
    {
        this._TelefonoMovil = "";
        this._TelefonoFijo = "";
        this._TelefonoTrabajo = "";
    }
    get TelefonoMovil() { return this._TelefonoMovil; }
    get TelefonoFijo() { return this._TelefonoFijo; }
    get TelefonoTrabajo() { return this._TelefonoTrabajo; }
    set TelefonoMovil(telefonomovil) { this._TelefonoMovil = telefonomovil; }
    set TelefonoFijo(telefonofijo) { this._TelefonoFijo = telefonofijo; }
    set TelefonoTrabajo(telefonotrabajo) { this._TelefonoTrabajo = telefonotrabajo; } 
}

module.exports = Telefono;