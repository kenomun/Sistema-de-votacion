$(document).ready(function() {
    $('#rut').on('input', function(e) {
        // Elimina cualquier carácter que no sea número o 'k'
        let rut = $(this).val().replace(/[^0-9kK]/g, '');
        
        // Añade el guión antes del último carácter
        if(rut.length > 1) {
            rut = rut.slice(0, -1) + '-' + rut.slice(-1);
        }
        
        // Añade un punto
        if(rut.length > 4) {
            rut = rut.slice(0, -5) + '.' + rut.slice(-5);
        }
        
        // Añade otro punto
        if(rut.length > 8) {
            rut = rut.slice(0, -9) + '.' + rut.slice(-9);
        }

        $(this).val(rut);
    });
});