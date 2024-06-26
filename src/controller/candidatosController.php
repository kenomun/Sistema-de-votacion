<?php
require_once '../../db/connection.php';

function getCandidatos() {
    $conn = conectar(); // Establece la conexión a la base de datos

    try {
        $stmt = $conn->prepare("SELECT * FROM candidato");
        $stmt->execute();

        $result = $stmt->get_result(); // Obtiene el resultado como un objeto mysqli_result

        $candidatos = array();
        while ($row = $result->fetch_assoc()) {
            $candidatos[] = $row;
        }

        return $candidatos;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return array(); // Devuelve un arreglo vacío en caso de error
    }
}
?>

