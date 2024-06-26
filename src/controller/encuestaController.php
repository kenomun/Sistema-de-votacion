<?php
require_once '../../db/connection.php';

function getEncuestas() {
    $conn = conectar(); // Establece la conexión a la base de datos

    try {
        $stmt = $conn->prepare("SELECT * FROM encuesta");
        $stmt->execute();

        $result = $stmt->get_result(); // Obtiene el resultado como un objeto mysqli_result

        $encuestas = array();
        while ($row = $result->fetch_assoc()) {
            $encuestas[] = $row;
        }

        return $encuestas;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return array(); // Devuelve un arreglo vacío en caso de error
    }
}
?>


