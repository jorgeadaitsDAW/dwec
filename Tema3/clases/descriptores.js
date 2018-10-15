console.log("EJEMPLOS DE DESCRIPTORES");

let friki = {
    nombre: 'SuperFreak', 
    profesion:'Informatico', 
    edad:'23',
    programar:function(){ console.log('TECLEO SIN PARAR');}
  };

console.log("RECORRIDO CON FOR IN");  
for(let propiedad in friki){
    console.log(`PROPIEDAD:${propiedad} : ${friki[propiedad]}`);
}

console.log(`OBJECT_KEYS:${Object.keys(friki)}`);

console.log("VER VALORES DESCRIPTOR");
console.log(Object.getOwnPropertyDescriptor(friki, 'nombre'));
console.log(Object.getOwnPropertyDescriptor(friki, 'programar'));

console.log("CAMBIAR VALORES DESCRIPTOR")
Object.defineProperty(friki, 'nombre', {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 'SUPERFREAK2'
  });

console.log("RECORRIDOS");  
for(let propiedad in friki){
    console.log(`PROPIEDAD:${propiedad} : ${friki[propiedad]}`);
}

console.log(`OBJECT_KEYS:${Object.keys(friki)}`);

console.log("ENUMERABLE A FALSO")
Object.defineProperty(friki, 'nombre', {
    enumerable: false,
  });
console.log(Object.getOwnPropertyDescriptor(friki, 'nombre'));
  
console.log("RECORRIDOS");  
for(let propiedad in friki){
    console.log(`PROPIEDAD:${propiedad} : ${friki[propiedad]}`);
}

console.log(`OBJECT_KEYS:${Object.keys(friki)}`);

console.log("WRITABLE A FALSO")
Object.defineProperty(friki, 'nombre', {
    writable: false,
  });
  console.log(Object.getOwnPropertyDescriptor(friki, 'nombre'));

friki.nombre = "JAIMITO EL SUPERFREAK";
console.log(friki.nombre);


console.log("CONFIGURABLE A FALSO")
Object.defineProperty(friki, 'nombre', {
    configurable: true, 
  });

  console.log(Object.getOwnPropertyDescriptor(friki, 'nombre'));

Object.defineProperty(friki, 'nombre', {
    writable: true, 
});

console.log(Object.getOwnPropertyDescriptor(friki, 'nombre'));

friki.nombre = "JAIMITO EL SUPERFREAK";
console.log(friki.nombre);


delete friki["nombre"];
console.log(friki.nombre);

