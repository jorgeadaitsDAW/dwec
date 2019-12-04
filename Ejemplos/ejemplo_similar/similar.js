document.addEventListener("DOMContentLoaded",function(){
   crearSelectAnimales("selectAnimales");

   let selectAnimales = document.getElementById("selectAnimales");
   selectAnimales.addEventListener("change",obtenerAnimalesSimilares);
  
});

function crearSelectAnimales(idSelectAnimal){
    let select = document.getElementById(idSelectAnimal); 
    for(animal of listaAnimales){
        let option = document.createElement("option");
        option.value = animal.id;
        option.innerHTML = animal.nombre;
        select.appendChild(option);
    }
}


function obtenerAnimalesSimilares(event){
    let selector = document.getElementById("selectAnimales");
    let idAnimalSeleccionado = selector.value;
    let ulAnimalesSimilares = document.getElementById("animales_similares");
    ulAnimalesSimilares.innerHTML = "";
    let spanNombreAnimal = document.getElementById("nombre_animal");
    spanNombreAnimal.innerHTML = "";
    if(idAnimalSeleccionado !== ""){
        let animalesMostrados = 0;
        let animalSeleccionado = listaAnimales.find( animal => animal.id === parseInt(idAnimalSeleccionado));
        spanNombreAnimal.innerHTML = `${animalSeleccionado.nombre} (${animalSeleccionado.especie}-${animalSeleccionado.raza})`;
        
        let animalesSimilares = listaAnimales
                                    .filter(animal => animal.especie === animalSeleccionado.especie)
                                    .filter(animal => animal.raza === animalSeleccionado.raza)
                                    .filter(animal => animal.id !== animalSeleccionado.id)

        animalesSimilares.forEach(function(animalSimilar){
            let liAnimal = document.createElement("li");
            liAnimal.innerHTML = `${animalSimilar.nombre} (${animalSimilar.especie}-${animalSimilar.raza})`;
            ulAnimalesSimilares.appendChild(liAnimal);
            animalesMostrados++;
        });
        if(animalesMostrados == 0){
            let liAnimal = document.createElement("li");
            liAnimal.innerHTML = "NO SE HAN ENCONTRADO ANIMALES SIMILARES";
            ulAnimalesSimilares.appendChild(liAnimal);
        }
    }
}