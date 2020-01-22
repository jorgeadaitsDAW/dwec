<?php
header('Content-Type: application/json');
require_once "validadorFormulario.php";
echo json_encode(validarNumeros());
?>