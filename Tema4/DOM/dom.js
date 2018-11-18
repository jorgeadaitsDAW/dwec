function crearHTML(numeroDivs) {
    let cont = 1;
    let body = document.body;//Obtenemos el body del HTML

    for (let i = 1; i <= numeroDivs; i++){
        let div = document.createElement("div"); //Creamos un div
        let texto = document.createTextNode("DIV Nº " + cont); //Creamos el texto dentro de ese div
        div.appendChild(texto); //Añadimos el texto al div
        body.appendChild(div); //Añadimos el div al body del html
        div.className = "divEjemplo";

        for(let j=1;j<= i;j++){
            let label = document.createElement("label"); //Creamos un label
            label.setAttribute("for", `${i}.${+j}`); //Asignamos el valor del atributo 'for' del label
            let input = document.createElement("input"); //Creamos un input
            input.setAttribute("id", `${i}.${+j}`); //Asignamos el valor del atributo 'id' del input
            div.appendChild(label);//Añadimos el label al div
            div.appendChild(input);//Añadimos el input al div

            if(j % 2 === 0){
                input.setAttribute("name",'par');
            }else{
                input.setAttribute("name",'impar');
            }

        }
    }

}

function modificarColorFondo(id){    
    let div= document.getElementById(id);  
    if(div.style.backgroundColor === 'green'){
        div.style.backgroundColor = 'red';
    }else{
        div.style.backgroundColor = 'green';
    }
}

function modificarAtributos(name){
    let inputs = document.getElementsByName(name);

    for(input of inputs){
        input.style.backgroundColor = 'blue';
    }

    inputs.forEach(
        input => input.value= `SOY ${name}`
    );

}


function modificarClase(tag){
    let elementos = document.getElementsByTagName(tag);
   
    for(elemento of elementos){
        elemento.className = 'prueba'
    }

}


function modificarClaseDiv(clase){
    let elementos = document.getElementsByClassName(clase);
   
    for(elemento of elementos){
        elemento.style.color = 'orange';
    }
    
}   

function modificarPorQuerySelector(selector){
    let elementos = document.querySelectorAll(selector);
   
    for(elemento of elementos){
        elemento.style.backgroundColor = 'brown';
    }

    elementos.forEach(
        elemento => elemento.value= "PRUEBA"
    );

}

crearHTML(10);
modificarColorFondo(1.1);
modificarAtributos('impar');
modificarClase('input');
modificarClaseDiv('divEjemplo');
modificarPorQuerySelector('input[name="par"]');
