//TIPOS DE DATOS PRIMITIVOS
console.log("EJEMPLOS DE TIPOS PRIMITIVOS");

// DEBEMOS IR LLAMANDO A CADA FUNCIÓN PARA PROBAR CADA TIPO DE DATOS
// DEBEMOS CREAR DOS EJEMPLOS MÁS PARA CADA CASO
function ejemplosDeTiposPrimitivos(){
	ejemploString();
	ejemploNumber();
}

function ejemploString(){
	//EJEMPLO STRING
	console.log("EJEMPLO DE STRING")
	var str1 = "EJEMPLO 1";console.log(str1)
	var str2 = "HOLA ESTO ES UN EJEMPLO";console.log(str2)
	var str3 = 'ESTA CADENA TAMBIEN ES VALIDA'; console.log(str3)
}

function ejemploNumber(){
	// EJEMPLO NUMBER
	console.log("EJEMPLOS DE NUMBER")
	let num1 = 12; console.log(num1)
	let num2 = 3.14;console.log(num2)
	let num3 = 123e5;console.log(num3)
	let num4 = 123e-5;console.log(num4)
	let num5 = 999999999999999; console.log(num5)
	let num6 = 9999999999999999;console.log(num6)
}

function ejemploBoolean(){
	//EJEMPLO BOOLEAN
	console.log("EJEMPLOS DE BOOLEAN")
	const booleano1 = true; console.log(booleano1);
	const booleano2 = false; console.log(booleano2);
	//PROBAR CON LOS VALORES TRUE Y FALSE
}

function ejemploSymbol(){
	//Ejemplo Symbol
	console.log("EJEMPLOS DE Symbol");
	let simbolo1 = Symbol("prueba");
	console.log(simbolo1);
	let simbolo2 = Symbol("prueba");
	console.log(simbolo2);
	console.log("SON IGUALES:"+ (simbolo1 == simbolo2))
}

function ejemploNull(){
	// EJEMPLO null
	console.log("EJEMPLOS DE NULL");
	let ejemploNull = null;
	console.log(ejemploNull);
}

function ejemploUndefined(){
	//EJEMPLO undefined
	console.log("EJEMPLOS DE UNDEFINED");
	let ejemploUndefined = undefined;
	console.log(undefined);
	let variableNoDefinida;
	console.log(variableNoDefinida);
	//console.log(noExisteVariable) => ¿QUE PASARIA?
}

ejemplosDeTiposPrimitivos();