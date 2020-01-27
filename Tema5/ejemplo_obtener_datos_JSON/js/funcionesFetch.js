document.addEventListener("DOMContentLoaded",function(){
    let formularioAjaxMYSQL = document.getElementById("formularioMYSQL");
    formularioAjaxMYSQL.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaMYSQL();
    });

    let formularioAjaxPDO = document.getElementById("formularioPDO");
    formularioAjaxPDO.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaPDO();
    });

    let formularioBusqueda = document.getElementById("formularioBusqueda");
    formularioBusqueda.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaBusqueda();
    });

})


function realizarPeticionAsincronaMYSQL(){
    
}

function realizarPeticionAsincronaPDO(){
    
}


function escribirResultado(respuesta){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados= respuesta;
    let salida="<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>DURACION</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.genero+"</td><td>"+objeto.director+"</td><td>"+
        objeto.duracion +"</td></tr>";
    }

    salida+="</table>";

    divResultado.innerHTML=salida;

}

function realizarPeticionAsincronaBusqueda(){
    let form = new FormData();
    $("#spinner").css("display","block");
    form.append("nombre",$("#nombre").val());
    fetch("servidor/datosBusqueda.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then(escribirResultado)
    .catch(function(error){
        console.error(error);
        alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");    
    }).finally(function(){
        $("#spinner").css("display","none");
    })
    
    ;
}

function gestionarErrores(response){
    if (!response.ok) {
        throw Error("SE HA PRODUCIDO UN ERROR AL REALIZAR LA PETICIÓN FETCH:"+response.statusText);
    }
    return response;
}

