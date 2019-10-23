function pruebaTelefono1(telefono){
    let expresion = /^([0-9]){9}$/;
    let resultado = false;
    if(expresion.test(telefono)){
        resultado = true;
    }
    return resultado;
}

function pruebaTelefonoSpain(telefono){
    let expresion = /^\+34(6|7){1}([0-9]){8}$/;
    let resultado = false;
    if(expresion.test(telefono)){
        resultado = true;
    }
    return resultado;
}

function pruebaTelefonoInternacional(telefono){
    let expresion = /^\+([0-9]){2,3}([0-9]){9}$/;
    let resultado = false;
    if(expresion.test(telefono)){
        resultado = true;
    }
    return resultado;
}

function pruebaTelefonoInternacional2(telefono){
    let expresion = /^\+([A-Ya-yÑñ]){2,3}([0-9]){9}$/;
    let resultado = false;
    if(expresion.test(telefono)){
        resultado = true;
    }
    return resultado;
}

function pruebaTelefonoString(telefono){
    let expresion = /^\+([A-Ya-yÑñ]){2,3}([0-9]){9}$/;
    let resultado = false;
    if(telefono.match(expresion)){
        resultado = true;
    }
    return resultado;
}

function validarEmail(email){
    let expresion = /^([a-zA-z0-9._])+([@])+([a-zA-z0-9])+\.+([a-zA-z0-9]+\.?)+([^.])+$/;
    return expresion.test(email);
}

function validarURL(url){
    let expresion = /^((http|https):\/\/)+(www\.)?([a-zA-Z0-9])+(\.com|\.es)+$/
    return expresion.test(url);
}

function quitarNumeros(){
    let texto = "Prueba0123Ejemplo0123";
    let expresion = /[0-9]/g;
    return texto.replace(expresion,"Prueba");

}
