let procesos = [];

$(function(){

    $("#numero1").change(function(){
        validarNumero($("#numero1"));
    });

    $("#numero2").change(function(){
        validarNumero($("#numero2"));
    });

    $("#formulario").submit(function(event){
        event.preventDefault();
        validarFormulario();
    });


});

function validarNumero(input){
    let datosPost = {};
    datosPost[input.attr("name")] = input.val();
    realizarValidacion(datosPost,null);
}

function validarFormulario(){
    let datosPost = $("#formulario").serialize();
    realizarValidacion(datosPost,function(){
        //document.getElementById("formulario").submit();
        sumarNumeros(datosPost);
    });
}

function realizarValidacion(datosPost,funcionCallback){
    $.ajax({
        url:"./validarNumero.php",
        method:'POST',
        data:datosPost,
        type:"JSON",
        beforeSend:function(){
            $("#spinner").show();
            procesos.push(true);
        }
    })

    .done(function(errores){
        let todoCorrecto = true;
      
        for(inputName in errores){
            let erroresInput = errores[inputName];
            let divErrores = $(`#${inputName}`).next("div");
            divErrores.html("");
            if(!$.isEmptyObject(erroresInput)){
                for(tipoError in erroresInput){
                    divErrores.append(`<div>${erroresInput[tipoError]}</div>`);
                }
                todoCorrecto = false;
            }
        }

        if(todoCorrecto && funcionCallback !== null){
            funcionCallback();
        }
    })
    .fail(function(){
        alert("HA HABIDO UN ERROR EN LA PETICIÓN");
    })
    .always(function(){
        procesos.pop();
        if(procesos.length === 0){
          $("#spinner").hide();
        }
    });
}

function sumarNumeros(datosPost){
    $.ajax({
        url:"./sumarNumero.php",
        method:'POST',
        data:datosPost,
        type:"JSON",
        beforeSend:function(){
            $("#spinner").show();
            procesos.push(true);
        }
    })
    .done(function(resultado){
        $("#resultado").html(resultado);
    })
    .fail(function(){
        alert("HA HABIDO UN ERROR EN LA PETICIÓN");
    })
    .always(function(){
        procesos.pop();
        if(procesos.length === 0){
          $("#spinner").hide();
        }
    });
}
function sumarNumerosAxios(datosPost){
    $("#spinner").show();
    procesos.push(true);
    axios.post(
        "/ejemploValidar/sumarNumero.php",
        datosPost
    )
    .then(
        function(resultado){
            $("#resultado").html(resultado.data);
        }
    )
    .catch(function(){
        alert("HA HABIDO UN ERROR EN LA PETICIÓN");
    })
    //always 
    .then(function(){
        procesos.pop();
        if(procesos.length === 0){
          $("#spinner").hide();
        }
    })
}
