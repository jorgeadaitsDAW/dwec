$(function(){
    $("#botonOcultar").click(ocultarDiv);
    $(".botonMostrar").click(mostrarDiv);

    $("#botonToggle").click(ocultarDiv2);
    $("#botonEfectoEncadenado").click(encadenarEfectos);
});

function mostrarDiv(){
    $("#contenido").slideDown(3000,mostrarHola);
}

function ocultarDiv(){
    $("#contenido").slideUp(3000,mostrarHola);
}

function mostrarHola(){
    //alert("Hola");
}

function ocultarDiv2(){
    $("#contenido").hide(3000,cambiarTextoBoton);
}

function mostrarDiv2(){
    $("#contenido").show(3000,cambiarTextoBoton);
}

function cambiarTextoBoton(){
    $("#botonToggle").off();//Desactivamos todos los eventos
    if($("#botonToggle").text() === "OCULTAR"){
        $("#botonToggle").text("MOSTRAR");
        $("#botonToggle").click(mostrarDiv2);
    }else{
        $("#botonToggle").text("OCULTAR");
        $("#botonToggle").click(ocultarDiv2);
    }
}


function encadenarEfectos(){
    $("#contenido").css("color","red").slideUp(3000).slideDown(3000,function(){
        $("#contenido").css("color","blue");
        alert("hola");
    });
}