$(document).ready(function() {
    $('#rut').on('input', function(e) {
        let rut = $(this).val().replace(/[^0-9kK]/g, ''); // Elimina cualquier carácter que no sea número o 'k'
        
        if(rut.length > 1) {
            rut = rut.slice(0, -1) + '-' + rut.slice(-1); // Añade el guión antes del último carácter
        }
        
        if(rut.length > 4) {
            rut = rut.slice(0, -5) + '.' + rut.slice(-5); // Añade un punto
        }
        
        if(rut.length > 8) {
            rut = rut.slice(0, -9) + '.' + rut.slice(-9); // Añade otro punto
        }

        $(this).val(rut);
    });
});