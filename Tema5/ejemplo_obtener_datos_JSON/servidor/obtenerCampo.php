<?php
sleep(2);
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');


$texto = "<div>";

switch($_POST["tipoCampo"]){
    case "input":
        $texto .= "<label for='prueba'>CAMPO PRUEBA</label>";
        $texto .="<input type='text' placeholder='Nombre...' id='prueba' name='prueba' value='' />";
        break;
    case "checkbox":
        $texto .="<input type='checkbox' id='prueba' name='prueba' value='OK' />";
        $texto .= "<label for='prueba'>¿CAMPO PRUEBA?</label>";    
        break;
    case "select":
        $texto .= "<label for='prueba'>SELECCIONA UNA PRUEBA</label>";
        $texto .="<select id='prueba' name='prueba'>";
        $texto .="<option value=''></option>";
        $texto .="<option value='1'>PRUEBA1</option>";
        $texto .="<option value='2'>PRUEBA2</option>";
        $texto .="<option value='3'>PRUEBA3</option>";
        $texto .="<option value='4'>PRUEBA4</option>";
        $texto .="</select>";
        break;
    default:
        $texto = "NO HAY CAMPO";
        break;
}

$texto .= "</div>";

echo json_encode($texto);
?>