<?php
sleep(2);
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "prueba";
$password = "password";
$baseDatos = "adaits";

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT nombre,genero,director,duracion FROM peliculas WHERE nombre LIKE '%".$_POST['nombre']."%'");
$stmt->execute();
$peliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($peliculas);
?>