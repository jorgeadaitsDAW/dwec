<?php
require_once "configuracion.php";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT id,nombre,genero,director,duracion FROM peliculas";
$peliculas = $conexion->query($sql);