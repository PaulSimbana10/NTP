/*
promesas 
*/

function promesa(bandera){

return new Promise((resolve, reject)=> {

    if (bandera) {
    setTimeout(() => {
        resolve("peticion resuelta");
    }, 3000);
    } else {
        rejec ("fallo en la operacion")
        
    }

})

}

// promesa(false)
//     .then((resultado)=> {
// console.log("Respuesta positiva",resultado)

//     })
//     .catch((error)=>{

//         console.log("Error",error);
//     });

var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("peticion resuelta");
        }, 3000);
        } else {
            rejec ("fallo en la operacion")
            
        }
    
    })
    

 segundaPromesa(true)
    .then((respuesta)=> {
console.log("Respuesta positiva",respuesta)

})
 .catch((error)=>{

   console.log("Error",error);
 });


 segundaPromesa(true) //peticion de clioentes
 .then((respuesta)=> {
console.log("Respuesta positiva",respuesta)
return segundaPromesa(true) //compras que hizo el cliente

})
.then((respuesta)=>{  //respuesta de la segunda promesa
    console.log(respuesta);
})
.catch((error)=>{

console.log("Error",error);
});
