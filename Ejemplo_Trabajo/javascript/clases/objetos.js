let directorGL = new Director("George Lucas");
let directorSS = new Director("Steven Spielbeg");
let directorCN = new Director("Chirstopher Nolan");
let directorJJA = new Director("JJ.Abraham");

let listaDirectores= [directorGL,directorSS,directorCN,directorJJA];

let peliculas = []

let peliculaSW = new Pelicula("Star Wars: El imperio Contrataca",directorGL,"Space Opera");
let peliculaSW2 = new Pelicula("Star Wars: El retorno del Jedi",directorGL,"Space Opera");
let peliculaSW3 = new Pelicula("Star Wars: Una nueva esperanza",directorGL,"Space Opera");

peliculas.push(peliculaSW);
peliculas.push(peliculaSW2);
peliculas.push(peliculaSW3);

directorGL.incluirPelicula(peliculaSW);
directorGL.incluirPelicula(peliculaSW2);
directorGL.incluirPelicula(peliculaSW3);

let peliculaJP = new Pelicula("Jurasic Park",directorSS,"Aventuras");
let peliculaIJ = new Pelicula("Indiana Jone sy el arca perdida",directorSS,"Aventuras");

peliculas.push(peliculaJP);
peliculas.push(peliculaIJ);


directorSS.incluirPelicula(peliculaJP);
directorSS.incluirPelicula(peliculaIJ);


let peliculaO = new Pelicula("Origen",directorCN,"Ciencia Ficcion");
let peliculaI = new Pelicula("Intellestellar",directorCN,"Ciencia Ficción");
let peliculaB = new Pelicula("Batman: El caballero oscuro",directorCN,"Aventuras");

peliculas.push(peliculaO);
peliculas.push(peliculaI);
peliculas.push(peliculaB);

directorCN.incluirPelicula(peliculaO);
directorCN.incluirPelicula(peliculaI);
directorCN.incluirPelicula(peliculaB);

let peliculaSWD = new Pelicula("Star Wars: El despertar de la fuerza",directorJJA,"Space Opera");
let peliculaST = new Pelicula("Stra Trek",directorJJA,"Ciencia Ficción");

peliculas.push(peliculaSWD);
peliculas.push(peliculaST);

directorJJA.incluirPelicula(peliculaSWD);
directorJJA.incluirPelicula(peliculaST);
mostrarPeliculasHTML(peliculas);