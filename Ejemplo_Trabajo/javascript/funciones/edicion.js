function incluirPelicula(){
	let inputNombrePelicula = document.getElementById('nombrePelicula');
	let inputDirectorPelicula = document.getElementById('director');
	let inputCategoria = document.getElementById('categoria');

	let esNombreCorrecto = validarNombrePelicula(inputNombrePelicula);
	let esDirectorCorrecto = validarDirector(inputDirectorPelicula);
	let esCategoriaCorrecta = validarCategoria(inputCategoria); 

	if(esNombreCorrecto && esDirectorCorrecto && esCategoriaCorrecta){
		let director = listaDirectores.find( director => director.nombre === inputDirectorPelicula.value);
		if(director === undefined){
			director = new Director(inputDirectorPelicula.value);
			listaDirectores.push(director);
		}
		let peliculaNueva = new Pelicula(inputNombrePelicula.value,director,inputCategoria.value);
		peliculas.push(peliculaNueva);
		director.incluirPelicula(peliculaNueva);
		incluirPeliculaHTML(peliculaNueva);
	}
}

function validarNombrePelicula(inputNombre){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputNombre.value);

	if(nombreTratado === null){
		marcarInputComoErroneo(inputNombre,'El nombre es erroneo');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombre);
	}
	return esCorrecto;
}

function marcarInputComoCorrecto(input){
	input.className  = 'correcto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		padre.removeChild(spanError[0]);
	}
}


function marcarInputComoErroneo(input,textoError){
	input.className  = 'incorrecto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length === 0){
		let spanNuevo = document.createElement('span');
		spanNuevo.className = 'error';
		spanNuevo.innerHTML = textoError;
		padre.appendChild(spanNuevo);
	}
}


function validarDirector(inputDirectorPelicula){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputDirectorPelicula.value);

	if(nombreTratado === null){
		marcarInputComoErroneo(inputDirectorPelicula,'El director es erroneo');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputDirectorPelicula);
	}
	return esCorrecto;
}


function validarCategoria(inputCategoria){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputCategoria.value);

	if(nombreTratado === null){
		marcarInputComoErroneo(inputCategoria,'La categoria es erronea');
	}else{
		esCorrecto = true;  
		marcarInputComoCorrecto(inputCategoria);
	}
	return esCorrecto;
}