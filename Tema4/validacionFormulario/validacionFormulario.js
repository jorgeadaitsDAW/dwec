//Este evento se lanza cuando se carga todo el DOM en la página
document.addEventListener("DOMContentLoaded", function(event) {
    let formulario = document.getElementById("formulario");
    let inputNombre = document.getElementById("nombre");
    let inputDuracion = document.getElementById("duracion");
    let inputJefe = document.getElementById("jefe");
    let inputCategoria = document.getElementById("categoria");
    let inputTerminos = document.getElementById("terminos");
    
    inputNombre.addEventListener("keyup", function(event){
            comprobarCampo(event,comprobarNombre);
    });

    inputDuracion.addEventListener("keyup", function(event){
        comprobarCampo(event,comprobarDuracion);
    })

    inputJefe.addEventListener("keyup", function(event){
        comprobarCampo(event,comprobarJefe);
    })

    inputCategoria.addEventListener("change", function(event){
        comprobarCategoria(event.target);
    })

    inputTerminos.addEventListener("change", function(event){
        comprobarTerminos(event.target);
    })

    
    formulario.addEventListener("submit",function(event){
        comprobarFormulario(event);
    });
});

function marcarInputCorrecto(input){
    input.classList.remove("invalido");
    input.classList.add("valido");
}

function marcarInputErroneo(input){
    input.classList.remove("valido");
    input.classList.add("invalido");
}

let timeout = null;

function comprobarCampo(event,funcionComprobar){
    clearTimeout(timeout);
    timeout = setTimeout(function () {
       funcionComprobar(event.target);
    }, 500);
};

function comprobarNombre(inputNombre){
    let correcto = false;
    let expresion = /^[a-zA-Z]+$/g;
    if(expresion.test(inputNombre.value)){
        marcarInputCorrecto(inputNombre);
        correcto = true;
    }else{
        marcarInputErroneo(inputNombre);
    }
    return correcto;
}

function comprobarDuracion(inputDuracion){
    let correcto = false;
    let expresion = /^[0-9]+$/g;

    if(expresion.test(inputDuracion.value) 
    ){
        let valor = parseInt(inputDuracion.value);
        if(valor >= 6 && valor <=24){
            marcarInputCorrecto(inputDuracion);
            correcto = true;
        }else{
            marcarInputErroneo(inputDuracion);
        }
    }else{
        marcarInputErroneo(inputDuracion);
    }
    return correcto;
}

function comprobarJefe(inputJefe){
    let correcto = false;
    let expresion = /^[A-Z]{1}[a-z]+\s{1}[a-z]+$/g;

    if(expresion.test(inputJefe.value) 
    ){
       let inputNombre = document.getElementById("nombre");
       if(inputNombre.value !== inputJefe.value){
            marcarInputCorrecto(inputJefe);
            correcto  = true;
       }else{
           marcarInputErroneo(inputJefe);
       }
    }else{
        marcarInputErroneo(inputJefe);
    }
    return correcto;
}

function comprobarCategoria(inputCategoria){
    let correcto = false;
    if(inputCategoria.value !== ""){
        marcarInputCorrecto(inputCategoria);
        correcto = true;
    }else{
        marcarInputErroneo(inputCategoria);
    }
    return correcto;
}


function comprobarTerminos(inputTerminos){
    let correcto = false;
    if(inputTerminos.checked){
        marcarInputCorrecto(inputTerminos);
        correcto = true;
    }else{
        alert("debe aceptar los terminos");
        marcarInputErroneo(inputTerminos);
    }
    return correcto;
}

function comprobarFormulario(event){
    event.preventDefault();
    let esNombreCorrecto = comprobarNombre(document.getElementById("nombre"));
    let esDuracionCorrecta = comprobarNombre(document.getElementById("duracion"));
    let esJefeCorrecto = comprobarNombre(document.getElementById("jefe"));
    let esCategoriaCorrecta = comprobarNombre(document.getElementById("categoria"));
    let sonTerminosCorrectos = comprobarNombre(document.getElementById("terminos"));
    if(esNombreCorrecto && esDuracionCorrecta && esJefeCorrecto && esCategoriaCorrecta && sonTerminosCorrectos){
        let formulario = document.getElementById("formulario");
        formulario.submit();
    }else{
        alert("ERROR EN EL FORMULARIO");
    }
}