<?php
    // Mostramos la fecha y hora del servidor web.
    echo "SE HA HECHO LA PETICION CORRECTAMENTE: ".date("j/n/Y G:i:s.")." PARA EL USUARIO:".strtoupper($_POST["nombre"])." ".strtoupper($_POST["apellidos"]." ".$_POST["edad"]);
?>