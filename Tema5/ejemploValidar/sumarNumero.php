<?php
// Si no ponemos esta línea, el resultado que devolverá sólo será texto,
// como el ejemplo1, por lo tanto para que JQUERY lo parse automáticamente,
// debemos indicar que la respuesta es JSON.
header('Content-Type: application/json');
sleep(2);
echo json_encode($_POST["numero1"] + $_POST["numero2"]);
?>