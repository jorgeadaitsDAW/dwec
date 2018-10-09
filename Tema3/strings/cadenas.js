function pruebaCharAt(){
    //Devuelve el carácter especificado por la posición que se indica entre paréntesis.
    let cadena = "Prueba";
    console.log("pruebaCharAt: " +cadena.charAt(2));
}


function pruebaCharCodeAt(){
    //Devuelve el Unicode del carácter especificado por la posición que se indica entre paréntesis
    let cadena = "Prueba";
    console.log("pruebaCharCodeAt: " +cadena.charCodeAt(2));
}

function pruebaConcat(){
    //Une una o más cadenas y devuelve el resultado de esa unión.
    let cadena1 = "Prueba";
    let cadena2 = "Prueba2";
    let cadena3 = "Prueba2";
    let cadena4 = "Prueba4";
    console.log("pruebaConcat: "+cadena1.concat(" ",cadena2," ",cadena3," ",cadena4));
}

function pruebaEndsWith(){
    //comprueba si el String termina con la cadena indicada.
    // SI no se indica el tamaño, es el tamaño del string
    let cadena = "Prueba";

    console.log("pruebaEndsWith1: "+cadena.endsWith("ba"));
    console.log("pruebaEndsWith2: "+cadena.endsWith("uba"));
    console.log("pruebaEndsWith3: "+cadena.endsWith("ru",3));//Se comprueba el final de cadena con Pru
    console.log("pruebaEndsWith4: "+cadena.endsWith("ba",3)); //Se comprueba el final de cadena con Pru
}

function pruebaFromCharCode(){
    //Convierte valores Unicode a caracteres
    let cadena = "Prueba"
    console.log("pruebaFromCharCode: " +String.fromCharCode(cadena.charCodeAt(2)));
}

function pruebaIncludes(){
    //Comprueba si la cadena a buscar está en el String.
    // Si se incluye el valor aPartirDeLaPosicion, empieza a buscar desde esa posición, en vez desde el principio.
    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE PARA APRENDER";
    console.log("pruebaIncludes1: " +cadena.includes("PRUEBA"));
    console.log("pruebaIncludes2: " +cadena.includes("PRUEBA",25));
}

function pruebaIndexOf(){
    //Devuelve la posición de la primera ocurrencia del carácter buscado en la cadena.
    // Si se incluye el valor aPartirDeLaPosicion, empieza a buscar desde esa posición, en vez desde el principio.
    // Si no se encuentra, devuelve -1.

    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE ESTA PRUEBA PARA APRENDER";
    console.log("pruebaIndexOf1: " +cadena.indexOf("PRUEBA"));
    console.log("pruebaIndexOf2: " +cadena.indexOf("PRUEBA",25));
    console.log("pruebaIndexOf3: " +cadena.indexOf("PRUEBA",40));
}

function pruebaLastIndexOf(){
    //Devuelve la posición de la íltima ocurrencia del car�cter buscado en la cadena.
    // Si se incluye el valor aPartirDeLaPosicion, empieza a buscar desde esa posición, en vez desde el final.
    // Si no se encuentra, devuelve -1.


    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE PARA APRENDER";
    console.log("pruebaLastIndexOf1: " +cadena.lastIndexOf("PRUEBA"));
    console.log("pruebaLastIndexOf2: " +cadena.lastIndexOf("PRUEBA",25));
    console.log("pruebaLastIndexOf2: " +cadena.lastIndexOf("PRUEBA",5));
}

function pruebaLocalCompare(){
    //Compara dos cadenas en base al lenguaje del navegador.
    // Devuelve -1, si es menor, 1 si es mayor y 0 si es igual.

    let cadena1 = "PRUEBA";
    let cadena2 = "PRuEBA";
    console.log("pruebaLocalCompare1: "+cadena1.localeCompare(cadena2));

    let cadena3 = "PRUEBA";
    let cadena4 = "PRUEBA";
    console.log("pruebaLocalCompare2: "+cadena3.localeCompare(cadena4));

    let cadena5 = "prueba";
    let cadena6 = "PRUEBA";
    console.log("pruebaLocalCompare3: "+cadena5.localeCompare(cadena6));

}


function pruebaExpresionesRegulares(){
    //Busca una coincidencia entre una expresión regular y una cadena y devuelve las coincidencias o null
    // si no ha encontrado nada.


        let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE PARA APRENDER";
    console.log("pruebaExpresionesRegulares1: " +cadena.match(/[a-z]+/));
    console.log("pruebaExpresionesRegulares2: " +cadena.match(/[A-Z]+/));
    console.log("pruebaExpresionesRegulares3: " +cadena.match(/[0-9]+/));
    console.log("pruebaExpresionesRegulares4: " +cadena.match(/P+[A-Z]+/));
    console.log("pruebaExpresionesRegulares4: " +cadena.match(/[A-Z\s]+/));
}

function pruebaRepeat(){
    //Devuelve un string, repetido el número de veces indicado

    let cadena = "PRUEBA"
    console.log("pruebaRepeat1: " +cadena.repeat(3));
    console.log("pruebaRepeat2: " +cadena.repeat(5));
}

function pruebaReplace(){
    //Busca una subcadena en la cadena y la reemplaza por la nueva cadena especificada.
    // Pueden usarse expresiones regulares.

    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE ESTA PRUEBA PARA APRENDER";
    console.log("pruebaReplace1: " +cadena.replace("PRUEBA","PRUEBAREPLACE"));
    console.log("pruebaRepleace2: " +cadena.replace(/PRUEBA/,"PRUEBAREPLACE"));
    console.log("pruebaRepleace2: " +cadena.replace(/PRUEBA/g,"PRUEBAREPLACE"));
}

function pruebaSearch(){
    //Busca una subcadena en la cadena y devuelve la posición dónde se encontró.
    // La diferencia con indexOf, es que puedes usar una expresión Regular.

    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE ESTA PRUEBA PARA APRENDER";
    console.log("pruebaSearch1: " +cadena.search("PRUEBA"));
    console.log("pruebaSearch2: " +cadena.search(/PRUEBA+[\s]+/));

}

function pruebaSlice(){
    //Extrae una parte de la cadena y devuelve una nueva cadena.

    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE ESTA PRUEBA PARA APRENDER";
    console.log("pruebaSlice1: " +cadena.slice(0,18));
    console.log("pruebaSlice2: " +cadena.slice(19));

}

function pruebaSplit(){
    //Divide una cadena en un array de subcadenas.

    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE ESTA PRUEBA PARA APRENDER";
    console.log("pruebaSplit1: ");
    console.log(cadena.split(" "));
    console.log("pruebaSplit2: ")
    console.log(cadena.split(" ",2));
}

function pruebaStartsWith(){
    //comprueba si el String empieza con la cadena indicada, a partir de una posici�n.
    // Si no se indica la posici�n, se considera la posici�n 0.

    let cadena = "Prueba";

    console.log("pruebaEndsWith1: "+cadena.startsWith("P"));
    console.log("pruebaEndsWith2: "+cadena.startsWith("r"));
    console.log("pruebaEndsWith3: "+cadena.startsWith("r",1));
    console.log("pruebaEndsWith4: "+cadena.startsWith("P",1));
}

function pruebaSubstr(){
    //Extrae los caracteres de una cadena, comenzando en una determinada posici�n y con el n�mero de caracteres indicado.

    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE ESTA PRUEBA PARA APRENDER";
    console.log("pruebaSubstr1: "+cadena.substr(0,4));
    console.log("pruebaSubstr2: "+cadena.substr(12,6));
    console.log("pruebaSubstr3: "+cadena.substr(20));
}

function pruebaSubstring(){
    //Extrae los caracteres de una cadena entre dos �ndices especificados.

    let cadena = "ESTO ES UNA PRUEBA. DEBE USARSE ESTA PRUEBA PARA APRENDER";
    console.log("pruebaSubstring1: "+cadena.substring(0,4));
    console.log("pruebaSubstring2: "+cadena.substring(12,18));
    console.log("pruebaSubstring3: "+cadena.substring(20));
}

function pruebaCase(){

    let cadena1 = "PRUEBA";
    let cadena2 = "prueba";

    console.log("pruebaLowerCase:"+cadena1.toLowerCase());
    console.log("pruebaLocaleLowerCase:"+cadena1.toLocaleLowerCase());
    console.log("pruebaUpperCase:"+cadena2.toUpperCase());
    console.log("pruebaLocaleUpperCase:"+cadena2.toLocaleUpperCase());

}

function pruebaTrim(){
    let cadena = "       PRUEBA PRUEBA PRUEBA   ";
    console.log("pruebaTrim:"+cadena.trim());
}



function funcionesCadenas(){
    console.clear();
    pruebaCharAt();
    pruebaCharCodeAt()
    pruebaConcat();
    pruebaEndsWith();
    pruebaFromCharCode();
    pruebaIncludes();
    pruebaIndexOf();
    pruebaLastIndexOf();
    pruebaLocalCompare();
    pruebaExpresionesRegulares();
    pruebaRepeat();
    pruebaReplace();
    pruebaSearch();
    pruebaSlice();
    pruebaSplit();
    pruebaStartsWith();
    pruebaSubstr();
    pruebaSubstring();
    pruebaCase();
    pruebaTrim();
}
