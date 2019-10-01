///ENENDER LOS DIFERENTES TIPOS DE VARIABLES


//EJEMPLOS CON VAR

function comprobarDeclaracionSinTipo(caso){
	let contadorLlamadas = 7;
	auxiliar = "AUXILIAR ES VISIBLE EN TODO EL ARCHIVO";
	if(caso == 2){
		auxiliar2 = "AUXILIAR2 TAMBIEN ES VISIBLE EN TODO EL ARCHIVO";		
	}
	if(caso == 3){
		auxiliar3 = "AUXLIAR 3 TAMBIEN ES VISIBLE EN TODO EL ARCHIVO";
		let contadorLlamadas = 10;
	}
	contadorLlamadas++; 
	console.log("CONTADOR DE LLAMADAS:"+contadorLlamadas)
}

function ejemploDeclaracionGlobal(){
	contadorLlamadas = 0;
	console.log("CASO 1");
	comprobarDeclaracionSinTipo(1);
	console.log(auxiliar);

	console.log("CASO 2");
	comprobarDeclaracionSinTipo(2);
	console.log(auxiliar2);

	console.log("CASO 3");
	comprobarDeclaracionSinTipo(3);
	console.log(auxiliar3);

	console.log("NUMERO LLAMADAS: "+contadorLlamadas);
}

ejemploDeclaracionGlobal();

function comprobarVar(caso){
	var auxiliarVar = "AUXILIAR ES VISIBLE EN TODA LA FUNCION";
	if(caso == 2){
		var auxiliarVar2 = "AUXILIAR2 TAMBIEN ES VISIBLE EN TODA LA FUNCION";		
	}
	if(caso == 3){
		var auxiliarVar3 = "AUXLIAR 3 TAMBIEN ES VISIBLE EN TODA LA FUNCION";
	}
	console.log(auxiliarVar);
	switch(caso){
		case 2:
			console.log(auxiliarVar2);
			break;
		case 3:
			console.log(auxiliarVar3)
			break;	
	}

}

function ejemplosComprobarVar(){
	console.log("EJEMPLOS CON VAR");
	console.log("CASO 1");
	comprobarVar(1);
	console.log("CASO 2");
	comprobarVar(2);
	console.log("CASO 3");
	comprobarVar(3);
	//¿PUEDE ACCEDER DESDE ESTA FUNCION A LAS VARIABLES auxiliarVar, auxiliarVar2, auxiliarVar3?
	console.log(auxiliarVar);
	console.log(auxiliarVar2);
	console.log(auxiliarVar3);
	console.log("FIN EJEMPLOS CON VAR");
}

ejemplosComprobarVar();

//VAMOS A PROBAR EL CODIGO ANTERIOR PERO EN VEZ DE USAR VAR, USAREMOS LET
//DEBEMOS DESCOMENTAR LA LLAMADA a la funcion 'ejemplosComprobarLet'
function comprobarLet(caso){
	let auxiliarLet = "AUXILIAR ES VISIBLE EN TODA LA FUNCION";
	if(caso == 2){
		let auxiliarLet2 = "AUXILIAR2 TAMBIEN ES VISIBLE EN TODA LA FUNCION";		
	}
	if(caso == 3){
		let auxiliarLet3 = "AUXLIAR 3 TAMBIEN ES VISIBLE EN TODA LA FUNCION";
	}
	console.log(auxiliarLet);
	switch(caso){
		case 2:
			console.log(auxiliarLet2);
			break;
		case 3:
			console.log(auxiliarLet3)
			break;	
	}

}

function ejemplosComprobarLet(){
	console.log("EJEMPLOS CON LET");
	comprobarLet(1);
	console.log("CASO 1");
	comprobarLet(2);
	console.log("CASO 2");
	comprobarLet(3);
	console.log("CASO 3");
}

//ejemplosComprobarLet();

let auxiliarVisibleTodoArchivo = "ESTA VARIABLE SE VE EN TODO EL ARCHIVO, DESPUES DE ESTA DECLARACION";
function comprobarLet2(caso){
	let auxiliarLet = "AUXILIARLET ES VISIBLE EN TODA LA FUNCION";
	if(caso == 2){
		auxliarLet = "AUXILIARLET TAMBIEN ES VISIBLE EN EL CASO 2";
		console.log(auxiliarLet);
		
		let auxiliarLet2 = "AUXILIAR2 ES SOLO VISIBLE DENTRO DE ESTE IF";
		console.log(auxiliarLet2);		
	}
	if(caso == 3){
		auxiliarLet = "AUXILIARLET  ES VISIBLE EN EL CASO 3";
		console.log(auxiliarLet);

		let auxiliarLet3 = "AUXLIAR 3 ES SOLO VISIBLE DENTRO DE ESTE IF";
		console.log(auxiliarLet3)
	}
	console.log(auxiliarLet);
	switch(caso){
		case 1:
			console.log(auxiliarLet+".TAMBIEN ES VISIBLE EN EL SWITCH");
			break;
		case 2:
			let auxiliar_switch_2 = "AUXILIAR_SWITCH_2 SOLO ES ACCESIBLE EN EL BLOQUE DEL SWITCH";
			console.log(auxiliar_switch_2);
			break;
		case 3:
			let auxiliar_switch_3 = "AUXILIAR_SWITCH_3 SOLO ES ACCESIBLE EN EL BLOQUE DEL SWITCH";
			console.log(auxiliar_switch_3)
		default:
			auxiliarLet +=  "TAMBIEN ES VISIBLE EN EL DEFAULT DEL SWITCH";
			console.log(auxiliarLet);
	}

}

function ejemplosComprobarLet2(){
	console.log("EJEMPLOS CON LET 2");
	comprobarLet2(1);
	console.log("CASO 1");
	comprobarLet2(2);
	console.log("CASO 2");
	comprobarLet2(3);
	console.log("CASO 3");
	console.log(auxiliarVisibleTodoArchivo);
}

ejemplosComprobarLet2();


//VAMOS A PROBAR EL CODIGO DE EJEMPLO CON VAR ANTERIOR PERO EN VEZ DE USAR VAR, USAREMOS CONST
//DEBEMOS DESCOMENTAR LA LLAMADA a la funcion 'ejemplosComprobarConst'
function comprobarConst(caso){
	let auxiliarConst = "AUXILIAR ES VISIBLE EN TODA LA FUNCION";
	if(caso == 2){
		let auxiliarConst2 = "AUXILIAR2 TAMBIEN ES VISIBLE EN TODA LA FUNCION";		
	}
	if(caso == 3){
		let auxiliarConst3 = "AUXLIAR 3 TAMBIEN ES VISIBLE EN TODA LA FUNCION";
	}
	console.log(auxiliarConst);
	switch(caso){
		case 2:
			console.log(auxiliarConst2);
			break;
		case 3:
			console.log(auxiliarConst3)
			break;	
	}

}

function ejemplosComprobarConst(){
	console.log("EJEMPLOS CON CONST");
	console.log("CASO 1");
	comprobarConst(1);
	console.log("CASO 2");
	comprobarConst(2);
	console.log("CASO 3");
	comprobarConst(3);
}

//ejemplosComprobarConst();

//VAMOS A PROBAR EL CODIGO DE EJEMPLO CON LET ANTERIOR PERO EN VEZ DE USAR LET, USAREMOS CONST
//DEBEMOS DESCOMENTAR LA LLAMADA a la funcion 'ejemplosComprobarConst'
function comprobarConst2(caso){
	const auxiliarConst = "AUXILIARCONST ES VISIBLE EN TODA LA FUNCION";
	
	if(caso == 2){
		auxiliarConst = "AUXILIARCONST TAMBIEN ES VISIBLE EN EL CASO 2";
		console.log(auxliarConst);

		const auxiliarConst2 = "AUXILIAR2 ES SOLO VISIBLE DENTRO DE ESTE IF";
		console.log(auxiliarConst2);		
	}
	
	if(caso == 3){
		auxiliarConst = "AUXILIARCONST TAMBIEN ES VISIBLE EN EL CASO 3";
		console.log(auxliarConst);

		const auxiliarConst3 = "AUXLIAR 3 ES SOLO VISIBLE DENTRO DE ESTE IF";
		console.log(auxiliarConst3)
	}

	console.log(auxiliarConst);
	switch(caso){
		case 1:
			console.log(auxiliarConst+ " TAMBIEN ES VISIBLE EN EL SWITCH");
			break;
		case 2:
			const auxiliar_switch_2 = "AUXILIAR_SWITCH_2 SOLO ES ACCESIBLE EN EL BLOQUE DEL SWITCH";
			console.log(auxiliar_switch_2);
			break;
		case 3:
			const auxiliar_switch_3 = "AUXILIAR_SWITCH_3 SOLO ES ACCESIBLE EN EL BLOQUE DEL SWITCH";
			console.log(auxiliar_switch_3)
		default:
			auxiliarConst += ". TAMBIEN ES VISIBLE EN EL DEFAULT DEL SWITCH";
			console.log(auxiliarConst);
	}

}

function ejemplosComprobarConst2(){
	console.log("EJEMPLOS CON CONST 2");
	console.log("CASO 1");
	comprobarConst2(1);
	console.log("CASO 2");
	comprobarConst2(2);
	console.log("CASO 3");
	comprobarConst2(3);
}

//ejemplosComprobarConst2();

//
function comprobarConst3(caso){
	const auxiliarConst = "AUXILIARCONST ES VISIBLE EN TODA LA FUNCION";
	
	if(caso == 2){
		const auxiliarConst2 = "AUXILIAR2 ES SOLO VISIBLE DENTRO DE ESTE IF";
		console.log(auxiliarConst2);		
	}
	
	if(caso == 3){
		const auxiliarConst3 = "AUXLIAR 3 ES SOLO VISIBLE DENTRO DE ESTE IF";
		console.log(auxiliarConst3)
	}

	console.log(auxiliarConst);
	switch(caso){
		case 1:
			console.log(auxiliarConst+ " TAMBIEN ES VISIBLE EN EL SWITCH");
			break;
		case 2:
			const auxiliar_switch_2 = "AUXILIAR_SWITCH_2 SOLO ES ACCESIBLE EN EL BLOQUE DEL SWITCH";
			console.log(auxiliar_switch_2);
			break;
		case 3:
			const auxiliar_switch_3 = "AUXILIAR_SWITCH_3 SOLO ES ACCESIBLE EN EL BLOQUE DEL SWITCH";
			console.log(auxiliar_switch_3);
			break;
	}

}

function ejemplosComprobarConst3(){
	console.log("EJEMPLOS CON CONST 3");
	console.log("CASO 1");
	comprobarConst3(1);
	console.log("CASO 2");
	comprobarConst3(2);
	console.log("CASO 3");
	comprobarConst3(3);
}

ejemplosComprobarConst3();
