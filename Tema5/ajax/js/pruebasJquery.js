function funcionAjaxSincrona(){

    $.ajax({
        url: "servidor/datos.php",
        async: false,
        beforeSend:function(){alert("EMPIEZA LA PETICIÓN AJAX")}
    })  .done( escribirResultado("resultadoSincrono"))
        .always(function(){alert("TERMINO LA PETICIÓN AJAX")});

}

function funcionAjaxAsincrona(){

    $.ajax({
        url: "servidor/datos.php",
        beforeSend:function(){alert("EMPIEZA LA PETICIÓN AJAX")}
    })  .done( escribirResultado("resultadoAsincrono"))
        .always(function(){alert("TERMINO LA PETICIÓN AJAX")});

}

function funcionAjaxAsincronaLoad(){
    $("#resultadoAsincronoLoad").load("servidor/datos.php");
}

function funcionAjaxAsincronaError(){
    $.ajax({
        url: "servidor/datosError.php",
        beforeSend:function(){alert("EMPIEZA LA PETICIÓN AJAX")}
    })  .done( escribirResultado("resultadoAsincronoError"))
        .fail(function(){{ $("#resultadoAsincronoError").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");}})
        .always(function(){alert("TERMINO LA PETICIÓN AJAX")});
}

function escribirResultado(identificadorElemento){
    return function(textoMostrar){
        $("#"+identificadorElemento).html(textoMostrar);
    }
}

function funcionAjaxAsincronaGET(){
    $.get("servidor/datosGET.php",
        {nombre:"PEPE",apellido:"FLORES"},
        escribirResultado("resultadoAsincronoGET"),
        "TEXT"
    ).always(function(){alert("TERMINO LA PETICIÓN AJAX")})
    ;
}

function funcionAjaxAsincronaPOST(){
    $.post("servidor/datosPOST.php",
        {nombre:"PEPE",apellido:"FLORES"},
        escribirResultado("resultadoAsincronoPOST"),
        "TEXT"
    ).always(function(){alert("TERMINO LA PETICIÓN AJAX")})
    ;
}

function funcionAjaxAsincronaXML(){
    realizarPeticion("servidor/datosXML.php","GET",null,"XML",tratarResultadoXML);
}

function funcionAjaxAsincronaJSON(){
    realizarPeticion("servidor/datosJSON.php","GET",null,"JSON",tratarResultadoJSON);
}

function realizarPeticion(url,tipo,datos,tipoRespuesta,funcionCallback){
    $.ajax({
        url: url,
        method: tipo,
        data: datos,
        type:tipoRespuesta,
        beforeSend:prepararLlamda
    })  .done(funcionCallback)
        .always(terminarLlamada);
}

function prepararLlamda(){
    alert("REALIZANDO PETICIÓN AJAX JQUERY");
    $("#spinner").show();
}

function terminarLlamada(){
    alert("HA TERMINADO LA PETICIÓN AJAX JQUERY");
    $("#spinner").hide();
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

function tratarResultadoJSON(respuesta){
    var resultados= respuesta;
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