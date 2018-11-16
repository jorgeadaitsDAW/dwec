class Pelicula{
	constructor(nombre,director,categoria,img){
		this.nombre = nombre;
		this.director = director;
		this.categoria = categoria;
		this.img = img;
	}
	
	get nombre(){
		return this._nombre;
	}

	set nombre(nombre){
		this._nombre = nombre;
	}

	get director(){
		return this._director;
	}

	set director(director){
		this._director = director;
	}
    
	get categoria(){
		return this._categoria;
	}

	set categoria(categoria){
		this._categoria = categoria;
	}

	mostrarEnHTML(nodoHTML){
		let bloque = document.createElement('div');
		bloque.className = 'pelicula';

		let imagen = document.createElement('img');
		imagen.src = `imagenes/${this.img}`;
		let titulo = document.createElement('h1');
		titulo.innerHTML = this.nombre; 
		let categoria = document.createElement('h2');
		categoria.innerHTML = this.categoria;
		let director = document.createElement('p');
		director.innerHTML = this.director.nombre;

		bloque.append(imagen);
		bloque.append(titulo);
		bloque.append(categoria);
		bloque.append(director);
		nodoHTML.appendChild(bloque);
	}

	contieneNombre(nombre){
		let contiene = false;
		let nombreTratado = tratarCadenasInput(nombre);
		if(nombreTratado !== null){
			contiene = this.nombre.toUpperCase().includes(nombreTratado);
		}
		return contiene;
	}

	contieneDirector(director){
		let contiene = false;
		let directorTratado = tratarCadenasInput(director);
		if(directorTratado != null){
			contiene = this.director.nombre.toUpperCase().includes(directorTratado);
		}
		return contiene;
	}
}

class Director{

	constructor(nombre){
		this.nombre = nombre;
		this.peliculas = [];
	}

	get nombre(){
		return this._nombre;
	}

	set nombre(nombre){
		this._nombre = nombre;
	}
    
	get peliculas(){
		return this._peliculas;
	}

	set peliculas(peliculas){
		this._peliculas = peliculas;
	}

	incluirPelicula(pelicula){
		this._peliculas.push(pelicula);
	}

}