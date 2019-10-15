function invertirTAM(cadena){
    let resultado = "";
    for(let i = 0;i< cadena.length;i++){
        let letra = cadena.charAt(i);
        if(letra.localeCompare(letra.toLocaleUpperCase()) === 0 ){
            resultado += letra.toLocaleLowerCase();
        }else{
            resultado += letra.toLocaleUpperCase();
        }

    }

    return resultado;
}

function invertirPalabra(palabra){
    let tam = palabra.length -1;
    let resultado = "";
    while(tam >= 0){
        resultado += palabra.charAt(tam);
        tam--;
    }    
    return resultado;
}

function incluirPalabra(palabra,elemento,pos){
    let resultado = "";
    for(let i = 0; i<palabra.length;i++){
        if(i === pos){
            resultado +=elemento;
        }
        resultado +=palabra.charAt(i);
        
    }
    return resultado;    
}

function incluirPalabra2(palabra,elemento,pos){
    if(pos === undefined){
        pos = 0;
    }
    let resultado = "";
    let a = palabra.slice(0,pos);
    let b = palabra.slice(pos);
    resultado = a + elemento + b;
    return resultado;    
}

function incluirPalabra3(palabra,elemento,pos){
    return `${palabra.slice(0,pos)}${elemento}${palabra.slice(pos)}`; 
}

function cogerPalabras(frase,numPalabras){
    let resultado = "";
    let palabras = frase.split(" ");
    for(let i = 0;i< numPalabras;i++){
        resultado += palabras[i]+" ";
    }
    return resultado.trim();
}

function cogerPalabras2(frase,numPalabras){
    let resultado = "";
    let palabras = frase.split(" ");
    let i = 0;
    let numeroPalabrasCogidas = 0;
    while( numeroPalabrasCogidas <= numPalabras
        &&
        i < palabras.length
        ){
        let palabra = palabras[i];
        if(palabra !== ""){
            resultado +=palabra+" ";
            numeroPalabrasCogidas++; 
        }  
        i++;
    }
    return resultado.trim();
}

function validarTelefonoMovil(telefono){
    let esValido = false;
    if(telefono.length === 9){
        if(telefono.startsWith("6")
            ||
            telefono.startsWith("7")
        ){
            let tlf = telefono.slice("");
            for(let numero of tlf){
                switch(numero){
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        esValido = true;
                        break;
                    default:
                        return false;
                        break;    
                }
            }
        }
    }
    return esValido;
}


function calcularLetraDNI(dni){
    let letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    let numero = dni % 23;
    let letraDNI = letras.charAt(numero);
    return letraDNI;

}

function esDniValido(dni){
    let esValido = false;
    dni = dni.trim();
    if(dni.length === 9){
        let numero = parseInt(dni.substring(0,8)); 
        let letra = dni.charAt(8);
        let letraDNI = calcularLetraDNI(numero);
        if(letra.toLocaleUpperCase() === letraDNI){
            esValido = true;
        }
    }
    return esValido;
}

function esEmailValido(email){
    //prueba@gmail.com;
    let esEmailValido = false;
    email = email.trim().replace(" ","");
    let textoEmail = email.split("@");
    if( textoEmail[0].length >= 1
        && 
        textoEmail[1].length >=3
        ){
        let textoPunto = textoEmail[1].split(".");    
        if(textoPunto[0].length >= 1 
            &&  
           textoPunto[1].length >= 1 
            ) {
            esEmailValido = true;
        }    
    }
    return esEmailValido;
}

// Minimo 9 caracteres
// Todas las letras mayúsculas
// Mínimo 2 números
// Mínimo una "!" o "?"
function esPassValido(pass){
    // Las condiciones del password son las siguientes
    let esValido = false;
    if(pass.length >=9){
        if( pass.search("!") !== -1 
            || 
            pass.search("?") !== -1){
             if(pass === pass.toLocaleUpperCase()){
                let contadorNumeros = 0;
                for(let i = 0;i< pass.length;i++){
                    switch(pass[i]){
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            contadorNumeros++;
                            break;                                    
                    }
                }
                if(contadorNumeros >=2){
                    esValido = true;
                }
             }   
        }
    }
    return esValido;
}