function filtrarPorNombreyDirector(){
    let inputNombre = document.getElementById("nombrePelicula");
    let inputDirector = document.getElementById("director");
    let nombrePelicula = inputNombre.value;
    let director = inputDirector.value;
    let peliculasFiltradas = realizarBusquedaNombreyDirector(nombrePelicula,director);
    mostrarPeliculasHTML(peliculasFiltradas);
}

function realizarBusquedaNombreyDirector(nombrePelicula,director){
    let peliculasFiltradas = peliculas.filter( pelicula => pelicula.contieneNombre(nombrePelicula) 
                                                                && pelicula.contieneDirector(director)
                                            );
    return peliculasFiltradas;
}

function resetearFiltros(){
    mostrarPeliculasHTML(peliculas);
}


function realizarPruebasBusquedaNombreyDirector(){
    console.log("Pruebas de Busqueda por Nombre y Director");
    let prueba1 = realizarBusquedaNombreyDirector("Star", "Abraham"); //Dolo devuelve una pelicula
    console.log("Prueba1: realizarBusquedaNombreyDirector('Star', 'Abraham')");
    if(prueba1.length === 1){
        console.log("Prueba1 Correcta");
    }else{
        console.log("Prueba1 Incorrecta")
    }
    let prueba2 =realizarBusquedaNombreyDirector("Wars", " George     Lucas  ");// Devuelve tres peliculas
    console.log("Prueba2: realizarBusquedaNombreyDirector(\"Wars\", \" George     Lucas  \")");
    if(prueba2.length === 3){
        console.log("Prueba2 Correcta");
    }else{
        console.log("Prueba2 Incorrecta")
    }
    let prueba3 = realizarBusquedaNombreyDirector("Jurasic Park",""); // Vacio
    console.log("Prueba3: realizarBusquedaNombreyDirector(\"Jurasic Park\",\"\") ");
    prueba3.length === 0?console.log("Prueba 3 correcta"):console.log("Prueba 3 incorrecta");
    let prueba4 = realizarBusquedaNombreyDirector("","George Lucas"); //Vacio
    console.log("Prueba4: realizarBusquedaNombreyDirector(\"\",\"George Lucas\")");
    prueba4.length === 0?console.log("Prueba 4 correcta"):console.log("Prueba 4 incorrecta");
}

realizarPruebasBusquedaNombreyDirector();