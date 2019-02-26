document.addEventListener("DOMContentLoaded",function(){
    $("button[data-accion='pruebaNormal']").click(ejecutarEjemploNormal);
    $("button[data-accion='pruebaGenerator']").click(ejecutarEjemploGenerator);
});

function ejecutarEjemploNormal(){
    let resultado = $("#resultadoNormal");
    resultado.append("<div>LA</div>");
    resultado.append("<div>EJECUCION</div>");
    resultado.append("<div>ES</div>");
    resultado.append("<div>NORMAL</div>");
}

function ejecutarEjemploGenerator(){
    let resultado = $("#resultadoGenerator");
    const objetoGenerator = funcionGenerator(); 
  
    resultado.append(objetoGenerator.next().value); 
    resultado.append(objetoGenerator.next().value); 
    resultado.append(objetoGenerator.next().value);
    resultado.append(objetoGenerator.next().value);
    resultado.append(objetoGenerator.next().value);
}

function * funcionGenerator() {
    yield '<div>LA</div>';
  
    yield  '<div>EJECUCION</div>';

    yield  '<div>ES</div>';

    yield  '<div>POR</div>';

    yield  '<div>GENERATORS</div>';
  }