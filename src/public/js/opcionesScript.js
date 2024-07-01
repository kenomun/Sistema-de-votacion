$(document).ready(function() {
    // Cargar opciones de región, comuna, candidatos y encuestas
    function cargarOpciones() {
        $.getJSON('../public/getOptions.php', function(data) {
            var regiones = data.regiones;
            var comunas = data.comunas;
            var candidatos = data.candidatos;
            var encuestas = data.encuestas;

            // Cargar regiones
            $('#region').empty().append('<option value="">Seleccionar una región</option>');
            $.each(regiones, function(key, val) {
                $('#region').append('<option value="' + val.id + '">' + val.nombre + '</option>');
            });
           
            // Cargar candidatos
            $('#candidato').empty().append('<option value="">Selecciona un candidato</option>');
            $.each(candidatos, function(key, val) {
                $('#candidato').append('<option value="' + val.id + '">' + val.nombre + '</option>');
            });
           
            // Evento change para región
            $('#region').change(function() {
                var regionId = $(this).val();
                $('#comuna').empty().append('<option value="">Selecciona una comuna</option>');
                if (regionId) {
                    $.each(comunas, function(key, val) {
                        if (val.region_id == regionId) {
                            $('#comuna').append('<option value="' + val.id + '">' + val.nombre + '</option>');
                        }
                    });
                    $('#comuna').prop('disabled', false);
                } else {
                    $('#comuna').prop('disabled', true);
                }
            });

            // Cargar opciones de encuesta
            $('#encuestaOptions').empty();
            $.each(encuestas, function(key, val) {
                $('#encuestaOptions').append('<input type="checkbox" name="encuesta[]" value="' + val.id + '"> ' + val.descripcion + '<br>');
            });

            // Deshabilitar el select de comuna inicialmente
            $('#comuna').prop('disabled', true);
        });
    }

    cargarOpciones();
});