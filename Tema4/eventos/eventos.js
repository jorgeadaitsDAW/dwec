function comprobarExpresionRegular(expresion,input){
    let esCorrecto = false;
    if(expresion.test(input.value)){
        input.classList.remove("invalido");
        input.classList.add("valido");
        esCorrecto = true;
    }else{
        input.classList.add("invalido");
        input.classList.remove("valido");
    }
    return esCorrecto;
}

function comprobarNombre(){
    let expresion = /^[a-zA-Z\s]{2,}$/g;
    let inputNombre = document.getElementById("nombre");
    return comprobarExpresionRegular(expresion,inputNombre);
}

function comprobarApellidos(){
    let expresion = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/g;
    let inputApellidos = document.getElementById("apellidos");
    return comprobarExpresionRegular(expresion,inputApellidos);
}

function comprobarEdad(){
    let expresion = /^[0-9]+$/g;
    let inputEdad = document.getElementById("edad");
    return comprobarExpresionRegular(expresion,inputEdad);
}

function comprobarTelefono(){
    let expresion = /^[0-9]{9}$/g;
    let inputTelfono = document.getElementById("telefono");
    return comprobarExpresionRegular(expresion,inputTelfono);
}


function comprobarFormulario(event){
    event.preventDefault();
    let esFormularioCorrecto = false;
    let esNombreCorrecto = comprobarNombre();
    let esApellidoCorrecto = comprobarApellidos();
    let esEdadCorrecta = comprobarEdad();
    let esTelefonoCorrecto = comprobarTelefono();

    if(esNombreCorrecto && esApellidoCorrecto && esEdadCorrecta && esTelefonoCorrecto){
        esFormularioCorrecto = true;
        event.target.submit();
    }else{
        alert("EXISTEN ERRORES EN EL FORMULARIO");
    }

    return esFormularioCorrecto;
}

//Otra forma de asociar eventos, es modificando los atributos
let inputApellido = document.getElementById("apellidos");
inputApellido.setAttribute("onchange","comprobarApellidos()");

//Otra forma de asociar eventos, es modificando las propiedades
let inputEdad= document.getElementById("edad");
inputEdad.onblur = comprobarEdad; 


//Con document.addEventListener
let inputTelefono = document.getElementById("telefono");
inputTelefono.addEventListener("change",comprobarTelefono);

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Todavía queda el evento del formulario, asociado cuando se carga el DOM");
    //Comprobar que todos los datos del formulario estan bien
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit",function(event){
        comprobarFormulario(event);
    });
});

console.log("Ya se han asociado todos los eventos");