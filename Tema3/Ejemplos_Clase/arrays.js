function ordenar(){
    let prueba = [
        "Jorge",
        "Pepito",
        "Antonio",
        "1984",
        10,
        "2",
        "12",
        "Lucas"
    ]
    console.log(prueba);

    prueba.sort();

    console.log(prueba);
}

function ordenarLista(a,b){
    let resultado = 0;
    if(a < b){
        resultado = 1;
    }else if(a > b){
        resultado = -1;
    }
    return resultado;
}

function ordenarLista2(a,b){
    return b -a;
}

function ordenar2(){
    let prueba = [
        2,
        10,
        15,
        23,
        21,
        11,
        3,
        31,
        4
    ]
    console.log(prueba);

    prueba.sort(ordenarLista2);

    console.log(prueba); console.log(p1.nombre);
}

function ordenarDescedenteString(a,b){
    return - a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
}


function ordenar3(){
    let prueba = [
        "Jorge",
        "Pepito",
        "Antonio",
        "1984",
        "Lucas"
    ]

    console.log(prueba);

    prueba.sort(ordenarDescedenteString);

    console.log(prueba);
}


function ordenarPersonas(funcionOrdenar){
    class Persona{
        constructor(nombre,edad){
            this.nombre = nombre;
            this.edad = edad;
        }
    }
    let p1 = new Persona("Jorge",99);
    let p2 = new Persona("Pepito",30);
    let p3 = new Persona("Juanito",10);
    let p4 = new Persona("Lola",30);
    let p5 = new Persona("Maria",50);

    let personas = [p1,p2,p3,p4,p5];
    //console.log(personas);

    /*personas.sort(ordenarPorNombre);

    console.log(personas);

    personas.sort(ordenarPorEdad);

    console.log(personas);*/

    personas.sort(funcionOrdenar);
    console.log(personas);

}

function ordenarPorNombre(a,b){
   return - a.nombre.toLocaleLowerCase().localeCompare(b.nombre.toLocaleLowerCase());
}

function ordenarPorEdad(a,b){
    return b.edad-a.edad;
}

function probarFilter(){
    let edades = [15,20,28,40,5];
    console.log(edades.filter(x => x >= 18));
    console.log(edades);
}

function probarFilterPersonas(){
    class Persona{
        constructor(nombre,edad){
            this.nombre = nombre;
            this.edad = edad;
        }
    }
    let p1 = new Persona("Jorge",99);
    let p2 = new Persona("Pepito",30);
    let p3 = new Persona("Juanito",10);
    let p4 = new Persona("Lola",30);
    let p5 = new Persona("Maria",50);

    let personas = [p1,p2,p3,p4,p5];
    console.log(personas.filter( x => x.edad < 18 ));
    console.log(personas.filter(x => x.edad > 18 && x.nombre.startsWith("J")));
}


function obtenerPrecioMayorPar(){

    let precios = [102,40,501,301,202,83];
    let resultado = precios.sort( (a,b) => b -a )
                           .filter( x => x % 2 === 0)
                           .filter( x => x < 200)
                           .find( x => x % 4 === 0) 
                           ;
    console.log(resultado);
}


function hayCadenasConVocales(){
    let cadenas = ["hl","prZ","jaln","nbj"];

    console.log(cadenas.some( x => x.match(/[aeiou]/g) ));

}


function ejemploForEach(){
    class Persona{
        constructor(nombre,edad){
            this.nombre = nombre;
            this.edad = edad;
        }
    }
    let p1 = new Persona("Jorge",99);
    let p2 = new Persona("Pepito",30);
    let p3 = new Persona("Juanito",10);
    let p4 = new Persona("Lola",30);
    let p5 = new Persona("Maria",50);

    let personas = [p1,p2,p3,p4,p5];
    
    personas.filter(x => x.edad === 30)
            .forEach(x => x.edad +=1);

    console.log(personas);

    console.log("EJEMPLO MAP");
    console.log(personas.map( x => 
        {x.edad *= 2;return x} 
        
        ));
}

function edadesMultiplicadas(){
    let edades = [10,30,40,50,100];
    console.log(edades.map( x => x * 7));
    console.log(edades);
}

function sumarEdades(total,num) {
    return total + num;
}

function sumarNumeros(){
    let edades =  [10,30,40,50,100];
    console.log(edades.reduce(sumarEdades));
}

function restarEdades(total,num) {
    return total -  num;
}

function restarNumeros(){
    let edades =  [10,30,40,50,100];
    console.log(edades.sort((a,b) => b -a)
                .reduce(restarEdades));
}


function sumarEdadesPersona(){
    class Persona{
        constructor(nombre,edad){
            this.nombre = nombre;
            this.edad = edad;
        }
    }
    let p1 = new Persona("Jorge",99);
    let p2 = new Persona("Pepito",30);
    let p3 = new Persona("Juanito",10);
    let p4 = new Persona("Lola",30);
    let p5 = new Persona("Maria",50);

    let personas = [p1,p2,p3,p4,p5];
    console.log(personas.reduce(
        acumuladorEdades
        ).edad);

    console.log(
        personas.map( x => x.edad)
                .reduce ((acum,x) => acum +x)
    );    

}


function acumuladorEdades(acumulador,valorActual){
    let x = {}
    x.edad = acumulador.edad + valorActual.edad;
    return x;
}