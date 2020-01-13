document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax = document.getElementById("formulario");
    formularioAjax.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincrona();
    });
})

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

function comprobarEstadoPeticion(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                let divRespuesta = document.getElementById("respuesta");
                divRespuesta.innerHTML = this.responseText;
                alert("Terminó la petición AJAX");
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            break;
    }
}

function realizarPeticionAsincrona(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    alert("SE CREA EL OBJETO XHR");
    miXHR = new objetoXHR();

    alert("SE CREA LA PETICIÓN ASÍNCRONA")
    miXHR.open("POST", "servidor/datosPOST.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    
    let datos = "nombre="+nombre+"&apellidos="+apellidos+"&edad="+edad;
    miXHR.send(datos);

}




