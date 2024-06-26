<?php
function conectar()
{
    $host = "localhost";
    $dbname = "desis_prueba";
    $user = "root";
    $password = "";

    // Intentar la conexión
    $conn = new mysqli($host, $user, $password, $dbname);

    if ($conn->connect_error) {
        throw new Exception("Conexión fallida: " . $conn->connect_error);
    }
    
    return $conn; // Retorna la conexión si es exitosa
}

try {
    $conexion = conectar();
} catch (Exception $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
