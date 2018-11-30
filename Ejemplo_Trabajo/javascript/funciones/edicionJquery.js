$(function(){
	asociarEventos();
});

function asociarEventos() {  
	$("#nombrePelicula").on("keydown change", function (event) {
		comprobarCampo(event,comprobarNombrePelicula);
	});

	$("#tipoPelicula").change(function (event) { 
		comprobarCampo(event,comprobarTipoPelicula);
	});

	$("#nombreDirector").on("keydown change", function (event) {
		comprobarCampo(event,comprobarNombreDirector);
	});

	$("#apellidosDirector").on("keydown change", function (event) {
		comprobarCampo(event,comprobarApellidosDirector);
	});
	
	$("#formulario").on("submit",function(event){
		validarFormulario(event),obtenerCamposFormularioPelicula;
	});
}

function obtenerCamposFormularioPelicula(){
	let campos = [
		{
			nombre: "nombrePelicula",
			funcionValidacion:comprobarNombrePelicula, 
		},
		{
			nombre: "nombreDirector",
			funcionValidacion:comprobarTipoPelicula, 
		},
		{
			nombre: "apellidosDirector",
			funcionValidacion:comprobarNombreDirector, 
		},
		{
			nombre: "privacidad",
			funcionValidacion:comprobarPrivacidad, 
		},

	];
	return campos;
}

function comprobarNombrePelicula(){
	return ["NO PUEDE ESTAR VACIO"];
}

function comprobarTipoPelicula(){
	return ["NO PUEDE ESTAR VACIO"];
}

function comprobarNombreDirector(){
	return ["NO PUEDE ESTAR VACIO"];
}

function comprobarApellidosDirector(){
	return ["NO PUEDE ESTAR VACIO"];
}

function comprobarPrivacidad(){
	return ["NO PUEDE ESTAR VACIO"];
}