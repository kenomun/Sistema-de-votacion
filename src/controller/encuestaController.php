<?php
require_once '../../db/connection.php';

function getEncuestas() {
    $conn = conectar();
    try {
        $stmt = $conn->prepare("SELECT * FROM encuesta");
        $stmt->execute();

        $result = $stmt->get_result();

        $encuestas = array();
        while ($row = $result->fetch_assoc()) {
            $encuestas[] = $row;
        }

        return $encuestas;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return array();
    }
}
?>


