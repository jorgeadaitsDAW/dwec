let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre");
let inputDuracion = document.getElementById("duracion");
let inputJefe = document.getElementById("jefe");
let inputCategoria = document.getElementById("categoria");
let inputTerminos = document.getElementById("terminos");

//Este evento se lanza cuando se carga todo el DOM en la página
document.addEventListener("DOMContentLoaded", function(event) {
    inputNombre.addEventListener("keydown", function(event){
        comprobarCampo(event,comprobarNombre);  
    });

    inputDuracion.addEventListener("keydown", function(event){
        comprobarCampo(event,comprobarDuracion);
    })

    inputJefe.addEventListener("keydown", function(event){
        comprobarCampo(event,comprobarJefe);
    })

    inputCategoria.addEventListener("change", function(event){
        validarCampo(event.target,comprobarCategoria);
    })

    inputTerminos.addEventListener("change", function(event){
        validarCampo(event.target,comprobarTerminos);
    })

    formulario.addEventListener("submit",function(event){
        comprobarFormulario(event);
    });
});

let timeout = null;

function comprobarCampo(event,funcionComprobar){
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        validarCampo(event.target,funcionComprobar);
    }, 500);
};

function validarCampo(input,funcionValidacion){
    let correcto = false;
    let errores = funcionValidacion();
    if(input.nextSibling !== undefined && input.nextSibling !== null ){
        input.nextSibling.remove();
    }
    if(errores.length > 0){
        marcarInputErroneo(input,errores);
    }else{
        correcto = true;
        marcarInputCorrecto(input);
    }
    return correcto;
}

function marcarInputErroneo(input,errores){
    input.classList.remove("valido");
    input.classList.add("invalido");
    let padre = input.parentNode;

    let divErrores = document.createElement("div");
    divErrores.classList.add("error");
    padre.appendChild(divErrores);

    errores.forEach( error => {
        let divError = document.createElement("div");
        divError.innerHTML = error;
        divErrores.appendChild(divError);
    });
}

function marcarInputCorrecto(input){
    input.classList.remove("invalido");
    input.classList.add("valido");
}

function comprobarNombre(){
    let errores = [];
    let expresion = /^[a-zA-Z]+$/g;
    if(!expresion.test(inputNombre.value)){
        errores.push("El nombre no cumple con el patrón");
    }
    return errores;
}

function comprobarDuracion(){
    let errores = [];    
    let expresion = /^[0-9]+$/g;
    if(expresion.test(inputDuracion.value) 
    ){
        let valor = parseInt(inputDuracion.value);
        if(valor < 6 || valor >24){
            errores.push("La duración no esta en el rango especificado");
        }
    }else{
       errores.push("La duración tiene un formato erroneo");
    }
    return errores;
}

function comprobarJefe(){
    let errores = [];
    let expresion = /^[A-Z]{1}[a-z]+\s{1}[a-z]+$/g;

    if(expresion.test(inputJefe.value) 
    ){
       if(inputNombre.value === inputJefe.value){
            errores.push("EL NOBRE DEL PROYECTO Y DEL JEFE NO PUEDEN SER IGUALES")
       }
    }else{
        errores.push("ERROR EN EL FORMATO DEL JEFE");
    }
    return errores;
}

function comprobarCategoria(){
    let errores = [];
    if(inputCategoria.value === ""){
        errores.push("DEBE SELECCONAR UNA CATEGORIA");
    }
    return errores;
}


function comprobarTerminos(){
    let errores = [];
    if(!inputTerminos.checked){
        errores.push("DEBE ACEPTAR LOS TERMINOS");
    }
    return errores;
}

function comprobarFormulario(event){
    event.preventDefault();
    let errores = []
    errores.push(validarCampo(inputNombre,comprobarNombre));
    errores.push(validarCampo(inputDuracion,comprobarDuracion));
    errores.push(validarCampo(inputJefe,comprobarJefe));
    errores.push(validarCampo(inputCategoria,comprobarCategoria));
    errores.push(validarCampo(inputTerminos,comprobarTerminos));

    if(errores.some(x => !x)){
        alert("ERROR EN EL FORMULARIO");
    }else{
        let formulario = document.getElementById("formulario");
        formulario.submit();
    }
}