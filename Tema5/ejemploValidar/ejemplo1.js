var procesos = [];
let numero1Correcto = false;
let numero2Correcto = false;

$(function(){

    $("#numero1").change(function(){
        validarNumero(this);
    });

    $("#numero2").change(function(){
        validarNumero(this);
    });

    $("#formulario").submit(function(event){
        event.preventDefault();
        numero1Correcto = false;
        numero2Correcto = false;
        validarNumero(document.getElementById("numero1"));
        validarNumero(document.getElementById("numero2"));
    })

});


function validarNumero(input){
    $.ajax({
        url:"/ejemploValidar/validarNumero.php",
        method:'POST',
        data:{numero:$(input).val()},
        type:"JSON",
        beforeSend:function(){
            $("#spinner").show();
            procesos.push(true);
        }
    })
      .done(function(respuesta){
            if(respuesta === '1'){
               $(input).addClass("correcto");
               if($(input).attr("id") === "numero1"){
                    numero1Correcto = true;
               }else if($(input).attr("id") === "numero2"){
                    numero2Correcto = true;
               }
               comprobarFormulario();
            }else{
                $(input).addClass("erroneo");
            }
            procesos.pop();
        })
      .fail(function(){
          alert("HA HABIDO UN ERROR EN LA PETICIÓN");
      })
      .always(function(){
          if(procesos.length === 0){
            $("#spinner").hide();
          }
      })
}

function comprobarFormulario(){
    if(numero1Correcto && numero2Correcto){
        document.getElementById("formulario").submit();
    }
}




