document.addEventListener("DOMContentLoaded",function(event){
    let boton = document.getElementById("ejemplo");
    boton.setAttribute("onclick","funcionEjecutar2()");
    boton.setAttribute("onclick","funcionEjecutar3()");
    //let botonPrueba = document.getElementById("prueba");
    //botonPrueba.setAttribute("onclick","funcionEjecutar3()");
    let boton3 = document.getElementById("ejemplo3");
    boton3.onclick = funcionEjecutar3;
    
    let boton4 = document.getElementById("ejemplo4");
    boton4.addEventListener("click",funcionEjecutar4);
    boton4.addEventListener("click",funcionEjecutar3);

    let  divCuadrado = document.getElementById("cuadrado");
    divCuadrado.addEventListener("mouseup",mostrarPosicionAlEntrar);
    divCuadrado.addEventListener("mouseout",mostrarPosicionAlSalir);


    let  enlaceGoogle = document.getElementById("enlace");
    enlaceGoogle.addEventListener("click",mostrarAlertaGoogle);

})

function funcionEjecutar(){
    alert("HOLAA!!!");
}

function funcionEjecutar2(){
    alert("HOLAA2222!!!");
}

function funcionEjecutar3(){
    alert("HOLAA3333!!!");
}

function funcionEjecutar4(){
    alert("HOLAA4444!!!");
}

function mostrarPosicionAlEntrar(event){
    alert(`ESTAMOS EN LA POSICION ${event.screenX} Y ${event.screenY}`);
}

function mostrarPosicionAlSalir(event){
    alert(`ESTAMOS EN LA POSICION ${event.screenX} Y ${event.screenY}`);
}

function mostrarAlertaGoogle(event){
    event.preventDefault();
    alert("PAGINA DE GOOGLE");
}
