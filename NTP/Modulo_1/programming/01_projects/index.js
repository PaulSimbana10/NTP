const express = require('express');

//genero una aplicacion express
const app = express()

app.get('/', (req, res)=>{
    res.send("Hola mundo con ExpresJs")


});

app.get("/saludo",(req,res)=>{
    //req.query
    // console.log(req.query);
    //obtenemos la query del objeto
    const { 
        query: {nombre, apellido} 
    }= req;

    //const nombre = req.query.nombre
    //const apellido = rec.query.nombre

    res.json({
        saludo: `hola soy ${nombre} ${apellido}`,
    });
})

app.get('/saludo/:nombre', (req, res)=>{
    const { params: {nombre} } = req
    //console.log(req.params)
    // const nombre = req.params.nombre

    res.json({
       nombre: nombre
   });
});


app.listen(3000, ()=>{
    console.log("servidor escuchando en http://localhost:3000");
})
