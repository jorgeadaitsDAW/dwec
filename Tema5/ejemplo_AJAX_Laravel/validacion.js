/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

/**
 * Created by Jorge on 24/01/2018.
 */
function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0', 'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function validarNombre() {
    var inputNombre = $("#name");
    var miXHR = objetoXHR();
    miXHR.open("POST", "/register/validar");
    miXHR.onreadystatechange = comprobarEstadoPeticionNombre;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.setRequestHeader('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
    miXHR.send("name=" + inputNombre.val());
}

function validarEmail() {
    var inputEmail = $("#email");
    var miXHR = objetoXHR();
    miXHR.open("POST", "/register/validar");
    miXHR.onreadystatechange = comprobarEstadoPeticionEmail;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.setRequestHeader('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
    miXHR.send("email=" + inputEmail.val());
}

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    var inputNombre = $("#name");
    var inputEmail = $("#email");
    var miXHR = objetoXHR();
    miXHR.open("POST", "/register/validar");
    miXHR.onreadystatechange = comprobarEstadoPeticionFormulario;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.setRequestHeader('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
    miXHR.send("name=" + inputNombre.val() + "&" + "email=" + inputEmail.val());
}

function comprobarEstadoPeticionNombre() {
    if (this.readyState == 4 && this.status == 200) {
        var errores = JSON.parse(this.responseText);
        var inputNombre = $("#name");
        gestionarErrores(inputNombre, errores.name);
    }
}

function comprobarEstadoPeticionEmail() {
    if (this.readyState == 4 && this.status == 200) {
        var errores = JSON.parse(this.responseText);
        var input = $("#email");
        gestionarErrores(input, errores.email);
    }
}

function comprobarEstadoPeticionFormulario() {
    if (this.readyState == 4 && this.status == 200) {
        var errores = JSON.parse(this.responseText);
        var inputNombre = $("#name");
        var inputEmail = $("#email");
        var hayErroresNombre = gestionarErrores(inputNombre, errores.name);
        var hayErroresEmail = gestionarErrores(inputEmail, errores.email);
        if (!hayErroresNombre && !hayErroresEmail) {
            var formulario = $("#formulario");
            formulario.submit();
        }
    }
}

function gestionarErrores(input, errores) {
    var hayErrores = false;
    var divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (errores.length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = errores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var error = _step.value;

                divErrores.append("<div>" + error + "</div>");
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        var spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}

function validarNombreAjax() {
    $.ajax({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
        },
        method: 'POST',
        data: { name: $("#name").val() },
        url: "/register/validar",
        dataType: "JSON"
    }).done(function (datos) {
        var input = $("#name");
        gestionarErrores(input, datos.name);
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
        if (data.length === 0) {
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
        if (data.length === 0) {
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
        if (errores.length === 0) {
            var formulario = $("#formulario");
            formulario.submit();
        } else {
            gestionarErrores($("#name"), errores.name);
            gestionarErrores($("#email"), errores.email);
        }
    }).catch(function (err) {
        console.log(err);
        alert("SE HA PRODUCIDO UN ERROR");
    });
}

function validarNombreAxios() {

    axios.post('/register/validar', {
        name: $("#name").val()
    }).then(function (response) {
        gestionarErrores($("#name"), response.data.name);
    }).catch(function (error) {
        console.log(error);
    });
}

$(function () {
    $("#name").on("change", validarNombreFetch);
    $("#email").on("change", validarEmailFetch);
    $("#botonFormulario").on("click", validarFormularioFetch);
});

/***/ })

/******/ });