function crearObjeto(){

    let y = {};
    y.name = "Pepe";
    y.apellido = "Contrera";
    console.log(y);

    y["apellido"] = "Baron";

    console.log(y);

    let propiedad = "name";
    y[propiedad] = "Jorge";
    console.log(y);

    for(let p in y){
        console.log(`LA priopiedad es: ${y}- ${p} ${y[p]}`);
    }

}