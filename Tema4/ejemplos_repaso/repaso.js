let animal1 = {nombre:"Thor",especie:"Perro",raza:"caniche",vida:5};
let animal2 = {nombre:"Capitan America",especie:"Gato",raza:"siames",vida:8};
let animal3 = {nombre:"Viuda Negra",especie:"Perro",raza:"bulldog",vida:15};
let animal4 = {nombre:"Hulk",especie:"Perro",raza:"pastor aleman",vida:12};
let animal5 = {nombre:"Ojo de Halcon",especie:"Perro",raza:"san bernardo",vida:9};
let animal6 = {nombre:"Loky",especie:"Perro",raza:"salchicha",vida:4};
let animal7 = {nombre:"Iron Man",especie:"Conejo",raza:"pascuas",vida:9};
let animal8 = {nombre:"WarMachine",especie:"Perro",raza:"raton de praga",vida:20};
let animal9 = {nombre:"Vision",especie:"Perro",raza:"pastor belga",vida:12};
let animal10 = {nombre:"Mercurio",especie:"Pajaro",raza:"loro",vida:15};

let listadoAnimales = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];

document.addEventListener("DOMContentLoaded",function(){

    let boton = document.getElementById("mostrarAnimales");
    boton.addEventListener("click",mostrarAnimales);

    let selectEspecie = document.getElementById("esp");
    selectEspecie.addEventListener("change",mostrarAnimalesFiltrados);

    let boton2 = document.getElementById("botonMostrarOrdenados");
    boton2.addEventListener("click",mostrarAnimalesOrdenados);

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup",validarNombre);
})


function mostrarAnimales(){
    /*let divListadoAnimales = document.getElementById("listadoAnimales");
    //Borro el contenido de el div ListadoAnimales
    divListadoAnimales.innerHTML = "";
    let ulAnimales = document.createElement("ul");
    for(let animal of listadoAnimales){
        let liAnimal = document.createElement("li");
        liAnimal.innerHTML = animal.nombre;
        ulAnimales.appendChild(liAnimal);
    }  
    divListadoAnimales.appendChild(ulAnimales);*/
    mostrarAnimalesRefactorizados("listadoAnimales",listadoAnimales);
}

function mostrarAnimalesRefactorizados(idDivMostrar,lista){
    let divListadoAnimales = document.getElementById(idDivMostrar);
    //Borro el contenido de el div ListadoAnimales
    divListadoAnimales.innerHTML = "";
    let ulAnimales = document.createElement("ul");
    for(let animal of lista){
        let liAnimal = document.createElement("li");
        liAnimal.innerHTML = animal.nombre;
        ulAnimales.appendChild(liAnimal);
    }  
    divListadoAnimales.appendChild(ulAnimales);
}

function mostrarAnimalesFiltrados(){
    let selectEspecie = document.getElementById("esp");
    let especieSeleccionada = selectEspecie.value;
    let especiesFiltradas = filtrarPorEspecies(especieSeleccionada);repaso
    mostrarAnimalesRefactorizados("listadoAnimalesFiltrados",especiesFiltradas);

}

function filtrarPorEspecies(especie){
    return listadoAnimales.filter( x => x.especie.toLocaleLowerCase() === especie.toLocaleLowerCase());
}

function mostrarAnimalesOrdenados(){
    listadoAnimales.sort( (x,y) => - x.nombre.localeCompare(y.nombre) );
    mostrarAnimalesRefactorizados("listadoAnimalesOrdenados",listadoAnimales);
}


function validarNombre(){
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");


    //Comprobamos que usa solo letras
    if(!/^[a-zA-Z]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS";
        listaErrores.appendChild(divError);
    }

    //Comprobamos que solo usa mayusculas
    if(!/^[A-Z]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS MAYUSCULAS";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 5){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "AL MENOS DEBE SER DE 5 LETRAS";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputNombre.classList.add("inputCorrecto");
    }else{
        inputNombre.classList.add("inputErroneo");
    }


}