class PersonaMetodo{
        constructor(nombre, apellidos) {
           this.nombre = nombre;
           this.apellidos = apellidos;
        }

        mostrarNombre(){
              return `ESTE ES MI NOMBRE COMPLETO: ${this.nombre} ${this.apellidos}`; 	  
        }
}
    
let persona = new PersonaMetodo("Jorge","Baron");
console.log("EJEMPLO DE NOMBRE COMPLETO DE PERSONA:");
console.log(persona.mostrarNombre());


console.log("EJEMPLOS DE CAMBIAR VALORES EN UNA CLASE");
let personaNueva = new PersonaMetodo("Jorge","Baron");
personaNueva.nombre = "Juan";
personaNueva.apellidos = "Nueva persona";
console.log(personaNueva.mostrarNombre());
personaNueva["nombre"] = "Juan 2";
personaNueva["apellidos"] = "Nueva persona 2";
console.log(personaNueva.mostrarNombre());


class PersonaGetSet{
        constructor(nombre, apellidos) {
           this._nombre = nombre;
           this._apellidos = apellidos;
        }

    
        get nombre(){
            return `GET-${this._nombre}`;  
        }

        set nombre(nombre){
            this._nombre = `SET-${nombre}`;
        }
}

let personaGet = new PersonaGetSet("Jorge","Baron");
console.log(`NOMBRE: ${personaGet.nombre}`);
console.log(`APELLIDOS: ${personaGet.apellidos}`);

personaGet.nombre = "JUANITO";
personaGet.apellidos = "RAMIREZ";

console.log(`NOMBRE: ${personaGet.nombre}`);
console.log(`APELLIDOS: ${personaGet.apellidos}`);


for(let propiedad in personaGet){
    console.log(`PEOPIEDAD:${propiedad}`);
}

class PersonaMetodoStatic{
        constructor(nombre, apellidos) {
           this._nombre = nombre;
           this._apellidos = apellidos;
        }

    
        get nombre(){
            return `GET-${this._nombre}`;  
        }

        set nombre(nombre){
            this._nombre = `SET-${nombre}`;
        }

        static esMayorDeEdad(edad){
            return edad > 18;
        }    
}

console.log(`ES MAYOR DE EDAD: ${PersonaMetodoStatic.esMayorDeEdad(15)}`);
console.log(`ES MAYOR DE EDAD: ${PersonaMetodoStatic.esMayorDeEdad(20)}`);

