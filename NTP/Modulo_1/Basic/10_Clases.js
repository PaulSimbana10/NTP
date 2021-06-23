//como se hacia antes

// function Rectangulo(base, altura){
//     this.base = base
//     this.altura = altura
// }

// Rectangulo.prototype.calcularArea = function(){
// return this.base * this.altura
// }

// var rectangulo = new Rectangulo(6, 3)

// console.log(rectangulo.calcularArea());
// console.log(rectangulo.base)

// // Declaracion de clases

// class Rectangulo2 {
// constructor(base, altura){
//     this.base = base
//     this.altura= altura

// }

// calcularArea(){
//     return this.base * this.altura
// }
// }

// var Rectangulo2 = new Rectangulo2(6,3)

// console.log(Rectangulo2.calcularArea());

//clase persona
//implementar getters, setters y realizar la implementacion.



/*
DEBER:


class persona{

    nombre = "Paul"
    apellido= "Simbana"
    edad = 23
    deporte = "soccer"
constructor(nombre, apellido , edad, deporte){
this.nombre = nombre
this.apellido = apellido
this.edad = edad
this.deporte = deporte
}

get DatosPersona(){
    return {
        nombre: this.nombre,
        apellido : this.edad,
        edad : this.edad,
        deporte : this.deporte

    }

}

set cambioDatos(nuevosDatos){
    this.nombre= nuevosDatos.nombre
    this.apellido = nuevosDatos.apellido
    this.edad = nuevosDatos.edad
    this.deporte = nuevosDatos.deporte
}
}
var personaa = new persona("Paul","Simbana", "23","soccer")
console.log(personaa.DatosPersona);
personaa.cambioDatos = {nombre:"Juan",apellido:"Yumitaxi",edad:20,deporte:"tenis"}
console.log(personaa.DatosPersona);

Metodos Estaticos:

class Punto {
  constructor ( x , y ){
    this.x = x;
    this.y = y;
  }

  static distancia ( a , b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt ( dx * dx + dy * dy );
  }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log (Punto.distancia(p1, p2)); // 7.0710678118654755


*/