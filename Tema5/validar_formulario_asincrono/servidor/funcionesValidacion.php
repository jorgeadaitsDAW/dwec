<?php

function validarNombre($nombre){
    $errores = array();
    if($nombre !== "") {

        if (strlen($nombre) < 4) {
            $errores[] = "El nombre debe tener al menos 4 caracteres";
        }
        if (!preg_match("/^[A-Za-z]*$/",$nombre)) {
            $errores[] = "EL nombre sólo puede contener letras";
        }
    }else{
        $errores[] = "EL nombre esta no puede estar vacío";
    }
    return $errores;
}

function validarEdad($edad){
    $errores = array();
    if ($edad < 18) {
        $errores[] = "Debe ser mayor o igual a 18 años";
    }
    return $errores;
}