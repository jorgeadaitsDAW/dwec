//TIPOS DE DATOS OBJETOS
console.log("EJEMPLOS DE TIPOS OBJETOS");

function ejemplosTiposObjetos(){
	ejemplosTiposPredefinidosJavascript();
	ejemplosTiposDefinidosProgramador();
	ejemplosTiposArrays();
	ejemplosTiposEspeciales();

}

function ejemplosTiposPredefinidosJavascript(){
	//EJEMPLOS DE TIPOS PREDEFINIDOS JAVASCRIPT
	console.log("EJEMPLOS DE TIPOS PREDEFINIDOS JAVASCRIPT");
	ejemplosDate();
	ejemplosExpresionesRegulares();
	ejemplosError();
}

function ejemplosTiposDefinidosProgramador(){
	//TIPOS DEFINIDOS POR EL PROGRAMADOR//
	console.log("EJEMPLOS DE TIPOS DEFINIDOS POR EL PROGRAMADOR");
	ejemplosFuncion();
	ejemplosClase();

}

function ejemplosTiposArrays(){
	//TIPOS ARRAYS
	console.log("TIPOS ARRAYS")
	ejemploArray();
	ejemploTypedArray();
}

function ejemplosTiposEspeciales(){
	//TIPOS OBJETOS ESPECIALES
	console.log("TIPOS OBJETOS ESPECIALES")
	ejemplosVariablesGlobales();
	ejemplosPrototype();
}



function ejemplosDate(){
	//EJEMPLO DATE
	console.log("EJEMPLOS DE DATE");
	let fecha = new Date(2018,11,17);
	console.log(fecha);

	let fecha2 = new Date("2018","0","17");
	console.log(fecha2);

	let fecha3 = new Date();
	console.log(fecha3);

	let fecha4 = new Date('2018','11', '31', '23', '59', '59', '100');
	console.log(fecha4);

}

function ejemplosExpresionesRegulares(){
	//EJEMPLO DE Expresiones Regulares
	console.log("EJEMPLOS DE EXPRESION REGULAR");
	let expresionRegular1 = /[a-zA-Z]{2}/
	console.log(expresionRegular1);

	let expresionRegular2 = new RegExp("[1-8]{9}");
	console.log(expresionRegular2);
}

function ejemplosError(){
	//EJEMPLO DE ERROR
	console.log("EJEMPLOS DE ERROR")
	let error1 = new Error("ESTO ES UN ERROR");
	console.log(error1);

	let error2 = new Error(23);
	console.log(error2);
}

function ejemplosFuncion(){
	//EJEMPLO DE FUNCION
	console.log("EJEMPLOS DE FUNCION");

	let funcion1 = function(){ return "EJEMPLO"}
	console.log(funcion1);
	console.log(funcion1());

	function prueba(texto){
		return "ESTO ES UNA PRUEBA "+texto;
	}

	console.log(prueba);
	console.log(prueba("HOLA"));
}

function ejemplosClase(){
	//EJEMPLO DE CLASS
	console.log("EJEMPLOS DE CLASS")

	let clase1 = class Ejemplo{};
	console.log(clase1);
	console.log(new clase1());

	class pruebaTipo{
		funcionEjemplo(){}
	}
	let clase2  = pruebaTipo;
	console.log(clase2);
	console.log(new clase2());
}

function ejemploArray(){
	//TIPOS ARRAYS
	console.log("EJEMPLOS DE TIPOS DE ARRAYS");

	console.log("EJEMPLO DE ARRAY")
	let array1 = [];
	console.log(array1);

	let array2 = [1,2,3,4];
	console.log(array2);

	let array3 = ["HOLA","ADIOS","EJEMPLO"];
	console.log(array3);

	let array4 = [1,"HOLA",3, "ADIOS"];
	console.log(array4);
}

function ejemploTypedArray(){
	console.log("EJEMPLO DE TYPED ARRAY");

	let typedArray1 = new Int8Array(5);console.log(typedArray1);
	let typedArray2 = new Uint8Array(3);console.log(typedArray2);
	let typedArray3 = new Uint8ClampedArray(4);console.log(typedArray3);
	let typedArray4 = new Int16Array(2);console.log(typedArray4);
	let typedArray5 = new Uint16Array(8);console.log(typedArray5);
	let typedArray6 = new Int32Array(9);console.log(typedArray6);
	let typedArray7 = new Uint32Array(0);console.log(typedArray7);
	let typedArray8 = new Float32Array(10);console.log(typedArray8);
	let typedArray9 = new Float64Array(15);console.log(typedArray9);
}

function ejemplosVariablesGlobales(){
	console.log("EJEMPLO DE GLOBAL");
	console.log(typeof window);

}

function ejemplosPrototype(){
	console.log("EJEMPLO DE PROTOTYPE");
	let prototipo1 = function(nombre){
		this.nombre = nombre;	
	}

	console.log(prototipo1);
	let x = new prototipo1();
	console.log(x.__proto__);

	let prototipo2 = function(nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}

	console.log(prototipo2);
	let y = new prototipo2("pepe",12);
	console.log(y);
	console.log(y.__proto__);
}



//EJECUCION DE LA FUNCION PRINCIPAL
ejemplosTiposObjetos();





