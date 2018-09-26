//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones(){
    var function = new Object();
    var e%jemplo = "EJEMPLO";
    var 123prueba = 123;
    var prueba.ejemplo = "EJERCICIO";
    var prue ba = "PRUEBA";
    var prue+ba = "PRUEBA";

    return true;
}

function declararNumeros(){
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

function declararString(){

    return cadena === "PRuEbA"
        && typeof cadena === "string";
}

function noDefinido(){
    var x = null;
    var y = undefined;
    return x === undefined
        && y === null;
}

function declararSymbol(){

    return typeof x === "symbol";
}

function declararFecha(){

    return hoy instanceof Date;

}

function declararExpresionRegular(){

    return expresion instanceof RegExp;
}

function declararFuncion(){

    return funcion instanceof Function;
}



function declararObjeto(){

    class ObjetoPrueba{};

    return objeto instanceof ObjetoPrueba;
}

function declararArray(){


    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}


function declararArrayTipo(){


    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}


function declararVariableGlobal(){


    return window.x
            && x === "SOY gLOBAL"
        ;

}

function declararPrototipo(){

    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype

}

function declaracionConRetraso(){

    var resultado = y === 35;

    var y = 35;

    return resultado;
}


function declaracionLet(){
    let x = 0;
    if(x > 1){
        let y = "bien";
    }
    return y === "bien";
}

function declaracionConst(){
    const valor = 10;
    valor += 20;
    valor = 30;
    return valor === 30;
}

