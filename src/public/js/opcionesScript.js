$(document).ready(function() {
    // Cargar opciones de región, comuna, candidatos y encuestas
    function cargarOpciones() {
        $.getJSON('../public/getOptions.php', function(data) {
            var regiones = data.regiones;
            var comunas = data.comunas;
            var candidatos = data.candidatos;
            var encuestas = data.encuestas;

            $.each(regiones, function(key, val) {
                $('#region').append('<option value="' + val.id + '">' + val.nombre + '</option>');
            });
            
            $.each(candidatos, function(key, val) {
                $('#candidato').append('<option value="' + val.id + '">' + val.nombre + '</option>');
            });
            
            $('#region').change(function() {
                var regionId = $(this).val();
                $('#comuna').empty();
                $.each(comunas, function(key, val) {
                    if (val.region_id == regionId) {
                        $('#comuna').append('<option value="' + val.id + '">' + val.nombre + '</option>');
                    }
                });
            });

            $.each(encuestas, function(key, val) {
                $('#encuestaOptions').append('<input type="checkbox" name="encuesta[]" value="' + val.id + '"> ' + val.descripcion + '<br>');
            });
        });
    }

    cargarOpciones();
});