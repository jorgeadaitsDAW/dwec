let prueba = "ejemplo";
function prueba2(){
    let prueba2 = "Ejemplo";
    console.log(prueba2);
}

function sumar(x){
    return x = x +5;
}

function sumarNumeros(){
    let x = 10;
    console.log(x);
    sumar(x);
    console.log(x);
}

function incluirNavegador(misNAvegadores){
    misNavegadores.push("Chrome");
}

let misNavegadores= ["Opera","Safari","Firefox"];
console.log(misNavegadores);
incluirNavegador(misNavegadores);
console.log(misNavegadores);

console.log(sumarNumeros2(5,10));

function sumarNumeros2(x, y) {
    console.log("hacer suma");
    return x +y;
}


let sumaNumerosVariable = function(x, y) {
    console.log("hacer suma variable");
    return x +y;
}

console.log(sumaNumerosVariable(5,10));

let pruebaFuncion = function(x,y){
    return x + y;
}

console.log(pruebaFuncion);
console.log(pruebaFuncion());

function multiply(a, b = 5) {
    return a*b;
}

console.log(multiply(3,8));

function multiply(multiplicador, ...valores) {
    let i = 0;
    for(i = 0;i < valores.length; i++){
        valores[i] = valores[i] *multiplicador;
    }
    return valores;
}
    
let arr = multiply(2, 1, 2, 3,1,12,123,123,123,123);
console.log(arr); // [2, 4, 6]
let arr2 = multiply("Prueba", 1, 2, 3,"Prueba");
console.log(arr2); 

function creaSumador(x) {
    return function(y) {
        return x + y;
    };
}
    
var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2));
console.log(suma10(2));
console.log(creaSumador(10)(30));

/*var a = 12;
(function() {
    alert(a);
})();*/

/*var a = 5;
(function() {
    var a = 12;
    alert(a);
})();*/

var a = 10;
var x = (function() {
    console.log("EJECUTAMOS PRIMERA FUNCION")
        return (function() {
            console.log("EJECUTAMOS SEGUNDA FUNCION");
            console.log("EL VALOR DE A ES:"+a);
        });
    console.log("CONTINUAMOS CON LA EJECUCION");    
    })();

x();
a = 15;
x();

var a = 10;
var x = (function() {
    var y = (function() {
        a = 12;
    })();
    return function() {
        console.log("EL RESULTADO ES:"+a);
    }
})();

x();


var a = 10;
(function() {
    a = 15;
    window.x = function() {
        //alert("DARA:"+a);
    }
})();
a  = 30;
x();

var a = 0;

function incrementaA() {
        a++;
    console.log("INCREMENTA:"+a);
}

incrementaA();
incrementaA();
incrementaA();


function incrementadorA() {
    let a = 0;
    return function(){
        a +=1;
        return a;
    }
}
    
let incrementador = incrementadorA();
console.log("RES1:"+incrementador());
console.log("RES2:"+incrementador());
console.log("RES3:"+incrementador());

function greet(name) {
    var hola = 'hola, como estas ';
    function sayGreet() {
        return hola + name;
    }
    return sayGreet;
}
var sayHola = greet("Jorge");
//alert(sayHola());

function sayGreet(){
    //alert("HOLA!!");
}

sayGreet();

function listaNumeros(numeros){
    return function(y){
        let suma = 0;
        for(let numero of numeros){
            if( (numero % y) === 0){
                suma +=numero; 
            }
        }
        return suma;
    }
}

let prueba1 = listaNumeros([1,2,3,4,5,6,7,8]);
console.log(prueba1(2));
console.log(prueba1(3));


function prueba3(){
    console.log("ESTA ES LA FUNCION DE PRUEBA 3");
    return "NADA";
}

function pruebaCallBack(funcionCallback,x){
    console.log("LA suma da:"+ (x +5));
    funcionCallback();
}

pruebaCallBack(prueba3,10);

function prueba4(nombre){
    return function(){
        console.log("ESTA ES LA FUNCION DE PRUEBA 4:"+nombre);
        return "NADA";
    }
}

pruebaCallBack(prueba4("Jorge"),10);


function decirHola(){
    //alert("Holaaaaa ALumnos");
}

setTimeout(decirHola,2000);

function decirHola2(nombre){
    return function(){
        //alert("Holaaaaa ALumnos, de parte de :"+nombre);
    }
}
setTimeout(decirHola2("Juan"),4000);

setTimeout(decirHola2("Pepe"),6000);

setTimeout(decirHola2("LOlo"),8000);

let i = setInterval(decirHola2("Maria",2000));
clearInterval(i);

let funcionFlecha1 = valor => valor +1;
console.log(funcionFlecha1(5));
console.log(funcionFlecha1(15));

let funcionFlecha2 = (sumador1,sumador2) => sumador1 + sumador2;
console.log(funcionFlecha2(3,4));

let funcionFlecha3 = () => console.log("HOLAAA");
funcionFlecha3();

let funcionFlecha4 = () => {
                console.log("PRIMER PASO");
                console.log("SEGUNDO PASO");
                let x = 5;
                return x;
            };
console.log(funcionFlecha4());

let funcionFlechaNE = (nombre,edad) => alert("nombre:"+nombre+ " y edad:"+edad);

setTimeout(
    function(){
        funcionFlechaNE("JORGE",30);
    }
    ,3000);
