document.addEventListener("DOMContentLoaded",function(){
    crearSelectUsuario("selectUsuario");
    crearSelectUsuario("selectUsuarioVotar");
    crearSelectAnimales("selectAnimalVotar");
    
    let selectUsuario = document.getElementById("selectUsuario");
    selectUsuario.addEventListener("change",obtenerAnimalesVotados);
    
    let selectAnimalVotar = document.getElementById("selectAnimalVotar");
    selectAnimalVotar.addEventListener("change",validarAnimal);
    
    let formularioVotar = document.getElementById("formularioVotar");
    formularioVotar.addEventListener("submit",votarAnimal);

    botonRecargar.addEventListener("click",obtenerAnimalesVotados);
})

function crearSelectUsuario(idUsuario){
    let select = document.getElementById(idUsuario); 
    for(usuario of listaUsuarios){
        let option = document.createElement("option");
        option.value = usuario.id;
        option.innerHTML = usuario.nombre;
        select.appendChild(option);
    }
}

function crearSelectAnimales(idAnimal){
    let select = document.getElementById(idAnimal); 
    for(animal of listaAnimales){
        let option = document.createElement("option");
        option.value = animal.id;
        option.innerHTML = animal.nombre;
        select.appendChild(option);
    }
}

function obtenerAnimalesVotados(event){
    let selector = document.getElementById("selectUsuario");
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

function validarAnimal(){
    let esCorrecto = true;
    let select = document.getElementById("selectAnimalVotar");
    let selectUsuarioVotar = document.getElementById("selectUsuarioVotar");
    let idAnimalVotar = select.value;
    let idUsuarioSeleccionado = selectUsuarioVotar.value;
    let usuarioAVotar = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
    let animalAVotar = listaAnimales.find( animal => animal.id === parseInt(idAnimalVotar));
    let haVotado = usuarioAVotar.votos.some( voto => voto.animal.id === parseInt(idAnimalVotar) );
    if(haVotado){
        alert(`EL USUARIO ${usuarioAVotar.nombre} YA HA VOTADO AL ANIMAL ${animalAVotar.nombre}`)
    }
    return esCorrecto;
}

function votarAnimal(event){
    event.preventDefault();
    let formulario = document.getElementById("formularioVotar");
    let esAnimalCorrecto = validarAnimal();
    if(esAnimalCorrecto){
        let selectUsuario = document.getElementById("selectUsuarioVotar");
        let selectAnimal = document.getElementById("selectAnimalVotar");
        let idUsuarioSeleccionado = selectUsuario.value;
        let idAnimalVotar = selectAnimal.value;
        let usuarioAVotar = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
        let animalAVotar = listaAnimales.find( animal => animal.id === parseInt(idAnimalVotar));
        let puntuacion = document.getElementById("puntuacion");
        let observaciones = document.getElementById("observaciones");
        crearVoto(usuarioAVotar,animalAVotar,puntuacion,observaciones);
        formulario.reset();
        obtenerAnimalesVotados();
    }
}