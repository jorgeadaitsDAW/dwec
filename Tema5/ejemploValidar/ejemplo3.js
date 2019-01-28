var procesos = [];

$(function(){

    $("#numero1").change(function(){
        validarNumero([$(this)],false);
    });

    $("#numero2").change(function(){
        validarNumero([$(this)],false);
    });

    $("#formulario").submit(function(event){
        event.preventDefault();
        $("#boton").prop("disabled",true);
        $("#formulario input").prop("readOnly",true);
        validarNumero([$("#numero1"),$("#numero2")],true);
    })

});


function validarNumero(listaInputs,ejecutarFormulario){
    var params = new URLSearchParams();
    listaInputs.forEach(
        input => params.append(input.attr('name'), input.val())
    );
    $("#spinner").show();
    procesos.push(true);     
    axios.post("/ejemploValidar/validarNumero.php",
        params
    ).then(function(respuesta){
            let todoCorrecto = true;
            let errores = respuesta.data;
            for(inputName in errores){
                let erroresInput = errores[inputName];
                $(`#${inputName}`).removeClass("inputCorrecto");
                $(`#${inputName}`).removeClass("inputErroneo");
                let divErrores = $(`#${inputName}`).next("div");
                divErrores.html("");
                if(!$.isEmptyObject(erroresInput)){
                    $(`#${inputName}`).addClass("inputErroneo");
                    for(tipoError in erroresInput){
                        divErrores.append(`<div>${erroresInput[tipoError]}</div>`);
                    }
                    todoCorrecto = false;
                }else{
                   $(`#${inputName}`).addClass("inputCorrecto"); 
                }
            }

            if(todoCorrecto && ejecutarFormulario){
                   formulario.submit();
            }

           
        })
        .catch(function(){
            
            alert("HA HABIDO UN ERROR EN LA PETICIÓN");
        })
        .then(function () {
            procesos.pop();
            if(procesos.length === 0){
                $("#spinner").hide();
              }
              if(ejecutarFormulario){
                $("#boton").prop("disabled",false);
                $("#formulario input").prop("readOnly",false);
              }
        });
    

}




