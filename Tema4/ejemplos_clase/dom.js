function cambiarDiv(numero){
    let div = document.getElementById("div"+numero);
    div.innerHTML = "DIV CAMBIADO";
}

function cambiarNombre(numero){
    let div = document.getElementsByName("prueba3");
    div[numero].innerHTML = "DIV CAMBIADO";
}

function cambiarDivs(){
    let divs = document.getElementsByTagName("div");
    for(let div of divs){
        div.innerHTML = "<h1>CAMBIADO</h1><h2>OK</h2>";
    }
    
}

function cambiarH1(){
    let h1s = document.getElementsByTagName("h1");
    for(let h1 of h1s){
        h1.innerHTML = "<span>CAMBIADO H1</span>";
    }
}

function cambiarClases(){
    let divs = document.getElementsByClassName("divEjemplo");
    for(let div of divs){
        div.innerHTML = "CAMBIADO POR CLASE";
    }
}

function cambiarQueryAll(){
    let divs = document.querySelectorAll(".divEjemplo") ;
    for(let div of divs){
        div.innerHTML = "CAMBIADO POR CLASE";
    }
}

function crearHijo(numero){
    let div = document.getElementById("div"+numero);
    let hijo = document.createElement("div");
    hijo.innerHTML = "HIJO";
    div.appendChild(hijo);
}

function eliminarPrimerHijo(numero){
    let div = document.getElementById("div"+numero);
    div.removeChild(div.firstElementChild);
}

function remplazarHijos(numero){
    let div = document.getElementById("div"+numero);
    let hijos = div.childNodes;
    let nuevoHijo = document.createElement("div");
    nuevoHijo.innerHTML = "NUEVO HIJO";
    div.replaceChild(nuevoHijo,hijos[0]);   
}

function crearNodos(){
    for(let i = 0; i< 10;i++){
        let div = document.createElement("div");
        div.setAttribute("id","div"+i);
        let h1 = document.createElement("h1");
        h1.innerHTML = "DIV "+i;
        div.appendChild(h1);
        for(let j = 0; j< 10;j++){
            let input = document.createElement("input");
            input.setAttribute("name","div"+i+"_"+j);
            input.setAttribute("value",j);
            input.style.color = "red";
            div.appendChild(input);
        }
        document.body.appendChild(div);
    }
}


