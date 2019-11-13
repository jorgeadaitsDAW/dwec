document.addEventListener("DOMContentLoaded",function(event){
    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup",escribir);

    let inputNumero = document.getElementById("numero");
    inputNumero.addEventListener("keyup",validarNumero);

    let botonOM = document.getElementById("ocultar_mostrar");
    botonOM.addEventListener("click",ocultar_mostrar_pass);

});

function escribir(event){
    let div = document.getElementById("resultado");
    //let teclaPulsada = event.key;
    //div.innerHTML +=teclaPulsada;
    let inputNombre = document.getElementById("nombre");
    div.innerHTML = inputNombre.value;
}


function validarNumero(event){
    let inputNumero = document.getElementById("numero");
    let valor = inputNumero.value;
    let expr = /^[0-9]*$/;
    let divErrores = document.getElementById("errores");
    divErrores.innerHTML = "";
    inputNumero.classList.remove("inputErroneo");
    inputNumero.classList.remove("inputCorrecto");
    let esInputCorrecto = true;
    if(valor.trim() !== ""){

        if(!expr.test(valor)){
            esInputCorrecto = false;
            let span = document.createElement("span");
            span.innerHTML = "ERROR: SOLO SE PERMITEN NUMEROS";
            divErrores.appendChild(span);
        }

        if(valor < 10){
            esInputCorrecto = false;
            let span = document.createElement("span");
            span.innerHTML = "ERROR:EL VALOR TIENE QUE SER MAYOR QUE 10";
            divErrores.appendChild(span);
        }

        if(valor %2 !==0){
            esInputCorrecto = false;
            let span = document.createElement("span");
            span.innerHTML = "ERROR:EL VALOR TIENE QUE SER PAR";
            divErrores.appendChild(span);
        }

        if(esInputCorrecto){
            inputNumero.classList.add("inputCorrecto");
        }else{
            inputNumero.classList.add("inputErroneo");
        }
    }
}

function ocultar_mostrar_pass(event){
    let inputPass = document.getElementById("pass");
    let boton = document.getElementById("ocultar_mostrar");
    if(inputPass.type === "text"){
        inputPass.type = "password";
        boton.innerHTML = "Mostrar";
    }else{
        boton.innerHTML = "Ocultar";
        inputPass.type = "text";
    }
}