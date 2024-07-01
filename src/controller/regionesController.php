<?php
require_once '../../db/connection.php';

function getRegiones() {
    $conn = conectar();

    try {
        $stmt = $conn->prepare("SELECT * FROM region");
        $stmt->execute();

        $result = $stmt->get_result();

        $regiones = array();
        while ($row = $result->fetch_assoc()) {
            $regiones[] = $row;
        }

        return $regiones;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return array();
    }
}
?>



