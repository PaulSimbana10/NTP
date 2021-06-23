const express = require('express');

//genero una aplicacion express
const app = express()

app.get('/', (req, res)=>{
    res.send("Hola mundo con ExpresJs")


})

app.listen(3000, ()=>{
    console.log("servidor escuchando en http://localhost:3000");
})