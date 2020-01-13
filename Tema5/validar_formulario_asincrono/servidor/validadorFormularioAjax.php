<?php
require_once "./funcionesValidacion.php";
sleep(3);// No es necesario, solo es para que dure un poco más.
$errores = array();
$errores["nombre"] = array();
$errores["edad"] = array();

if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["edad"])){
    $errores["edad"] = validarEdad((int)trim($_POST["edad"]));
}


echo json_encode($errores);