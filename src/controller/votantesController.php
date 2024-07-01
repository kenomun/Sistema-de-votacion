<?php
require_once('../../db/connection.php');
$conn = conectar();

session_start();

function verificarVotante($conn, $rut) {
    try {
        $stmt = $conn->prepare("SELECT COUNT(*) FROM votante WHERE rut = ?");
        $stmt->bind_param("s", $rut);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        $stmt->close();

        return $count > 0;
    } catch (mysqli_sql_exception $e) {
        error_log("Error al verificar el votante: " . $e->getMessage());
        return false;
    }
}

function guardarVotante($conn, $nombreApellido, $alias, $rut, $email, $comunaId, $candidatoId) {
    try {
        $stmt = $conn->prepare("INSERT INTO votante (nombre_apellido, alias, rut, email, comuna_id, candidato_id) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssii", $nombreApellido, $alias, $rut, $email, $comunaId, $candidatoId);
        $result = $stmt->execute();
        $stmt->close();

        return $result;
    } catch (mysqli_sql_exception $e) {
        error_log("Error al guardar el votante: " . $e->getMessage());
        return false;
    }
}
?>


