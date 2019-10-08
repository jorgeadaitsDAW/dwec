function contarVocales(lista){
    let numeroVocales = 0;
    for(let letra of lista){
        console.log(letra);
        switch(letra){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":        
               numeroVocales++;
               break;                 
        }
    }

    return numeroVocales;
}

let resultado = contarVocales(["a", "E", 1, "k"]);
console.log("EL RESULTADO ES:"+resultado);

let resultado2 = contarVocales(["a", "e", "i", "o", "u"]);
console.log("EL RESULTADO 2 ES:"+resultado2);


function factorial(numero){
    let resultado = 0;
    if(typeof numero === "number"){
        resultado = 1;
        for(let i = 2;i <=numero;i++){
            resultado*= i; 
        }
    }
    return resultado;
}


function factorial2(numero){
    let resultado = 0;
    if(typeof numero === "number"){
        resultado = numero;
        if(numero > 1){
            resultado *=factorial2(numero -1);
        }
    }
    return resultado;
}

function compararListas(lista1,lista2){
    let puntos1 = 0;
    let puntos2 = 0;
    for(let i = 0; i< lista1.length; i++){
        if(typeof lista1[i] === "number"
            && typeof lista2[i] === "number"
        ){
            if(lista1[i] > lista2[i]){
                puntos1++;
            }else if(lista1[i] < lista2[i]){
                puntos2++;
            }
        }
    }

    if(puntos1 > puntos2){
        console.log(`Gana Lista 1: ${puntos1}`);
    }else if(puntos1 < puntos2){
        console.log(`Gana Lista 2: ${puntos2}`);
    }else{
        console.log(`Empate ${puntos1}`);
    }
}

compararListas(["prueba",2,3,4,5],[5,4,3,2,1]);

function concatenarLista(lista){
    let resultado = "";
    let tamLista = lista.length;
    for(let i=0; i< tamLista/2; i++){
        if(i === (tamLista - i - 1)){
            resultado += lista[i];
        }else{
            resultado += lista[i];
            resultado += lista[tamLista-i -1]; 
        }
    }
    console.log("EL RESULTADO DE CONCATENAR ES :"+resultado);
    return resultado;
}
concatenarLista(["a","b","c"]);
