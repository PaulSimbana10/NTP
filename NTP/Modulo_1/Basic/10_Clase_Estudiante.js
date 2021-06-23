class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hablar() {
      console.log(this.nombre + ' Tiene sueño.');
    }
  }
  
  class Estudiante extends Persona {
    hablar() {
      console.log(this.nombre + ' habla.');
    }
  }