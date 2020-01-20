/**
 * Created by Jorge on 24/01/2018.
 */
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
    let inputNombre = $("#name");
    let miXHR = objetoXHR();
    miXHR.open("POST", "/register/validar");
    miXHR.onreadystatechange = comprobarEstadoPeticionNombre;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.setRequestHeader('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
    miXHR.send("name="+inputNombre.val());
}

function validarEmail(){
    let inputEmail = $("#email");
    let miXHR = objetoXHR();
    miXHR.open("POST", "/register/validar");
    miXHR.onreadystatechange = comprobarEstadoPeticionEmail;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.setRequestHeader('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
    miXHR.send("email="+inputEmail.val());
}

function validarFormulario(){
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax(){
    let inputNombre = $("#name");
    let inputEmail = $("#email");
    let miXHR = objetoXHR();
    miXHR.open("POST", "/register/validar");
    miXHR.onreadystatechange = comprobarEstadoPeticionFormulario;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.setRequestHeader('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
    miXHR.send("name="+inputNombre.val()+"&"+"email="+inputEmail.val());
}


function comprobarEstadoPeticionNombre() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let inputNombre = $("#name");
        gestionarErrores(inputNombre,errores.name);
    }
}

function comprobarEstadoPeticionEmail() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let input = $("#email");
        gestionarErrores(input,errores.email);
    }
}

function comprobarEstadoPeticionFormulario(){
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let inputNombre = $("#name");
        let inputEmail = $("#email");
        let hayErroresNombre = gestionarErrores(inputNombre,errores.name);
        let hayErroresEmail = gestionarErrores(inputEmail,errores.email);
        if(!hayErroresNombre && !hayErroresEmail){
            let formulario = $("#formulario");
            formulario.submit();
        }
    }
}

function gestionarErrores(input,errores){
    let hayErrores = false;
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
    //PAra quitar el spiner
    //input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input){
    if(input.parent().next().length === 0){
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}


function validarNombreAjax(){
        $.ajax({
            headers : {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
            },
            method:'POST',
            data: {name:$("#name").val()},
            url: "/register/validar",
            dataType:"JSON"
        })  .done( function(datos){
            let input = $("#name");
            gestionarErrores(input,datos.name);
        });
}


function validarNombreFetch() {
    var myHeaders = new Headers();
    myHeaders.append("X-CSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
    var form = new FormData();
    form.append("name", $("#name").val());
    var configuracion = {
        method: 'POST',
        headers: myHeaders,
        body: form,
        credentials: "same-origin"
    };

    fetch("/register/validar", configuracion).then(function (response) {
        return response.json();
    }).then(function (data) {
        if(data.length === 0){
            data.name = [];
        }
        gestionarErrores($("#name"), data.name);
    }).catch(function (err) {
        console.log(err);
        alert("SE HA PRODUCIDO UN ERROR");
    });
}

function validarEmailFetch() {
    var myHeaders = new Headers();
    myHeaders.append("X-CSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
    var form = new FormData();
    form.append("email", $("#email").val());
    var configuracion = {
        method: 'POST',
        headers: myHeaders,
        body: form,
        credentials: "same-origin"
    };

    fetch("/register/validar", configuracion).then(function (response) {
        return response.json();
    }).then(function (data) {
        if(data.length === 0) {
            data.email = [];
        }
        gestionarErrores($("#email"), data.email);
    }).catch(function (err) {
        console.log(err);
        alert("SE HA PRODUCIDO UN ERROR");
    });
}
function validarFormularioFetch() {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("X-CSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
    var form = new FormData();
    form.append("name", $("#name").val());
    form.append("email", $("#email").val());
    var configuracion = {
        method: 'POST',
        headers: myHeaders,
        body: form,
        credentials: "same-origin"
    };

    fetch("/register/validar", configuracion).then(function (response) {
        return response.json();
    }).then(function (errores) {
        if(errores.length === 0){
            var formulario = $("#formulario");
            formulario.submit();
        }else{
            gestionarErrores($("#name"), errores.name);
            gestionarErrores($("#email"), errores.email);
        }
    }).catch(function (err) {
        console.log(err);
        alert("SE HA PRODUCIDO UN ERROR");
    });
}

function validarNombreAxios(){

    axios.post('/register/validar', {
        name: $("#name").val()
    }).then(function(response){

            gestionarErrores($("#name"),response.data.name)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function validarFormularioAxios(){

    let datosFormulario = $("#formulario").serialize();
    axios.post('/register/validar', {
        datosFormulario
    }).then(function(response){
            let formularioCorrecto = true;

            for(let campo in response.data){
                if(!gestionarErrores($(`#${campo}`),response.data[$campo])){
                    formularioCorrecto = false;
                }
            }
            if(formularioCorrecto){
                let formulario = document.getElementById("formulario");
                formulario.submit();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


$(function(){
    $("#name").on("change",validarNombreFetch);
    $("#email").on("change",validarEmailFetch);
    $("#botonFormulario").on("click",validarFormularioFetch);
});
