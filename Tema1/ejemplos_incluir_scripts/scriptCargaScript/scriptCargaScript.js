//Creamos la funcion que carga scripts por código javascript;
function loadScript(ubicacionDelArchivo){

    //Crea el elemento con la etiqueta script en el HTML
    let script = document.createElement("script");

    //Indicamos que el atributo "type" de la etiqueta script tiene el valor "text/javascript"
    script.type = "text/javascript";

    //Indicamos que el atributo "url" de la etiqueta script tiene el valor de la ubicación del archivo a cargar
    script.src = ubicacionDelArchivo;

    //Añadimos la etiqueta script con los atributos añadidos anteriormente a la etiqueta HEAD del HTML
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript("scriptPrueba1.js");
loadScript("scriptPrueba2.js");