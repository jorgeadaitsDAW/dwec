class Libro{
    constructor(titulo,autor,editorial,isbn){
        this._titulo = titulo;
        this._autor = autor;
        this._editorial = editorial;
        this._isbn = isbn;  
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }

    get autor(){
        return this._autor;
    }

    set autor(autor){
        this._autor = autor;
    }

    get editorial(){
        return this._editorial;
    }

    set editorial(editorial){
        this._editorial = editorial;
    }

    get isbn(){
        return this._isbn;
    }

    set isbn(isbn){
        this._isbn = isbn;
    }


}

class Autor{

    constructor(nombre){
        this.nombre = nombre;
        this.libros = [];
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get libros(){
        return this._libros;
    }

    set libros(libros){
        this._libros = libros;
    }

    addLibro(libro){
        this._libros.push(libro);
    }

    mostrarLibros(){
        for(let libro of this.libros){
            console.log(libro);
        }
    }


}


let autor1 = new Autor("Stephen king");
let librosAutor1 = [];

let autor2 = new Autor("Pepito");
console.log(autor1);

let libro1 = new Libro("Resplandor",autor1,"Santillana","1234567890123");
console.log(libro1);

//librosAutor1.push(libro1);
//autor1.libros = librosAutor1; 
autor1.addLibro(libro1);

//autor1.nombre = "Pepito";
//console.log(libro1);

//libro1["autor"] = autor2;
console.log(autor1);


let libro2 = new Libro("Doctor Sueño",autor1,"Santillana","1234567890123");
autor1.addLibro(libro2);
console.log(autor1);

autor1.mostrarLibros();


