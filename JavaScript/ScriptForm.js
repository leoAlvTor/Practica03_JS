function verificarCampos() {
    var bandera = true;
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i];
        if(elemento.value === '' && elemento.type === 'text') {
            if (elemento.id === cedula)
                document.getElementById('mensajeCedula').innerHTML = '<br> La cedula esta vacia';
            elemento.style.border = '1px red solid';
            elemento.className = 'error';
            bandera = false;
        }
    }
    if(!bandera){
        alert('Revisar que todo este completo');
    }else{
        if(validarCedula(document.getElementById('cedula').value) === false) {
            alert("Se ha ingresado una cedula incorrecta.");
            return false;
        }
        if(validarNombreApellido(document.getElementById('nombre').value) === false){
            alert("Debe ingresar al menos 1 nombre.");
            return false;
        }
        if(validarNombreApellido(document.getElementById('apellido').value) === false){
            alert('Debe ingresar al menos 1 apellido.');
            return false;
        }
        if(validarFechaNac(document.getElementById('fecha').value) === false){
            alert('Debe ingresar una fecha valida en formato dd/mm/yyyy');
            return false;
        }
        if(validarCorreo(document.getElementById('email').value) === false){
            alert('El correo esta mal ingresado, por favor reviselo.');
            return false;
        }
        if(validarPassword(document.getElementById('password').value) === false){
            alert('El Passowrd no cumple con los requerimientos de complejidad.');
            return false;
        }
    }
    return bandera;
}

function validarCedula(x) {
    console.log("Entro a validar la cedula");
    var suma = 0;
    var a = (function (s) {
        var a = [];
        while (s-- > 0)
            a.push(0);
        return a;
    })
    ((x.length / 2 | 0));
    var b = (function (s) {
        var a = [];
        while (s-- > 0)
            a.push(0);
        return a;
    })((x.length / 2 | 0));
    var c = 0;
    var d = 1;
    for (let i = 0; i < (x.length / 2 | 0); i++) {
        {
            a[i] = parseInt(/* valueOf */ String(x.charAt(c)).toString());
            c = c + 2;
            if (i < ((x.length / 2 | 0)) - 1) {
                b[i] = parseInt(/* valueOf */ String(x.charAt(d)).toString());
                d = d + 2;
            }
        }
    }
    for (let i = 0; i < a.length; i++) {
        {
            a[i] = a[i] * 2;
            if (a[i] > 9) {
                a[i] = a[i] - 9;
            }
            suma = suma + a[i] + b[i];
        }
    }
    var aux = (suma / 10 | 0);
    var dec = (aux + 1) * 10;
    if ((dec - suma) === parseInt(String(x.charAt(x.length - 1)).toString())) {
        return true;
    } else return suma % 10 === 0 && (function (c) {
        return c.charCodeAt == null ? c : c.charCodeAt(0);
    })(x.charAt(x.length - 1)) === '0'.charCodeAt(0);
}

function validarNombreApellido(x) {
    let spliteo = x.split(' ');
    if(spliteo.length >= 1)
        return true;
    else
        return false;
}

function validarCorreo(x){
    let spliteado = x.split('@');
    if(spliteado.length === 2 && spliteado[0] !== '' && spliteado[1] !== '') {
        if (spliteado[0].length >= 3) {
            if (spliteado[0].match(/^[A-Za-z]+[0-9][A-Za-z]*$/)) {
                if (spliteado[1] === 'est.ups.edu.ec' || spliteado[1] === 'ups.edu.ec')
                    return true;
                else
                    return false;
            }else
                return false;
        }else
            return false;
    }else
        return false;
}

function validarFechaNac(x){
    let regex = new RegExp(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/);
    if(regex.test(x))
        return true;
    else
        return false;
}

function listenerCedula() {
    let regCedula = new RegExp('^[0-9]*$');
    let valorTxt = document.getElementById('cedula').value;
    let testeoCedula = regCedula.test(valorTxt);
    if (testeoCedula === false) {
        alert("No puede ingresar texto");
        document.getElementById('cedula').value = valorTxt.replace(/\D+/g, "");
    }
}

function validarPassword(x){
    let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
    if(regexPassword.test(x)){
        return true;
    }else
        return false;
}

function listenerNombreApellido() {
    let regNombre = new RegExp('^[a-zA-Z ]*$');
    let valorTxtN = document.getElementById('nombre').value;
    let testeoNombre = regNombre.test(valorTxtN);
    if(testeoNombre === false){
        alert("No puede ingresar numeros en el campo nombre.");
        document.getElementById('nombre').value = valorTxtN.replace(/[0-9]/g, "");
    }

    let valorTxtA = document.getElementById('apellido').value;
    let testeoApellido = regNombre.test(valorTxtA);
    if(testeoApellido === false){
        alert("No puede ingresar numeros en el campo apellido.");
        document.getElementById('apellido').value = valorTxtA.replace(/[0-9]/g, "");
    }

}

function listenerTelefono(){
    let regTelefono = new RegExp('^[0-9]*$');
    let valorTelefono = document.getElementById('telefono').value;
    let cantidadNumerico = valorTelefono.length;
    let testeoTelefono = regTelefono.test(valorTelefono);
    if(testeoTelefono === false){
        alert("No puede ingresar letras en el campo telefono");
        valorTelefono = valorTelefono.substring(0, valorTelefono.length - 1);
        document.getElementById('telefono').value = valorTelefono;
        return false;
    }else if(cantidadNumerico > 10) {
        alert("No puede ingresar mas de 10 numeros.");
        valorTelefono = valorTelefono.substring(0, valorTelefono.length - 1);
        document.getElementById('telefono').value = valorTelefono;
        return false;
    }else
        return true;
}



