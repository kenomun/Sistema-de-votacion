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
        rut = rut.trim(); // Eliminar espacios 
      
        // Verificar si el RUT tiene el formato correcto
        if (!/^\d{1,8}-\d$|^\d{1,2}\.\d{3}\.\d{3}-\d$/.test(rut)) {
          alert("rut no cumple con el formato.");
          return false;
        }
      
        // Dividir el RUT en su parte numérica y el dígito verificador
        const parts = rut.split("-");
        let num = parts[0].replace(/\./g, ''); // Eliminar puntos de separación de miles
        const dv = parts[1].toUpperCase();
      
        let sum = 0;
        let mul = 2;
        for (let i = num.length - 1; i >= 0; i--) {
          sum += parseInt(num[i]) * mul;
          mul = (mul % 7) + 1;
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


