$(function(){
    $("#duracion").keyup(validarDuracion);
    $("#formulario").submit(function(event){
        event.preventDefault();
        validarFormulario();
    })
})

function validarDuracion(){
    let esCorrecto = true;
    let valorDuracion = $("#duracion").val().trim();
    $("#duracion").removeClass();
    $("#erroresDuracion").empty();

    if(!/^[0-9]+$/.test(valorDuracion)){
        esCorrecto = false;
        let spanError = $("<span>SÓLO SE PERMITEN NÚMEROS</span>");
        $("#erroresDuracion").append(spanError);
    }

    if(valorDuracion <3){
        esCorrecto = false;
        let spanError = $("<span>EL NÚMERO TIENE QUE SER MAYOR QUE 2</span>");
        $("#erroresDuracion").append(spanError);
    }

    if(esCorrecto){
        $("#duracion").addClass("valido");
    }else{
        $("#duracion").addClass("invalido");
    }

    return esCorrecto;
}

function validarPersonal(){
    let esCorrecto = false;
    return esCorrecto;
}


function validarFormulario(){
    let esCorrectoDuracion = validarDuracion();
    if(esCorrectoDuracion){
        alert("TODO ESTA CORRECTO");
        //$("#formulario").submit(); NO VALE
        let form = document.getElementById("formulario");
        form.submit();
    }else{
        alert("HAY ERRORES EN EL FORMULARIO");
    }
}