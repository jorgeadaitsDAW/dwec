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
    var datosPOST = {};
    listaInputs.forEach(
        input => datosPOST[input.attr('name')] = input.val()
    );
    
    $.ajax({
        url:"./validarNumero.php",
        method:'POST',
        data:datosPOST,
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
      .fail(function(){
          alert("HA HABIDO UN ERROR EN LA PETICIÓN");
      })
      .always(function(){
          procesos.pop();
          if(procesos.length === 0){
            $("#spinner").hide();
          }
          if(ejecutarFormulario){
            $("#boton").prop("disabled",false);
            $("#formulario input").prop("readOnly",false);
          }
      })
}




