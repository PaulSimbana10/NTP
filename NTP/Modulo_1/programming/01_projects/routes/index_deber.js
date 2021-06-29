const { Router } = require("express");
const data = require("../MOCK_DATA.json");

const router = Router();

router
  .get("/users", (reg, res) => {
    res.json({
      msg: "Primer path/users",
      body: [
        data.map((person) => {
          person.first_name = person.first_name.toUpperCase();
          person.last_name = person.last_name.toUpperCase();
          return person;
        }),
      ],
    });
  })
  .get("/users-query", (req, res) => {
    const {
      query: { id },
    } = req;

    var dato = data.filter((persona) => persona.id == id);
    if (id != null) {
      res.json({
        msg: "Seleccion mediante ID del usuario",
        body: [dato],
      });
    } else {
      res.json({
        msg: "usuarios no encontrado.",
        body: [datos],
      });
    }

    res.json(dato);
  })
  .get("/user/params/:apellido", (req, res) => {
    const {
      params: { apellido },
    } = req;
    var op = data
      .filter((opcion) => opcion.last_name === apellido)
      .map((corr) => {
        return corr.email;
      });

      var verificar = false;
    data.forEach((element) => {
        
      if (apellido === element.last_name) {
        verificar = true;
      }
    });
    if ((verificar == true)) {
      res.json({
        msg: "Apellido encontrado",
        body: [{ correo: op }],
      });
    } else {
      res.json({
        msg: "No se encontro el parametro apellido",
        body: [],
      });
    }
  });

module.exports.RouterIndex = router;
