function enviarDatos() {
    $.ajax({
        type: 'POST',
        url: '../controller/procesaVoto.php',
        data: $('#votacionForm').serialize(),
        dataType: 'json',
        success: function(response) {
            console.log('Respuesta del servidor:', response);
            if (response.success) {
                alert(response.message);
                if (response.votoData) {
                    localStorage.setItem('votoData', JSON.stringify(response.votoData));
                    console.log('Datos guardados en localStorage:', response.votoData);
                } else {
                    console.log('No se recibieron datos del voto');
                }
                $('#votacionForm')[0].reset();
                window.location.href = '../view/result.html';
            } else if (response.votoExistente) {
                alert(response.message);
                mostrarVotoExistente(response.votoExistente);
            } else {
                alert(response.message);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error en la solicitud AJAX:', textStatus, errorThrown);
            alert('Error al enviar el formulario.');
        }
    });
}

function mostrarVotoExistente(votoExistente) {
    let mensaje = `
    Nombre y Apellido: ${votoExistente.nombre_apellido}<br>
    Alias: ${votoExistente.alias}<br>
    Email: ${votoExistente.email}<br>
    Región: ${votoExistente.region}<br>
    Comuna: ${votoExistente.comuna}<br>
    Candidato: ${votoExistente.candidato}`;

    $('#votoExistenteInfo').html(mensaje);
    $('#votoExistenteModal').show();
    console.log('Mostrando modal de voto existente');
}

// Asegúrate de que enviarDatos esté disponible globalmente
window.enviarDatos = enviarDatos;

// Agregar un manejador de eventos para el envío del formulario

$(document).ready(function() {
    $('.close').on('click', function() {
        $('#votoExistenteModal').hide();
    });

    $(window).on('click', function(event) {
        if (event.target == document.getElementById('votoExistenteModal')) {
            $('#votoExistenteModal').hide();
        }
    });
});

