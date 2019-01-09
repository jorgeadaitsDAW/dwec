<?php
    // retrasamos 2 segundos la ejecución de esta página PHP.
    sleep(2);
    // Mostramos la fecha y hora del servidor web.
    echo "SE HA ECHO LA PETICION CORRECTAMENTE: ".date("j/n/Y G:i:s.")." PARA EL USUARIO:".strtoupper($_GET["nombre"])." ".strtoupper($_GET["apellido"]);
?>