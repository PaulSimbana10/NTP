
//CONCAT
var numeros = [1,2,3,4,5];
var nuevoNumeros = numeros.concat([6,7,8,9,0])
// console.log(nuevoNumeros);

/*
JOIN
*/
var nombre = ["P", "a", "u","l"]
// console.log(nombre.join(";"));

/*
SLICE
*/

// console.log(nombre.slice(2));

/*
indexOF nos pasa la posicion
*/

// console.log(nombre.indexOf("u"));

/*
lastindexOF la posicion del ultimo pero repetido
*/

// console.log(nombre.lastIndexOf("l"))

/*
Reverse
*/

// console.log(nombre.reverse());

/*
Sort
*/

var numerosDesordenados = [3,4,6,8,9,1,2,4]

// console.log(numerosDesordenados.sort());


/*
SGIFT
*/

// console.log(numerosDesordenados.shift());

/*
pop
*/

// console.log(numerosDesordenados.pop());


/*
push
*/
numerosDesordenados.push(1012)
// console.log(numerosDesordenados);

var pares = [2,4,6,8,10]

// console.log(pares.map((elemento)=>elemento + 1));


//  consultar funciones de arreglos

// 1. forEach

// const arr = ["a", "b", "c", "d"];

// // Con funciones por expresión
// const f = function () {
//   console.log("Un elemento.");
// };
// arr.forEach(f);

// // Con funciones anónimas
// arr.forEach(function () {
//   console.log("Un elemento.");
// });

// Con funciones flecha
// arr.forEach(() => console.log("Un elemento."));

// 2. Every(Todos)
// const arr = ["a", "b", "c", "d"];
// arr.every((e) => e.length == 1); // true


// 3. Some(Todos)Sirve para verificar que los parametros ingresados o al menos uno sea definida por el callBack
// const arr = ["a", "bb", "c", "d"];
// arr.some((e) => e.length == 2); // true


//4. Filter
// const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
// const nuevoArr = arr.filter((e) => e[0] == "P");

// nuevoArr; // Devuelve ['Pablo', 'Pedro', 'Pancracio']

// 5.find

// const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

// arr.find((e) => e.length == 5); // 'Pablo'
// arr.findIndex((e) => e.length == 5); // 1

//6. Reduce

// const arr = [95, 5, 25, 10, 25];
// arr.reduce((p, e) => {
//   console.log(`P=${p} e=${e}`);
//   return p + e;
// });

//7.replit-it

// var a= ['azul', 'rojo', 'verde', 'amarillo'];
// for (var i= 0; i < a.length; i++) console.log(a[i]);
// for (i in a) console.log(a[i]);

//8. ToString()
// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());
