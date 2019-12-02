document.addEventListener("DOMContentLoaded",function(){
    crearSelectUsuario();
    let selectUsuario = document.getElementById("selectUsuario");
    selectUsuario.addEventListener("change",obtenerAnimalesVotados);
})

function crearSelectUsuario(){
    let select = document.getElementById("selectUsuario"); 
    for(usuario of listaUsuarios){
        let option = document.createElement("option");
        option.value = usuario.id;
        option.innerHTML = usuario.nombre;
        select.appendChild(option);
    }
}

function obtenerAnimalesVotados(event){
    let selector = event.target;
    let idUsuarioSeleccionado = selector.value;
    let ulAnimalesVotados = document.getElementById("animales_votados");
    ulAnimalesVotados.innerHTML = "";
    let spanNombreUsuario = document.getElementById("nombre_usuario");
    spanNombreUsuario.innerHTML = "";
    if(idUsuarioSeleccionado !== ""){
        let animalesVotados = [];
        let persona = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
        spanNombreUsuario.innerHTML = persona.nombre;
        persona.votos.forEach( voto => animalesVotados.push(voto.animal)); 
        for(let animalVotado of animalesVotados){
            let liAnimal = document.createElement("li");
            liAnimal.innerHTML = animalVotado.nombre;
            ulAnimalesVotados.appendChild(liAnimal);
        }
    }
}