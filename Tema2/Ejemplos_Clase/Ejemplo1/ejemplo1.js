console.log("NUESTRAS PRIMERAS FUNCIONES");

function prueba(){
    console.log("EJECUTANDO FUNCION PRUEBA");
    let a = 2;
    if(a == 2){
        a = 3;
        console.log(a);
    }
    return a;
}


function resta(num1,num2){
    return num1 - num2;
}

function multiplica(num1,num2){
    return num1 * num2;
}

function recorrerForIn(){

    let lista = ["Pepito","Jaimito","Richy","Gilito","Jorgito"];
    console.log("BUCLE FOR NORMAL");
    for(let i = 0;i< lista.length;i++){
        console.log(lista[i]);
    }

    console.log("BUCLE FOR IN");
    for(let pos in lista){
        console.log(lista[pos]);
    }

    console.log("BUCLE FOR OF");
    for(let nombre of lista){
        console.log(nombre);
    }


    return true;
}