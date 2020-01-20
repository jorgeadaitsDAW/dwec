function funcionAjaxSincrona(){
    // para crear un objeto XHR lo podremos hacer con la siguiente llamada.
    miXHR = new objetoXHR();

    // Cargamos en el objeto con ID resultados el contenido
    // del fichero datos.txt empleando una petición AJAX.

    llamadaSincrona(document.getElementById("resultadoSincrono"),"servidor/datos.php");
}


function funcionAjaxAsincrona(){
    // para crear un objeto XHR lo podremos hacer con la siguiente llamada.
    miXHR = new objetoXHR();

    // Cargamos en el objeto con ID resultados el contenido
    // del fichero datos.txt empleando una petición AJAX.

    llamadaAsincrona("servidor/datos.php");
}



function escribirResultado(identificadorElemento){
    return function(textoMostrar){
        document.getElementById(identificadorElemento).innerHTML = "";
        document.getElementById(identificadorElemento).appendChild(document.createTextNode(textoMostrar));
    }
}

function funcionAjaxAsincronaGET(){
    llamadaAsincrona2("servidor/datosGET.php?nombre=pepito&apellido=flores","GET",null,"",escribirResultado("resultadoAsincronoGET"));
}


function funcionAjaxAsincronaPOST(){
    var datos = "nombre=Juanito&apellido=LOPEZ";
    llamadaAsincrona2("servidor/datosPOST.php","POST",datos,"",escribirResultado("resultadoAsincronoPOST"));
}

function funcionAjaxAsincronaXML(){
    llamadaAsincrona2("servidor/datosXML.php","GET",null,"XML",tratarResultadoXML);
}


function tratarResultadoXML(textoXMLRespuesta){
    let  datos=textoXMLRespuesta;


    // Tenemos que recorrer el fichero XML empleando los métodos del DOM
    let peliculas = datos.documentElement.getElementsByTagName("PELICULA");

    // En la variable salida compondremos el código HTML de la tabla a imprimir.
    let salida="<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>DURACION</th></tr>";

    // Hacemos un bucle para recorrer todos los elementos CD.
    for (let i=0;i<peliculas.length;i++){
        salida+="<tr>";

        let nombre =peliculas[i].getElementsByTagName("NOMBRE");
        salida+="<td>" + nombre[0].firstChild.nodeValue + "</td>";

        let genero =peliculas[i].getElementsByTagName("GENERO");
        salida+="<td>" + genero[0].firstChild.nodeValue + "</td>";

        let director =peliculas[i].getElementsByTagName("DIRECTOR");
        salida+="<td>" + director[0].firstChild.nodeValue + "</td>";

        let duracion =peliculas[i].getElementsByTagName("DURACION");
        salida+="<td>" + duracion[0].firstChild.nodeValue + "</td>";

    // Cerramos la fila.
        salida+="</tr>";
    }

    // Cuando ya no hay más peliculas cerramos la tabla.
    salida+="</table>";

    // Imprimimos la tabla dentro del contenedor resultados.
    document.getElementById("resultadoAsincronoXML").innerHTML=salida;
}


function funcionAjaxAsincronaJSON(){
    llamadaAsincrona2("servidor/datosJSON.php","GET",null,"JSON",tratarResultadoJSON);
}

function tratarResultadoJSON(respuesta){
    var resultados= JSON.parse(respuesta)
    let salida="<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>DURACION</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.genero+"</td><td>"+objeto.director+"</td><td>"+
        objeto.duracion +"</td></tr>";
    }

    salida+="</table>";

    document.getElementById("resultadoAsincronoJSON").innerHTML=salida;

}
