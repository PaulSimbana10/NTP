//funciones declarativas

//Retono de valores

function saludar (){
return "hola soy paul";


}
//funciones void
function saludar2(){
    // console.log("hola soy Dennis")
}
// var resultado = saludar()
// console.log(resultado);
// console.log(saludar())
saludar2()

//funciones con parametros:

function saludarConParametros(nombre,apellido){
return `hola soy ${nombre} ${apellido}`
}
//Funciones con parametros por defecto

function SaludoConpPofesion(nombre="persona", profesion="analista de sistemas"){
return `hola ${nombre} mi profesion es ${profesion}`
}
// console.log(SaludoConpPofesion("Paul", "Desarollador de software"));

// console.log(saludarConParametros("Paul","Simbaña"));


/*
Funciones expresivas - funciones anonimas
*/

var saludoConEdad = function(nombre, edad){
    return `Hola soy ${nombre} y tengo ${edad} año(s)`
}
// console.log(saludoConEdad("Paul", 23));


/*
Arrow Functions - funciones flecha
*/

var saludoConApellido = (nombre, apellido) => `hola soy ${nombre} ${apellido}`

var suma = (num1, num2) => num1 + num2

// console.log(saludoConApellido("paulo", "Simbaña"));

// console.log(suma(2,3));

/*
funciones como parametros de otras funciones:
*/

function saludoConFunciones(nombre, cb){
return cb(nombre)

}
var miSaludo = SaludoConpPofesion("paul", function(nombre) {
return `hola soy ${nombre}`
})
// console.log(miSaludo);

// setTimeout(() => {


//     console.log("hola mundo");

// },2000);

setInterval(() => {
    console.log("hola mundo")
}, 2000);