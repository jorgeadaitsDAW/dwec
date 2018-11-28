let directorGL = new Director('George Lucas');
let directorSS = new Director('Steven Spielbeg');
let directorCN = new Director('Chirstopher Nolan');
let directorJJA = new Director('JJ.Abraham');

let listaDirectores= [directorGL,directorSS,directorCN,directorJJA];

let peliculas = [];

let textoLargo = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
                 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'+
                 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
                 'It has survived not only five centuries, but also the leap into electronic typesetting, '+
                 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset '+
                 'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like'+
                 'Aldus PageMaker including versions of Lorem Ipsum.';

let peliculaSW = new Pelicula('Star Wars: El imperio Contrataca',directorGL,'Space Opera','imperio_contrataca.jpg',textoLargo);
let peliculaSW2 = new Pelicula('Star Wars: El retorno del Jedi',directorGL,'Space Opera','retorno_jedi.jpg');
let peliculaSW3 = new Pelicula('Star Wars: Una nueva esperanza',directorGL,'Space Opera','nueva_esperanza.jpg');

peliculas.push(peliculaSW);
peliculas.push(peliculaSW2);
peliculas.push(peliculaSW3);

directorGL.incluirPelicula(peliculaSW);
directorGL.incluirPelicula(peliculaSW2);
directorGL.incluirPelicula(peliculaSW3);

let peliculaJP = new Pelicula('Jurasic Park',directorSS,'Aventuras','jurasicPark.jpg',textoLargo);
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

let peliculaSWD = new Pelicula('Star Wars: El despertar de la fuerza',directorJJA,'Space Opera','despertar.png',textoLargo);
let peliculaST = new Pelicula('Star Trek',directorJJA,'Ciencia Ficción','StarTrek.jpg',textoLargo);

peliculas.push(peliculaSWD);
peliculas.push(peliculaST);

directorJJA.incluirPelicula(peliculaSWD);
directorJJA.incluirPelicula(peliculaST);
mostrarPeliculasHTML(peliculas);