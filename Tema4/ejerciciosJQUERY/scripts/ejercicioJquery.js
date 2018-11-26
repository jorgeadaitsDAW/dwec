/**
 * Created by Jorge on 21/11/2017.
 */

function limpiar(){
    $(".elementos div").empty();
    $(".elementos div").remove();
}

//Creamos los divs paso a paso
function crearDivs(numDivs){

    limpiar();

    for(let i = 0;i < numDivs; i++){
        $(".elementos").append("<div></div>");
    }

    let divs = $(".elementos div");
    for(let i=0;i< divs.length; i++){
        $(divs[i]).text("POS "+i);
        for(let j= 0;j <= i;j++) {
            $(divs[i]).append('<input />');

        }
        let hijos = $(divs[i]).children();
        for(let j= 0;j <= hijos.length;j++) {
            let hijo = $(hijos[j]);
            hijo.val(i+"."+j);
            hijo.attr("name","nodo"+i+j);
            if(hijo.next().length === 1 && hijo.prev().length === 1){
                hijo.css("background-color","blue");
            }else{
                hijo.css("background-color","yellow");
            }
        }
    }

}

function crearDivs2(numDivs){

    limpiar();
    for(let i = 0;i < numDivs; i++){
        $(".elementos").append("<div></div>");
        let ultimoDivCreado = $(".elementos div").last()
        ultimoDivCreado.text("POS "+i);
        for(let j= 0;j <= i;j++){
            ultimoDivCreado.append("<input />");
            let input =  $(".elementos input").last();
            input.val(i+"."+j);
            input.attr("name","nodo"+i+j);
            if(j == 0 || j == i){
                input.addClass("amarillo");
            }else{
                input.addClass("azul");
            }
        }
    }
}


//Separamos todas las funciones
function crearDivs3(numDivs){

    limpiar();
    crearSoloDivs(numDivs);
    indicarPosicionDivs();
    crearInputs();
    marcarInputs();
    colorearInputs();
}

function crearSoloDivs(numDivs){
    for(let i = 0;i < numDivs; i++) {
        $(".elementos").append("<div></div>");
    }
}

function indicarPosicionDivs(){
    let divs = $(".elementos div");
    for (let i = 0;i< divs.length;i++){
        $(divs[i]).text("POS "+i);
    }
}

function crearInputs(){
    let divs = $(".elementos div");
    for (let i = 0;i< divs.length;i++){
        for(let j= 0;j <= i;j++){
            $(divs[i]).append("<input />");
        }
    }
}

function marcarInputs(){
    let divs = $(".elementos div");
    for (let i = 0;i< divs.length;i++){
        let inputsDivs = $(divs[i]).children();
        for(let j= 0;j < inputsDivs.length;j++){
            $(inputsDivs[j]).val("POS:"+i+"."+j);
            $(inputsDivs[j]).attr("name","nodo"+i+j);
        }
    }
}

function colorearInputs(){
    let inputsDivs = $(".elementos div input");
    for(let j= 0;j < inputsDivs.length;j++){
        let hijo = $(inputsDivs[j]);
        if(hijo.next().length === 1 && hijo.prev().length === 1){
            hijo.css("background-color","blue");
        }else{
            hijo.css("background-color","yellow");
        }
    }
}


function crearDivs4(numDivs){
    limpiar();
    for(let i = 0;i < numDivs; i++){
        let div = $("<div></div>");
        div.text("POS i");
        $(".elementos").append(div);

        for(let j= 0;j <= i;j++){
            let input = $("<input />");
            input.val(i+"."+j);
            div.append(input);
            input.attr("name","nodo"+i+j);
            if(j == 0 || j == i){
                input.addClass("amarillo");
            }else{
                input.addClass("azul");
            }
        }
    }
}


function borrarInput(){
    let posPadre = $("#posPadre").val().trim();
    let posHijo = $("#posHijo").val().trim();

    $("#posPadre").removeClass("error");
    $("#posPadre").removeClass("error");

    $("#posHijo").removeClass("correcto");
    $("#posHijo").removeClass("correcto");

    if(posPadre !== "" && posHijo !== "") {
        let nodoPadre = $(".elementos div").eq(posPadre);
        if (nodoPadre.length > 0) {
            let nodoHijo = nodoPadre.find("input").eq(posHijo);
            if (nodoHijo.length > 0) {
                nodoHijo.remove();
                $("#posPadre").addClass("correcto");
                $("#posHijo").addClass("correcto");
            } else {
                $("#posHijo").addClass("error");
            }
        } else {
            $("#posPadre").addClass("error");
        }
    }else{
        $("#posPadre").addClass("error");
        $("#posHijo").addClass("error");
    }
}