<?php
require_once '../../db/connection.php';

function getComunas() {
    $conn = conectar();

    try {
        $stmt = $conn->prepare("SELECT * FROM comuna");
        $stmt->execute();

        $result = $stmt->get_result();

        $comunas = array();
        while ($row = $result->fetch_assoc()) {
            $comunas[] = $row;
        }

        return $comunas;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return array();
    }
}
?>

