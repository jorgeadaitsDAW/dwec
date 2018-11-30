let timeout = null;

function comprobarCampo(event,funcionComprobar){
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        validarCampo($(event.target),funcionComprobar);
    }, 500);
};

function validarCampo(inputJquery,funcionValidacion){
	mostrarLoading(inputJquery);
    let correcto = false;
	let errores = funcionValidacion();
	let divErrores = obtenerDivErrores(inputJquery);
	divErrores.empty();
	if(errores.length > 0){
        marcarInputErroneo(inputJquery,errores);
    }else{
        correcto = true;
        marcarInputCorrecto(inputJquery);
    }
    return correcto;
}

function obtenerDivErrores(inputJquery){
	let padre = inputJquery.parent('.campo');
	let divErrores = padre.find('.errores');
	return divErrores;
}

function marcarInputErroneo(inputJquery,errores){
    inputJquery.removeClass("valido");
	inputJquery.addClass("invalido");
	let divErrores = obtenerDivErrores(inputJquery);

    errores.forEach( error => {
		let spanError = $('<span></span>');
		spanError.text(error);
        divErrores.append(spanError);
    });
}

function marcarInputCorrecto(inputJquery){
	inputJquery.removeClass("invalido");
	inputJquery.addClass("valido");
}

function validarFormulario(event,funcionObtenerCampos){
	event.preventDefault();
	let campos = funcionObtenerCampos();
	let errores = campos.map( campo => validarCampo($(`#${campo.nombre}`),campo.funcionValidacion));
	if(errores.some(x => !x)){
        alert("ERROR EN EL FORMULARIO");
    }else{
        $(event.target).submit();
    }
}

function mostrarLoading(inputJquery) {
	let divLoading = inputJquery.next(".loading");
	if(divLoading.length === 0){
		divLoading = $("body>.loading").clone();
		inputJquery.after(divLoading);
	}
	divLoading.show(500);
	setTimeout(function(){
		divLoading.hide(500);
	},500);
}