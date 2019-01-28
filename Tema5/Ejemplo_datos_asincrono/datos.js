function obtenerDatosPagina(){
    event.preventDefault();

    let enlace = $(event.target);
    let valor = parseInt(enlace.text());

    $(event.target).addClass("active");
    axios.get('/dameChusqers?page='+valor)
        .then(function(response){
            $("#listado").html(response.data);
            asociarEventoAsincrono();
        }).catch(function (error) {
        console.log(error);
    });
}

function obtenerDatosPaginaJSON(){
    event.preventDefault();

    let enlace = $(event.target);
    let valor = parseInt(enlace.text());

    $(event.target).addClass("active");
    axios.get('/dameChusqersJSON?page='+valor)
        .then(function(response){
            $("#listado").html(response.data);
            asociarEventoAsincrono();
        }).catch(function (error) {
            console.log(error);
        });
}

function obtenerDatosPaginaJSON2(){
    event.preventDefault();

    let enlace = $(event.target);
    let valor = parseInt(enlace.text());

    $(event.target).addClass("active");
    axios.get('/dameChusqersJSON2?page='+valor)
        .then(function(response){
            let paginacion = $(".pagination").parent();
            $("#listado").empty();
            for(let data of response.data.data){
                $("#listado").append(
                '<div class="small-12 column">'
                +'<div class="card"><p class="chusqer-content">'
                + data.content
                +'</p><div class="card-divider"></div>'
                +'<div class="card-section"></div></div>'
                +'</div>');

            }
            $("#listado").append(paginacion);
            asociarEventoAsincrono();
        }).catch(function (error) {
            console.log(error);
        });
}

function asociarEventoAsincrono(){
    $(".pagination > li > a").on("click",obtenerDatosPagina);
}

$(function(){
    asociarEventoAsincrono();
});
