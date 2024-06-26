<?php
function conectar()
{
    $host = "localhost";
    $dbname = "desis_prueba";
    $user = "root";
    $password = "";

    // Intentar la conexión
    $conn = new mysqli($host, $user, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    return $conn; // Retorna la conexión si es exitosa
}
?>

