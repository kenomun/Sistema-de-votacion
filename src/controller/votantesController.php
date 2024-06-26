<?php
require_once('../../db/connection.php');
$conn = conectar();

session_start();

function verificarVotante($rut) {
    global $conn; // Accede a la conexión global

    $stmt = $conn->prepare("SELECT COUNT(*) FROM votante WHERE rut = ?");
    $stmt->bind_param("s", $rut);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->close();

    return $count > 0;
}

function guardarVotante($nombreApellido, $alias, $rut, $email, $comunaId, $candidatoId) {
    global $conn; // Accede a la conexión global

    $stmt = $conn->prepare("INSERT INTO votante (nombre_apellido, alias, rut, email, comuna_id, candidato_id) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssii", $nombreApellido, $alias, $rut, $email, $comunaId, $candidatoId);
    $result = $stmt->execute();
    $stmt->close();

    return $result;
}
?>

