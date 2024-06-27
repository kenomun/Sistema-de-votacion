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
            } else {
                alert(response.message);
            }
        },
        error: function() {
            alert('Error al enviar el formulario.');
        }
    });
}

// Esto se asegura de que enviarDatos esté disponible globalmente
window.enviarDatos = enviarDatos;

