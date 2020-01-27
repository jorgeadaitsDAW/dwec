<?php
sleep(2);
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
switch($_POST["tipoPrueba"]){
    case "1":
        $texto .="<option value=''></option>";
        $texto .="<option value='sevilla'>SEVILLA</option>";
        $texto .="<option value='huelva'>HUELVA</option>";
        $texto .="<option value='cadiz'>CADIZ</option>";
        break;
    case "2":
        $texto .="<option value=''></option>";
        $texto .="<option value='profesor'>PROFESOR</option>";
        $texto .="<option value='alumno'>ALUMNO</option>";
        $texto .="<option value='conserje'>CONSERJE</option>";
        break;
    case "3":
        $texto .="<option value=''></option>";
        $texto .="<option value='tenis'>TENIS</option>";
        $texto .="<option value='tenis'>FÚTBOL</option>";
        break;
    default:
        $texto .="<option value=''></option>";
        break;
}
echo json_encode($texto);
?>