function tratarCadenasInput(cadena){
	let cadenaResultante = null;
	if(typeof(cadena) === 'string'){
		let cadenaTratada = cadena.trim().toUpperCase();
		cadenaTratada = cadenaTratada.replace(/\s{2,}/g,' ');
		if(cadenaTratada !== ''){
			cadenaResultante = cadenaTratada;
		}
	}
	return cadenaResultante;
}

function mostrarPeliculasHTML(peliculasMostrar){
	let divPeliculas  = document.getElementById('peliculas');
	divPeliculas.innerHTML = '';
	if(peliculasMostrar.length === 0){
		divPeliculas.innerHTML = 'NO HAY PELICULAS QUE MOSTRAR';
	}else{
		peliculasMostrar.forEach( pelicula => pelicula.mostrarEnHTML(divPeliculas));
	}
}

function incluirPeliculaHTML(pelicula){
	let divPeliculas  = document.getElementById('peliculas');
	pelicula.mostrarEnHTML(divPeliculas);
}