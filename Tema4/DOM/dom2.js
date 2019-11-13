function crearDivsColores(numero){
    for(let i= 1;i<= numero;i++){
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerHTML = `DIV ${i}`;
        let tam = 100 * i;
        div.style.width = `${tam}px`;
        div.style.height = `${tam}px`;
        if(i % 2 === 0){
            div.style.backgroundColor = "red";
        }else{
            div.style.backgroundColor = "green";
        }
        div.style.border = "1px solid black";

        div.appendChild(h1);
        document.body.appendChild(div);

    }
}

function crearDivsColoresClases(numero){
    for(let i= 1;i<= numero;i++){
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerHTML = `DIV ${i}`;
        let tam = 100 * i;
        div.style.width = `${tam}px`;
        div.style.height = `${tam}px`;

        if(i % 2 === 0){
            div.classList.add("divPar");
        }else{
            div.classList.add("divImpar");
        }
        div.classList.add("elementoDiv");
        
        div.appendChild(h1);
        document.body.appendChild(div);

    }
}

function eliminarPares(){
    let divs = document.getElementsByClassName("divPar");
    console.log(divs);

    let x = divs.length; 
    for(let i = 0;i< x;i++){
        console.log(divs[i]);
        divs[0].remove();
    }
}