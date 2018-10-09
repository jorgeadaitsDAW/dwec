class PersonaGenerica{
        constructor(nombre, apellidos) {
           this._nombre = nombre;
           this.apellidos = apellidos;
        }

    
        get nombre(){
            return `PG-${this._nombre}`;  
        }

        set nombre(nombre){
            this._nombre = `PG-${nombre}`;
        }

        static esMayorDeEdad(edad){
            return edad > 18;
        }    
}

class Alumno extends PersonaGenerica{
    constructor(nombre,apellidos,clase){
        super(nombre,apellidos);
        this.clase = clase;
    }

    get clase(){
        return this._clase;  
    }

    set clase(clase){
        this._clase = clase;
    }
    

    irAClase(){
        console.log(`${this.nombre} : VOY A CLASE DE ${this.clase}`);		
    }

}

console.log("PRUEBAS HERENCIA NORMAL");
let alumno = new Alumno("Jorge","Baron","DWEC");
alumno.irAClase();
console.log(alumno.apellidos);


class Alumno2 extends PersonaGenerica{
    constructor(nombre,apellidos,clase){
        super(nombre,apellidos);
        this.clase = clase;
    }

    get clase(){
        return this._clase;  
    }

    set clase(clase){
        this._clase = clase;
    }

    get nombre(){
        return this._nombre;  
    }

    set nombre(nombre){
        this._nombre = "A"+nombre;
    }

    irAClase(){
        console.log(`${this.nombre} : VOY A CLASE DE ${this.clase}`);		
    }
    
}

console.log("PRUEBAS HERENCIA GETTERS Y SETTERS EN AMBAS CLASES");
let alumno2 = new Alumno2("Jorge","Baron","DWEC");
alumno2.irAClase();
console.log(alumno2.nombre);
console.log(alumno2.apellidos);

alumno2.nombre = "Juan";
alumno2.irAClase();

console.log("PRUEBAS HERENCIA SUPER");
class AlumnoPerdido extends  Alumno{
	irAClase(){
		 super.irAClase();
       	 console.log(`${this.nombre} : ESTOY PERDIDO`);		
	}
}

let alumnoPerdido = new AlumnoPerdido("Jaimito","Robot","Descartes");
alumnoPerdido.irAClase();