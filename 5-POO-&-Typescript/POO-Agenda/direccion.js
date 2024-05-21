class Direccion
{
    constructor()
    {
        this._Calle = "";
        this._Piso = "";
        this._Ciudad = "";
        this._CodigoPostal = "";
    }
    get Calle() { return this._Calle; }
    get Piso() { return this._Piso; }
    get Ciudad() { return this._Ciudad; }
    get CodigoPostal() { return this._CodigoPostal; }
    set Calle(calle) { this._Calle = calle; }
    set Piso(piso) { this._Piso = piso; }
    set Ciudad(ciudad) { this._Ciudad = ciudad; }
    set CodigoPostal(codigopostal) { this._CodigoPostal = codigopostal; }
}

module.exports = Direccion;