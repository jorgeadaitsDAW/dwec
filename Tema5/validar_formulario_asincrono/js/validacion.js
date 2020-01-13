function objetoXHR(){
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}



function validarNombre(){
    let inputNombre = $("#nombre");
    incluirSpinner(inputNombre);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionNombre;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("nombre="+inputNombre.val());
}

function validarEdad(){
    let inputEdad = $("#edad");
    incluirSpinner(inputEdad);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionEdad;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("edad="+inputEdad.val());
}

function validarFormulario(){
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax(){
    $("#modal").modal("show");
    let inputNombre = $("#nombre");
    let inputEdad = $("#edad");
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionFormulario;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("nombre="+inputNombre.val()+"&"+"edad="+inputEdad.val());
}


function comprobarEstadoPeticionNombre() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let inputNombre = $("#nombre");
        gestionarErrores(inputNombre,errores.nombre);
    }
}

function comprobarEstadoPeticionEdad() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let input = $("#edad");
        gestionarErrores(input,errores.edad);
    }
}

function comprobarEstadoPeticionFormulario(){
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let inputNombre = $("#nombre");
        let inputEdad = $("#edad");
        let hayErroresNombre = gestionarErrores(inputNombre,errores.nombre);
        let hayErroresEdad = gestionarErrores(inputEdad,errores.edad);
        if(!hayErroresNombre && !hayErroresEdad){
            let formulario = $("#formulario");
            formulario.submit();
        }
        $("#modal").modal("hide");
    }
}

function gestionarErrores(input,errores){
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (errores.length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let error of errores) {
            divErrores.append("<div>"+error+"</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input){
    if(input.parent().next().length === 0){
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}
