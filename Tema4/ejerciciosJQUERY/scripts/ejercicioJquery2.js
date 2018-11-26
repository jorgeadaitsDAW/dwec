function validarFormulario(){
    $("#submit").attr("disabled",true);
    let resultado = false;

    resultado = esNombreCorrecto()
                && esApellidoCorrecto();


    $("#submit").removeAttr("disabled");
    return resultado;
}

function esNombreCorrecto(){
    let resultado = false;
    let inputNombre = $("#nombre");
    inputNombre.removeClass("error");
    inputNombre.removeClass("correcto");
    let valorNombre = inputNombre.val().trim();
    if(valorNombre !== ""
        && valorNombre.match(/^[aA-zZ\s]{5,}$/)
    ){
        resultado = true;
        inputNombre.addClass("correcto");
        if(inputNombre.next().length > 0 ){
            inputNombre.next().remove();
        }
    }else{
        inputNombre.addClass("error");
        if(inputNombre.next().length === 0 ){
            inputNombre.after("<span>ERROR EN EL NOMBRE</span>");
        }
    }


    return resultado;
}



function esApellidoCorrecto(){
    let resultado = false;
    let inputApellido = $("#apellido");
    inputApellido.removeClass("error");
    inputApellido.removeClass("correcto");
    let valorApellido = inputApellido.val().trim();
    let valorNombre = $("#nombre").val();;

    if(valorApellido !== ""
        && valorApellido.match(/^[aA-zZ\s]{7,}$/)
        && valorApellido !== valorNombre
    ){
        resultado = true;
        inputApellido.addClass("correcto");
        if(inputApellido.next().length > 0 ){
            inputApellido.next().remove();
        }
    }else{
        inputApellido.addClass("error");
        if(inputApellido.next().length === 0 ){
            inputApellido.after("<span>ERROR EN EL APELLIDO</span>");
        }
    }


    return resultado;
}

/*Falta realizar la validación de los demás campos por parte de los alumnos para que practiquen*/
