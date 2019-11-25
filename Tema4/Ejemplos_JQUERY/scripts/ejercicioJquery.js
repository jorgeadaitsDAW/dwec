$(function(){
    $("#botonCrear").click(crearElementos);
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
            div.append(input);
        }
        $("#elementos").append(div);
    }
}