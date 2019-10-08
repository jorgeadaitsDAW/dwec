/** @description Funcion de ejemplo.
 * @param {nombre} nombre de prueba
 * @return {valor} de prueba
 */
function prueba(nombre) {
  const y = 'nuevo';
  const x = `${nombre}:codigo de ejemplo ${y}`;
  alert(x + y);
  return 2;
}

/** @description Funcion de ejemplo.
 * @param {x} x es sumando 1
 * @param {y} y es sumando 2
 * @return {valor} de suma
 */
function suma(x, y) {
  return x+ y;
}

/** @description Función de ejemplo.
 * @param {nombre} nombre es el nombre de la persona
 * @param {apellidos} apellidos son los apellidos de la persona
 * @return {x} x es la concatenación del nombre con los apellidos.
 */
function prueba2(nombre, apellidos) {
  const x = `${nombre} ${apellidos}`;
  return x;
}

console.log(prueba('Jorge'));
console.log(suma(1, 2));
console.log(prueba2('Jorge', 'Barón Abad'));
