<?php
// retrasamos 2 segundos la ejecución de esta página PHP.
sleep(2);
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
// Leemos el contenido del fichero XML
// e imprimimos su contenido.
// Muy importante indicar al navegador que va a recibir contenido XML
// eso lo hacemos con la siguiente cabecera:
header("Content-Type: text/xml");
$ficheroxml="<?xml version=\"1.0\" encoding=\"utf-8\"?>";
$ficheroxml.='
<CATALOGO>
    <PELICULA>
        <NOMBRE>Star Wars: Episodio VIII - Los últimos Jedi</NOMBRE>
        <GENERO>SPACE OPERA</GENERO>
        <DIRECTOR>Rian Johnson</DIRECTOR>
        <DURACION>152 min</DURACION>
    </PELICULA>
    <PELICULA>
        <NOMBRE>BABY DRIVER</NOMBRE>
        <GENERO>Acción</GENERO>
        <DIRECTOR>Edgar Wright</DIRECTOR>
        <DURACION>113 min</DURACION>
    </PELICULA>
    <PELICULA>
        <NOMBRE>Inception(Origen)</NOMBRE>
        <GENERO>SUSPENSE</GENERO>
        <DIRECTOR>Christopher Nolan</DIRECTOR>
        <DURACION>148 min</DURACION>
    </PELICULA>
    <PELICULA>
        <NOMBRE>kingsman</NOMBRE>
        <GENERO>ACCIÓN-COMEDIA</GENERO>
        <DIRECTOR>Matthew Vaughn</DIRECTOR>
        <DURACION>129 min</DURACION>
    </PELICULA>
    <PELICULA>
        <NOMBRE>REC</NOMBRE>
        <GENERO>Terror</GENERO>
        <DIRECTOR>Paco Plaza</DIRECTOR>
        <DURACION>80 min</DURACION>
    </PELICULA>
</CATALOGO>';

echo $ficheroxml;