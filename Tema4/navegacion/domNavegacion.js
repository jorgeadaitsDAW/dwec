const padre = document.getElementById("padre"); 
const primerHijo = document.getElementById("primerHijo");
const segundoHijo = document.getElementById("segundoHijo");
const tercerHijo = document.getElementById("tercerHijo");

function modificarPadre(){
    primerHijo.parentNode.className="padre";
    segundoHijo.parentNode.title = "DIV DE PRUEBA";
    tercerHijo.parentNode.id = "divPadre";
}

function modificarHijos(){
    padre.childNodes.forEach(hijo => {
        hijo.className = "hijos";
    });
}

function modificarPrimerHijo(){
    padre.firstChild.classList.add("primerHijo");
}

function modificarUltimoHijo(){
    padre.lastChild.classList.add("ultimoHijo");
}

function modificarHermanoSiguiente(){
    let segundoHijo = document.getElementById("segundoHijo");
    segundoHijo.nextSibling.value="Soy el hermano siguiente";
}

function modificarHermanoAnterior(){
    let segundoHijo = document.getElementById("segundoHijo");
    segundoHijo.previousSibling.value="Soy el hermano anterior" ;
}


modificarPadre();
modificarHijos();
modificarPrimerHijo();
modificarHermanoSiguiente();
modificarHermanoAnterior();