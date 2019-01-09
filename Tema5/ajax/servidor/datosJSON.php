<?php
// retrasamos 2 segundos la ejecución de esta página PHP.
sleep(2);
// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$listadoPeliculas = array();

$pelicula1= [
        "nombre" => "Star Wars: Episodio VIII - Los últimos Jedi",
        "genero" => "SPACE OPERA",
        "director" => "Rian JOHNSON",
        "duracion" => "152 min"
    ];

$pelicula2= [
    "nombre" => "BABY DRIVER",
    "genero" => "Acción",
    "director" => "Edgar Wright",
    "duracion" => "113 min"
];

$pelicula3= [
    "nombre" => "Inception(Origen)",
    "genero" => "SUSPENSE",
    "director" => "Christopher Nolan",
    "duracion" => "148 min"
];

$pelicula4= [
    "nombre" => "kingsman",
    "genero" => "ACCIÓN-COMEDIA",
    "director" => "Matthew Vaughn",
    "duracion" => "129 min"
];

$pelicula5= [
    "nombre" => "REC",
    "genero" => "Terror",
    "director" => "Paco Plaza",
    "duracion" => "80 min"
];

$listadoPeliculas[] = $pelicula1;
$listadoPeliculas[] = $pelicula2;
$listadoPeliculas[] = $pelicula3;
$listadoPeliculas[] = $pelicula4;
$listadoPeliculas[] = $pelicula5;

echo json_encode($listadoPeliculas);