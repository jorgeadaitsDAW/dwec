$(function(){
    $("#botonCrear").click(crearElementos);
    $("#botonColorear").click(colorear);
    $("#botonBorrar").click(borrarInput);
});

function crearElementos(){
    $("#elementos").empty();
    let numeroDivsACrear = $("#numDivs").val();
    for(let i = 1;i<=numeroDivsACrear;i++){
        let div = $("<div></div");
        let h1 = $(`<h1>DIV Nº${i}</h1>`);
        div.append(h1);
        for(let j = 1;j<=i;j++){
            let input = $("<input />");
            input.attr("type","text");
            input.val(`${i}.${j}`);
            input.attr("id",`${i}_${j}`);
            let tipo = "";
            if(j % 2 === 0){
               tipo = "par";     
            }else{
                tipo = "impar";
            }
            input.attr("data-tipo",tipo);
            div.append(input);
        }
        $("#elementos").append(div);
    }
}


function colorear(){
    $("[data-tipo='impar']").addClass("inputImpar");
    $("[data-tipo='par']").addClass("inputPar");
}

function borrarInput(){
    let posi = $("#posi").val();
    let posj = $("#posj").val();
    let elementoABorrar = $(`[id='${posi}_${posj}']`);
    if(elementoABorrar.length > 0){
        elementoABorrar.remove();
    }else{
        alert("NO EXISTE ESE ELEMENTO");
    }
}

