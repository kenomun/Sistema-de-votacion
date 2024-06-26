<?php
require_once '../../db/connection.php';

function getComunas() {
    $conn = conectar(); // Establece la conexión a la base de datos

    try {
        $stmt = $conn->prepare("SELECT * FROM comuna");
        $stmt->execute();

        $result = $stmt->get_result(); // Obtiene el resultado como un objeto mysqli_result

        $comunas = array();
        while ($row = $result->fetch_assoc()) {
            $comunas[] = $row;
        }

        return $comunas;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return array(); // Devuelve un arreglo vacío en caso de error
    }
}
?>

