<?php
require_once '../controller/candidatosController.php';
require_once '../controller/comunasController.php';
require_once '../controller/regionesController.php';
require_once '../controller/encuestaController.php';

$data = [
    'candidatos' => getCandidatos(),
    'comunas' => getComunas(),
    'regiones' => getRegiones(),
    'encuestas' => getEncuestas(),
];

echo json_encode($data);
?>

