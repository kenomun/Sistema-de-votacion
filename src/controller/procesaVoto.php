<?php
// procesarVoto.php
require '../../db/connection.php';

$response = [
    'success' => false,
    'message' => ''
];

try {
    

    // Obtener datos del formulario
    $nombre_apellido = $_POST['nombre_apellido'];
    $alias = $_POST['alias'];
    $rut = $_POST['rut'];
    $email = $_POST['email'];
    $comuna = $_POST['comuna'];
    $candidato = $_POST['candidato'];
    $encuestas = isset($_POST['encuesta']) ? $_POST['encuesta'] : [];

    // Conexión a la base de datos
    $conn = conectar();



    // Validar que el RUT no exista
    $stmt = $conn->prepare("SELECT v.id, v.nombre_apellido, v.alias, v.email, c.nombre AS comuna, r.nombre AS region, ca.nombre AS candidato 
                            FROM votante v 
                            JOIN comuna c ON v.comuna_id = c.id 
                            JOIN region r ON c.region_id = r.id 
                            JOIN candidato ca ON v.candidato_id = ca.id 
                            WHERE v.rut = ?");
    $stmt->bind_param("s", $rut);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $votoExistente = $result->fetch_assoc();
        
        // Obtener las encuestas seleccionadas
        $stmt = $conn->prepare("SELECT e.descripcion FROM votante_encuesta ve JOIN encuesta e ON ve.encuesta_id = e.id WHERE ve.votante_id = ?");
        $stmt->bind_param("i", $votoExistente['id']);
        $stmt->execute();
        $encuestasResult = $stmt->get_result();
        $encuestas = [];
        while ($row = $encuestasResult->fetch_assoc()) {
            $encuestas[] = $row['descripcion'];
        }
        $votoExistente['encuestas'] = $encuestas;

        $response['success'] = false;
        $response['message'] = 'El RUT ya está registrado con un voto.';
        $response['votoExistente'] = $votoExistente;
        echo json_encode($response);
        exit;
    }
    $stmt->close();



    // Insertar datos del votante
    $stmt = $conn->prepare("INSERT INTO votante (nombre_apellido, alias, rut, email, comuna_id, candidato_id) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssii", $nombre_apellido, $alias, $rut, $email, $comuna, $candidato);
    $stmt->execute();
    $votante_id = $stmt->insert_id;
    $stmt->close();

    // Insertar datos de las encuestas seleccionadas
    foreach ($encuestas as $encuesta_id) {
        $stmt = $conn->prepare("INSERT INTO votante_encuesta (votante_id, encuesta_id) VALUES (?, ?)");
        $stmt->bind_param("ii", $votante_id, $encuesta_id);
        $stmt->execute();
        $stmt->close();
    }

    // Respuesta exitosa
    $response['success'] = true;
    $response['message'] = 'Voto registrado con éxito.';

    // agrega datos a la respuesta
    // Obtener nombre de la comuna y región
     $stmt = $conn->prepare("SELECT c.nombre AS comuna, r.nombre AS region FROM comuna c JOIN region r ON c.region_id = r.id WHERE c.id = ?");
     $stmt->bind_param("i", $comuna);
     $stmt->execute();
     $result = $stmt->get_result();
     $localidad = $result->fetch_assoc();
     $comuna_nombre = $localidad['comuna'];
     $region_nombre = $localidad['region'];
     $stmt->close();

     // Obtener nombre del candidato
    $stmt = $conn->prepare("SELECT nombre FROM candidato WHERE id = ?");
    $stmt->bind_param("i", $candidato);
    $stmt->execute();
    $result = $stmt->get_result();
    $candidato_nombre = $result->fetch_assoc()['nombre'];
    $stmt->close();

    if ($response['success']) {
        $votoData = [
            'nombre_apellido' => $nombre_apellido,
            'alias' => $alias,
            'rut' => $rut,
            'email' => $email,
            'region' => $region_nombre,
            'comuna' => $comuna_nombre,
            'candidato' => $candidato_nombre,
        ];
        $response['votoData'] = $votoData;
    }
} catch (Exception $e) {
    // Respuesta de error
    $response['success'] = false;
    $response['message'] = $e->getMessage();
}

// Enviar respuesta JSON
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();

?>
