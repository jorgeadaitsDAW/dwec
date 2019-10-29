class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this._edad = 18;
    }

    mostrarNombreCompleto(){
        return `Mi nombre completo es: ${this.nombre} ${this.apellido}`;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad; 
    }
}

class Alumno extends Persona{
    constructor(nombre,apellido,clase){
        super(nombre,apellido);
        this.clase = clase;
    }

    irAClase(){
        return `Estoy llegando a clase de ${this.clase}`;
    }
}

let persona = new Persona("Jorge","Baron");
console.log(persona);
let persona2 = new Persona("Pepito");
console.log(persona2);
let persona3 = new Persona();
console.log(persona3);
let persona4 = new Persona("Juanito","Jaimito","Lolito");
console.log(persona4);

console.log(persona4.mostrarNombreCompleto());
console.log(persona4.edad);

persona4.edad = 21;
console.log(persona4.edad);

let alumno = new Alumno("Juan","Olmedo","DWEC");
console.log(alumno);
console.log(alumno.irAClase());


