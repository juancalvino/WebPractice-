'use srtict'

class Objeto {

    constructor(saludar){
        this.nombre = saludar;
    }

    mostrar() {
        console.log(this.nombre);    
    }
}
const saludo = (x) => 'hola' + x;

let = new Objeto(saludo(' senor'));

let.mostrar();