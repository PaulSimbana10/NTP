const express = require('express');

//genero una aplicacion express
const app = express();

const{RouterIndex} = require('./routes/index');

app.use("/", RouterIndex);
// app.use("/user",RouterIndex);
// app.use("/user/data",RouterIndex);
// app.use(RouterIndex);

/*
"/"+ "/"="//"=>"/"
"/"+"/saludo"= "//saludo"=> "/saludo"
"/"+"/saludo/:nombre"= "//saludo/:nombre"=> "/saludo/nombre"
*/



app.listen(3000, ()=>{
    console.log("servidor escuchando en http://localhost:3000");
})
