<?php
require_once '../../db/connection.php';

function getCandidatos() {
    $conn = conectar();
    try {
        $stmt = $conn->prepare("SELECT * FROM candidato");
        $stmt->execute();

        $result = $stmt->get_result();

        $candidatos = array();
        while ($row = $result->fetch_assoc()) {
            $candidatos[] = $row;
        }

        return $candidatos;
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return array();
    }
}
?>

