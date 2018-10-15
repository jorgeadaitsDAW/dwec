class PersonaVacia{

}

let persona1 = new PersonaVacia();
console.log("EJEMPLO DE CLASE SIN CONSTRUCTOR");
console.log(persona1);

class Persona{
    constructor(nombre,apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    //toString(){
    //    return `SOY LA PERSONA CON DATOS: ${this.nombre} ${this.apellidos}`
   //}
}

let persona2 = new Persona("Jorge","Baron");
console.log("EJEMPLO DE PERSONA 2:");
console.log(persona2);
console.log(`PERSONA: ${persona2}`);
console.log(`NOMBRE: ${persona2.nombre}`);
console.log(`APELLIDOS: ${persona2.apellidos}`);

let persona3 = new Persona();
console.log("EJEMPLO DE PERSONA 3:");
console.log(persona3);
console.log(`NOMBRE: ${persona3.nombre}`);
console.log(`APELLIDOS: ${persona3.apellidos}`);

let persona4 = new Persona("John","Nieve");
console.log("EJEMPLO DE PERSONA 4:");
console.log(persona4);
console.log(`NOMBRE: ${persona4['nombre']}`);
console.log(`APELLIDOS: ${persona4['apellidos']}`);

let clasePersona = class Persona2{
    constructor(nombre,apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}
let persona5 = new clasePersona("Capitan","America");
console.log("EJEMPLO DE PERSONA 5:");
console.log(persona5);
console.log(`NOMBRE: ${persona5.nombre}`);
console.log(`APELLIDOS: ${persona5.apellidos}`);

let clasePersonaAnonima = class {
    constructor(nombre,apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}
let persona6 = new clasePersonaAnonima("Frodo","Bolson");
console.log("EJEMPLO DE PERSONA 5:");
console.log(persona6);
console.log(`NOMBRE: ${persona6.nombre}`);
console.log(`APELLIDOS: ${persona6.apellidos}`);





