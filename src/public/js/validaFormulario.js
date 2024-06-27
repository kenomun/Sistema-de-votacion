$(document).ready(function() {
    $('#votacionForm').submit(function(e) {
        e.preventDefault();

        // Validar los campos del formulario
        if (validarFormulario()) {
            enviarDatos();
        }
    });

    function validarFormulario() {
        let valid = true;
        let errorMessage = '';

        // Obtener valores del formulario
        let nombre_apellido = $('#nombre_apellido').val().trim();
        let alias = $('#alias').val().trim();
        let rut = $('#rut').val().trim();
        let email = $('#email').val().trim();
        let region = $('#region').val().trim();
        let comuna = $('#comuna').val().trim();
        let candidato = $('#candidato').val().trim();
        console.log(nombre_apellido, alias, rut, email)

        // Validar cada campo
        if (!validarNombreApellido(nombre_apellido)) {
            valid = false;
            errorMessage = 'El campo "Nombre y Apellido" es obligatorio.';
        } else if (!validarAlias(alias)) {
            valid = false;
            errorMessage = 'El "Alias" debe tener 6 caracteres';
        } else if (!validarRut(rut)) {
            valid = false;
            errorMessage = 'El "RUT" no cumple con el formato.';
        } else if (!validarEmail(email)) {
            valid = false;
            errorMessage = 'El "Email" no es válido.';
        } else if (region === '') {
            valid = false;
            errorMessage = 'Debe seleccionar una "Región".';
        } else if (comuna === '') {
            valid = false;
            errorMessage = 'Debe seleccionar una "Comuna".';
        } else if (candidato === '') {
            valid = false;
            errorMessage = 'Debe seleccionar un "Candidato".';
        } else if (!validarEncuestaOptions()) {
            valid = false;
            errorMessage = 'Debe seleccionar al menos una opción en "¿Cómo se enteró de nosotros?".';
        }

        if (!valid) {
            alert(errorMessage);
        }

        return valid;
    }

    function validarNombreApellido(nombre) {
        return nombre.trim() !== '';
    }

    function validarAlias(alias) {
        return alias.length > 5 && /^[a-zA-Z0-9]+$/.test(alias);
    }


    function validarRut(rut) {
        rut = rut.replace(/\./g, '').replace(/\-/g, '').toUpperCase();

        if (rut.length < 8) {
            alert('El rut no cumple con el mínimo de números (min: 8)');
            return false;
        }

        if (rut.length > 9) {
            alert('El rut ingresado supera la cantidad máxima de números (max: 9)');
            return false;
        }
        
        var rutCompleto = rut.slice(0, -1);
        var digitoVerificador = rut.slice(-1);

        if (!/^[0-9]+$/g.test(rutCompleto)) {
            alert("El RUT ingresado contiene caracteres no válidos.");
            return false;
        }

        var suma = 0;
        var multiplicador = 2;

        for (var i = rutCompleto.length - 1; i >= 0; i--) {
            suma += parseInt(rutCompleto[i]) * multiplicador;
            multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
        }
        
        var resto = suma % 11;
        var dvEsperado = 11 - resto;

        if (dvEsperado === 11) {
            dvEsperado = '0';
        } else if (dvEsperado === 10) {
            dvEsperado = 'K';
        } else {
            dvEsperado = dvEsperado.toString();
        }
        
        if (dvEsperado !== digitoVerificador) {
            alert('Dígito verificador mal ingresado');
            return false;
        }

        return true;
    }


    function validarEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    function validarEncuestaOptions() {
        return $('input[name="encuesta[]"]:checked').length > 0;
    }
});


