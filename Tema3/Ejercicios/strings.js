
//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase,trozoPalabra){
    // Para solucionar este ejercicio hay que
    // paratir la frase en palabras con split
    // y después iterar por cada una de las palabras
    // y usar las funciones includes, startsWith y endWith
}

//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase,trozoPalabra){
    //Para solucionar este ejercicio hay que utilizar
    // la función indexOf y cada vez que encontremos una posición
    // volvemos a usar indexOf, pero a partir de la posición
    // de la ultíma vez que se encontro el trozo de palabra
    // Repetimos el proceso hasta que no se encuentre el trozo de palabra.
}

//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color){
    // Si nos basamos en los ejemplos de clase
    // para validar el formato tenemos que controlar lo siguiente
    // el tamaño
    // que empiece por #
    // que se usen numeros o letras de la A hasta la F.
}

//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(url){
    // Hay que validar por partes usando
    // las funciones startsWith, endsWith, includes
    // hay que tener en cuenta los caracteres especiales
}
