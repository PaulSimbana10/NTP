//como se hacia antes

function Rectangulo(base, altura){
    this.base = base
    this.altura = altura
}

Rectangulo.prototype.calcularArea = function(){
return this.base * this.altura
}

var rectangulo = new Rectangulo(6, 3)

console.log(rectangulo.calcularArea());
console.log(rectangulo.base)

// Declaracion de clases

class Rectangulo2 {
constructor(base, altura){
    this.base = base
    this.altura= altura

}

calcularArea(){
    return this.base * this.altura
}
}

var Rectangulo2 = new Rectangulo2(6,3)

console.log(Rectangulo2.calcularArea());

//clase persona
//implementar getters, setters y realizar la implementacion.



/*
DEBER:

*/