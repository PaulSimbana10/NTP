//traemos el paquete
const {Router} = require('express');
const data = require

//iniciamos router
const router = Router()

//correccion de los endpoint
router
    .get("/", (req, res) => {
        res.send("Hola mundo con ExpressJs");
    })
    .get("/users", (req, res) => {
        res.json
        ("Lista de usuarios");
    })
    .get("/saludo",(req, res) => {

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

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }

