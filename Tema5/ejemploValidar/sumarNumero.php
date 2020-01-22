<?php
header('Content-Type: application/json');
require_once "validadorFormulario.php";
$errores = validarNumeros();
$hayErrores = false;
foreach($errores as $campo => $erroresCampo){
    if(count($erroresCampo)> 0){
        $hayErrores = true;
        break;
    }
}
if(!$hayErrores){
    echo json_encode($_POST["numero1"] + $_POST["numero2"]);
}else{
    echo "HAY ERRORES EN EL FORMULARIO";
}
?>