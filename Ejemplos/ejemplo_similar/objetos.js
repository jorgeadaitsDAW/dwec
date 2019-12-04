class Animal{
    constructor(id,nombre,especie,raza,vida){
        this.id = id;//Para identificarlo de forma única
        this.nombre = nombre;
        this.especie = especie;
        this.raza = raza;
        this.vida = vida;
        this.propietario = null;
        this.votos = [];
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get especie(){
        return this._especie;
    }

    set especie(especie){
        this._especie = especie; 
    }

    get raza(){
        return this._raza;
    }

    set raza(raza){
        this._raza = raza; 
    }

    get vida(){
        return this._vida;
    }

    set vida(vida){
        this._vida = vida; 
    }

    get persona(){
        return this._persona;
    }

    set persona(persona){
        this._persona = persona; 
    }

    get votos(){
        return this._votos;
    }

    set votos(votos){
        this._votos = votos; 
    }
    Propietario
    addVoto(voto){
        this.votos.push(voto);
    }
}

class Persona{
    constructor(id,nombre,edad){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
        this.votos = [];
    }


    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad; 
    }

    get votos(){
        return this._votos;
    }

    set votos(votos){
        this._votos = votos; 
    }

    addVoto(voto){
        this.votos.push(voto);
    }
}

class Voto{
    constructor(id,persona,animal,puntuacion,observaciones){
        this.id = id;
        this.persona = persona;
        this.animal = animal;
        this.puntuacion = puntuacion;
        this.observaciones = observaciones;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get persona(){
        return this._persona;
    }

    set persona(persona){
        this._persona = persona; 
    }

    get animal(){
        return this._animal;
    }

    set animal(animal){
        this._animal = animal; 
    }

    get puntuacion(){
        return this._puntuacion;
    }

    set puntuacion(puntuacion){
        this._puntuacion = puntuacion; 
    }

    get observaciones(){
        return this._observaciones;
    }

    set observaciones(observaciones){
        this._observaciones = observaciones; 
    }
}

function crearVoto(persona,animal,puntuacion,observaciones){
    let idVoto = listaTodosLosVotos.length +1;
    let voto = new Voto(idVoto,persona,animal,puntuacion,observaciones);
    persona.addVoto(voto);
    animal.addVoto(voto);
    listaTodosLosVotos.push(voto);
}

let listaTodosLosVotos = [];

let Pepito = new Persona(1,"Pepito",18);
let Juanito = new Persona(2,"Juanito",23);

let listaUsuarios = [];
listaUsuarios.push(Pepito);
listaUsuarios.push(Juanito);

let thor = new Animal(1,"Thor","Perro","Caniche",5);
let capitanAmerica = new Animal(2,"Capitan America","Gato","Siames",8);
let viudaNegra = new Animal(3,"Viuda Negra","Perro","Salchicha",15);
let Hulk = new Animal(4,"Hulk","Perro","Pastor Aleman",12);
let OjoHalcon = new Animal(5,"Ojo de Halcón","Perro","Salchicha",9);
let Loky = new Animal(6,"Loky","Perro","Salchicha",4);
let IronMan = new Animal(8,"Iron Man","Conejo","Comun",9);
let WarMachine = new Animal(9,"War Machine","Perro","Pastor Alemán",20);
let Vision = new Animal(10,"Vision","Perro","Pastor Belga",12);
let Mercurio = new Animal(11,"Mercurio","Pajaro","Loro",15);
let StarLord = new Animal(12,"StarLord","Perro","Caniche",9);
let Peter = new Animal(13,"Peter","Perro","Caniche",11);
let Lola = new Animal(14,"Lola","Gato","Siames",15);
let Rita = new Animal(15,"Rita","Pajaro","Loro",3);
let Exodus = new Animal(16,"Exodus","Conejo","Comun",1);
let listaAnimales = [];

listaAnimales.push(thor);
listaAnimales.push(capitanAmerica);
listaAnimales.push(viudaNegra);
listaAnimales.push(Hulk);
listaAnimales.push(OjoHalcon);
listaAnimales.push(Loky);
listaAnimales.push(IronMan);
listaAnimales.push(WarMachine);
listaAnimales.push(Vision);
listaAnimales.push(Mercurio);
listaAnimales.push(StarLord);
listaAnimales.push(Peter);
listaAnimales.push(Lola);
listaAnimales.push(Rita);
listaAnimales.push(Exodus);

crearVoto(Pepito,thor,true,"Muy bonito");
crearVoto(Pepito,capitanAmerica,true,"Muy mono");
crearVoto(Pepito,viudaNegra,false,"Muy Arisca");

crearVoto(Juanito,OjoHalcon,true,"Muy bonito");
crearVoto(Juanito,Loky,true,"Muy mono");
crearVoto(Juanito,IronMan,false,"Muy Arisca");


