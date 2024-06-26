<?php
require_once '../../db/connection.php';

function getRegiones() {
    $conn = conectar(); // Establece la conexión a la base de datos

    try {
        $stmt = $conn->prepare("SELECT * FROM region");
        $stmt->execute();

        $result = $stmt->get_result(); // Obtiene el resultado como un objeto mysqli_result

        $regiones = array();
        while ($row = $result->fetch_assoc()) {
            $regiones[] = $row;
        }

        return $regiones;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return array(); // Devuelve un arreglo vacío en caso de error
    }
}
?>



