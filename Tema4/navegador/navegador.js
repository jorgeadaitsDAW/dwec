function abrirNuevaVentana(){
    let ventana = window.open("www.google.es");
}

let contadorSegundos = 0;
let idIntervalo = setInterval(function(){
    console.log("HAN PASADO YA:");
    contadorSegundos++;
    console.log(`${contadorSegundos} segundos`);
},1000)

let idTimeout = setTimeout(function(){
    console.log("PASADO UNOS 10 segundos paramos el contador");
    clearInterval(idIntervalo);
},10000);

