//asinc-await

function promesa(bandera){

    return new Promise((resolve, reject)=> {
    
        if (bandera) {
        setTimeout(() => {
            resolve("peticion resuelta");
        }, 3000);
        } else {
            setTimeout(() => {
                rejec ("fallo en la operacion")  
            }, 2000);
            
            
        }
    
    })
    
    }

    (async ()=>{
        try {
            var respuesta = await promesa(true)
            var respuesta2 = await promesa(true)
            console.log(respuesta);
            console.log(respuesta2);
        } catch (error) {
             console.log(error);
        }
       

    })()
