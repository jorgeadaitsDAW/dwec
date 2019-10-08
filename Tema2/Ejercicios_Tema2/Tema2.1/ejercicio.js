// El OBJETIVO DE ESTE EJERCICIO ES DECLARAR LAS VARIABLES
// CORRESPONDIENTES PARA QUE LAS FUNCIONES SIEMPRE DEVUELVAN TRUE
// SIEMPRE HAY QUE DEJAR EL CÓDGIO DE LAS FUNCIONES IGUAL
// SALVO QUE SE ESPECIFIQUE EN LA PROPIA FUNCÍON QUE PODÉIS MODIFICARLO


//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones(){
    var functio = new Object();
    var ejemplo = "EJEMPLO";
    var _123prueba = 123;
    var pruebaejemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prueba = "PRUEBA";

    return true;
}

function declararNumeros(){
    let numA = "12";
    let numB = 10;

    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

function declararString(){
    let cadena = "PRuEbA";
    return cadena === "PRuEbA"
        && typeof cadena === "string";
}

function noDefinido(){
    var x = null;
    var y = undefined;

    var x = undefined;
    var y = null;

    return x === undefined
        && y === null;
}

function declararSymbol(){
    var x = Symbol("simbolo");
    return typeof x === "symbol";
}

function declararFecha(){
    var hoy = new Date();
    console.log("ESTOY EJECUTANDO LA FUNCION DE FECHAS")
    return hoy instanceof Date;

}

function declararExpresionRegular(){
    var expresion = new RegExp("Prueba"); //Forma Lenta
    var expresion = /Prueba/; //Forma Rapida
    return expresion instanceof RegExp;
}

function declararFuncion(){
    var funcion = new Function();
    var funcion = declararFecha;
    funcion();
    funcion();
    funcion();    
    return funcion instanceof Function;
}



function declararObjeto(){

    class ObjetoPrueba{};

    let objeto = new ObjetoPrueba;

    return objeto instanceof ObjetoPrueba;
}

function declararArray(){

    let lista = ["Prueba",false,/prarar/,declararFecha,"Correcto"];

    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}


function declararArrayTipo(){

    let listaEnteros = new Int32Array([0,0,0,0,0,0,0,0,0,0]);     
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}


function declararVariableGlobal(){
    var x = "SOY gLOBAL";
    return window.x
            && x === "SOY gLOBAL"
        ;

}

function declararPrototipo(){
    function prototipo(nombre){
        this.nombre = nombre;
    }

    var objeto = new prototipo("ejemplo");

    return objeto.__proto__ === prototipo.prototype

}

//ESTA FUNCION DEBÉIS MODIFICAR EL CÓDIGO PARA QUE FUNCIONE
function declaracionConRetraso(){

    var y = 35;
    var resultado = y === 35;

    
    return resultado;
}


function declaracionLet(){
    let x = 0;
    let y = "bien";
    if(x > 1){
        let y = "bien";
    }
    return y === "bien";
}

//ESTA FUNCIÓN DEBÉIS MODIFICAR EL CÓDIGO PARA QUE FUNCIONE
function declaracionConst(){
    const valor = 30;
    return valor === 30;
}

