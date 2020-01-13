/////////////////////////////////////////////////////////
// Función crear objeto XMLHTTPRequest///////////////////
/////////////////////////////////////////////////////////

function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
                                     // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

/////////////////////////////////////////////////////////
// Función llamadaSincrona: carga el contenido de la url
// en el objeto que se le pasa como referencia,
// usando una petición AJAX de forma SINCRONA.
/////////////////////////////////////////////////////////
function llamadaSincrona(elementoDOM, url){
    if (miXHR){
        alert("Comenzamos la peticion AJAX");

        //Si existe el objeto miXHR
        miXHR.open('GET', url, false); //Abrimos la url, false=SINCRONA

        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST

        miXHR.send(null);

        //Escribimos la respuesta recibida de la petición AJAX en el objeto DIV

        elementoDOM.appendChild(document.createTextNode(miXHR.responseText));

        alert("Termino la peticion AJAX");
    }
}

function llamadaAsincrona(url){
    if (miXHR){
        alert("Comenzamos la peticion AJAX");
        document.getElementById('estado').innerHTML = "";
        document.getElementById('resultadoAsincrono').innerHTML = "";

        //Si existe el objeto miXHR
        miXHR.open('GET', url, true); //Abrimos la url, false=ASINCRONA

        miXHR.onreadystatechange = comprobarEstadoPeticion;

        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST

        miXHR.send(null);
    }
}

/////////////////////////////////////////////////////////
// Función comprobarEstadoPeticion: será llamada en cada cambio de estado de la petición.
// Cuando el estado de la petición(readyState) ==4 quiere decir que la petición ha terminado.
// Tendremos que comprobar cómo terminó(status): == 200 encontrado, == 404 no encontrado, etc.
// A partir de ese momento podremos acceder al resultado en responseText o responseXML
/////////////////////////////////////////////////////////
function comprobarEstadoPeticion(){
    switch(this.readyState){
// Evaluamos el estado de la petición AJAX
// Vamos mostrando el valor actual de readyState en cada llamada.
        case 0: document.getElementById('estado').innerHTML += "0 - Sin iniciar.<br/>";
            break;
        case 1: document.getElementById('estado').innerHTML += "1 - Cargando.<br/>";
            break;
        case 2: document.getElementById('estado').innerHTML += "2 - Cargado.<br/>";
            break;
        case 3: document.getElementById('estado').innerHTML += "3 - Interactivo.<br/>";
            break;
        case 4:
            document.getElementById('estado').innerHTML += "4 - Completado.";
            if (this.status == 200){
            // Si el servidor ha devuelto un OK
            // Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
                document.getElementById("resultadoAsincrono").appendChild(document.createTextNode(this.responseText));
                alert("Terminó la petición AJAX");
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            break;
    }
}

/////////////////////////////////////////////////////////
// Función llamadaAsincrona2: será llamada al realizar peticiones asíncronas.
// url => URL a dónde realizamos la petición
// tipo => GET o POST
// datos => datos que se enviarán por GET o POST. GET siempre sera null
// funcionCallback => funcion que se ejecutará despues de que termine el proceso asíncrono
/////////////////////////////////////////////////////////

function llamadaAsincrona2(url,tipo,datos,tipoRespuesta,funcionCallback){
    miXHR = new objetoXHR();
    if (miXHR){
        alert("Comenzamos la peticion AJAX");
        document.getElementById("spinner").style ="display:block";


        miXHR.open(tipo, url, true);

        miXHR.onreadystatechange = ejecutarFuncionAjax(tipoRespuesta,funcionCallback);

        if(tipo === "POST"){
            // En las peticiones POST tenemos que enviar en la cabecera el Content-Type
            //ya que los datos se envían formando parte de la cabecera.
            miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        miXHR.send(datos);
    }
}


function ejecutarFuncionAjax(tipoRespuesta,funcion){
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = "";
            switch(tipoRespuesta){
                case "XML":
                    respuesta = this.responseXML;
                    break;
                default :
                    respuesta = this.responseText;
                    break;
            }
            funcion(respuesta);

            alert("Termino la petición de AJAX");
            document.getElementById("spinner").style ="display:none";
        }
    }
}






