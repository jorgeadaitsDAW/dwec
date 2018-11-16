let directorGL = new Director('George Lucas');
let directorSS = new Director('Steven Spielbeg');
let directorCN = new Director('Chirstopher Nolan');
let directorJJA = new Director('JJ.Abraham');

let listaDirectores= [directorGL,directorSS,directorCN,directorJJA];

let peliculas = [];

let peliculaSW = new Pelicula('Star Wars: El imperio Contrataca',directorGL,'Space Opera','imperio_contrataca.jpg');
let peliculaSW2 = new Pelicula('Star Wars: El retorno del Jedi',directorGL,'Space Opera','retorno_jedi.jpg');
let peliculaSW3 = new Pelicula('Star Wars: Una nueva esperanza',directorGL,'Space Opera','nueva_esperanza.jpg');

peliculas.push(peliculaSW);
peliculas.push(peliculaSW2);
peliculas.push(peliculaSW3);

directorGL.incluirPelicula(peliculaSW);
directorGL.incluirPelicula(peliculaSW2);
directorGL.incluirPelicula(peliculaSW3);

let peliculaJP = new Pelicula('Jurasic Park',directorSS,'Aventuras','jurasicPark.jpg');
let peliculaIJ = new Pelicula('Indiana Jones y el arca perdida',directorSS,'Aventuras','indiana_jones.jpg');

peliculas.push(peliculaJP);
peliculas.push(peliculaIJ);


directorSS.incluirPelicula(peliculaJP);
directorSS.incluirPelicula(peliculaIJ);


let peliculaO = new Pelicula('Origen',directorCN,'Ciencia Ficcion','origen.jpg');
let peliculaI = new Pelicula('Interstellar',directorCN,'Ciencia Ficción','interstellar.jpg');
let peliculaB = new Pelicula('Batman: El caballero oscuro',directorCN,'Aventuras', 'batman.jpg');

peliculas.push(peliculaO);
peliculas.push(peliculaI);
peliculas.push(peliculaB);

directorCN.incluirPelicula(peliculaO);
directorCN.incluirPelicula(peliculaI);
directorCN.incluirPelicula(peliculaB);

let peliculaSWD = new Pelicula('Star Wars: El despertar de la fuerza',directorJJA,'Space Opera','despertar.png');
let peliculaST = new Pelicula('Star Trek',directorJJA,'Ciencia Ficción','StarTrek.jpg');

peliculas.push(peliculaSWD);
peliculas.push(peliculaST);

directorJJA.incluirPelicula(peliculaSWD);
directorJJA.incluirPelicula(peliculaST);
mostrarPeliculasHTML(peliculas);