//traemos el paquete
const {Router} = require('express');
// const data = require("../data.js");
const{User} = require("../lib/Schema/User");
const { DataValidator } =require("../middlewares/DataValidator")

//iniciamos router
const router = Router()

//correccion de los endpoint
router
    .get("/",  (req, res) => {
        res.send("hola mundo con expresJS");
    })
    .get("/users", (req, res) => {
        res.json
        ("Lista de usuarios");
    })
    .get("/saludo", DataValidator("query", User), (req, res) => {

        //console.log(req.query);
        const { query: {nombre, apellido} } = req;
    
        //const nombre = req.query.nombre;
        //const apellido = req.query.apellido;
    
        res.json({
            saludo: `Hola soy ${nombre} ${apellido}`
        });
    
    })
    .get('/saludo/:nombre', (req, res) => {

        const { params: {nombre} } = req;
        res.json({
            nombre: nombre
        })
    });




//crear un nuevo archivo de rutas
module.exports.RouterIndex = router


