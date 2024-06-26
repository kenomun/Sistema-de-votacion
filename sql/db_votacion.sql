-- Archivo SQL para crear la base de datos y las tablas con datos iniciales

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS db_votacion;
USE db_votacion;

-- Crear la tabla 'region'
CREATE TABLE IF NOT EXISTS region (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insertar datos en la tabla 'region'
INSERT INTO region (nombre) VALUES
('Tarapacá'),
('Antofagasta'),
('Atacama'),
('Coquimbo'),
('Valparaíso'),
('O\'Higgins'),
('Maule'),
('Biobío'),
('La Araucanía'),
('Los Lagos'),
('Aysén del General Carlos Ibáñez del Campo'),
('Magallanes y de la Antártica Chilena'),
('Metropolitana de Santiago'),
('Los Ríos'),
('Arica y Parinacota'),
('Ñuble');

-- Crear la tabla 'comuna'
CREATE TABLE IF NOT EXISTS comuna (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  region_id INT NOT NULL,
  FOREIGN KEY (region_id) REFERENCES region(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insertar datos en la tabla 'comuna'
INSERT INTO `comuna` (`id`, `nombre`, `region_id`) VALUES
(1, 'Arica', 15),
(2, 'Camarones', 15),
(3, 'Putre', 15),
(4, 'General Lagos', 15),
(5, 'Alto Hospicio', 1),
(6, 'Pozo Almonte', 1),
(7, 'Camiña', 1),
(8, 'Huara', 1),
(9, 'Iquique', 1),
(10, 'Mejillones', 2),
(11, 'Sierra Gorda', 2),
(12, 'Taltal', 2),
(13, 'Calama', 2),
(14, 'Ollagüe', 2),
(15, 'San Pedro de Atacama', 2),
(16, 'Antofagasta', 2),
(17, 'Mejillones', 2),
(18, 'Sierra Gorda', 2),
(19, 'Taltal', 2),
(20, 'Calama', 2),
(21, 'Ollagüe', 2),
(22, 'San Pedro de Atacama', 2),
(23, 'Copiapó', 3),
(24, 'Caldera', 3),
(25, 'Tierra Amarilla', 3),
(26, 'Chañaral', 3),
(27, 'Diego de Almagro', 3),
(28, 'Vallenar', 3),
(29, 'Alto del Carmen', 3),
(30, 'Freirina', 3),
(31, 'La Serena', 4),
(32, 'Coquimbo', 4),
(33, 'Andacollo', 4),
(34, 'La Higuera', 4),
(35, 'Vicuña', 4),
(36, 'Paihuano', 4),
(37, 'Ovalle', 4),
(38, 'Combarbalá', 4),
(39, 'Valparaíso', 5),
(40, 'Viña del Mar', 5),
(41, 'Concón', 5),
(42, 'Quilpué', 5),
(43, 'Villa Alemana', 5),
(44, 'Quillota', 5),
(45, 'La Calera', 5),
(46, 'La Cruz', 5),
(47, 'Santiago', 13),
(48, 'Independencia', 13),
(49, 'Providencia', 13),
(50, 'Las Condes', 13),
(51, 'Vitacura', 13),
(52, 'Lo Barnechea', 13),
(53, 'Peñalolén', 13),
(54, 'La Reina', 13),
(55, 'Rancagua', 6),
(56, 'Machalí', 6),
(57, 'Codegua', 6),
(58, 'Graneros', 6),
(59, 'Doñihue', 6),
(60, 'Mostazal', 6),
(61, 'Rengo', 6),
(62, 'Requínoa', 6),
(63, 'Talca', 7),
(64, 'San Clemente', 7),
(65, 'Pelarco', 7),
(66, 'Maule', 7),
(67, 'Pencahue', 7),
(68, 'San Rafael', 7),
(69, 'Cauquenes', 7),
(70, 'Chanco', 7),
(71, 'Chillán', 16),
(72, 'Chillán Viejo', 16),
(73, 'Pemuco', 16),
(74, 'Yungay', 16),
(75, 'Quirihue', 16),
(76, 'Ninhue', 16),
(77, 'San Carlos', 16),
(78, 'San Fabián', 16),
(79, 'Concepción', 8),
(80, 'Coronel', 8),
(81, 'Chiguayante', 8),
(82, 'Penco', 8),
(83, 'Talcahuano', 8),
(84, 'Hualpén', 8),
(85, 'San Pedro de la Paz', 8),
(86, 'Santa Juana', 8),
(87, 'Temuco', 9),
(88, 'Padre Las Casas', 9),
(89, 'Freire', 9),
(90, 'Pitrufquén', 9),
(91, 'Villarrica', 9),
(92, 'Pucón', 9),
(93, 'Cunco', 9),
(94, 'Melipeuco', 9),
(95, 'Valdivia', 14),
(96, 'Corral', 14),
(97, 'Máfil', 14),
(98, 'Mariquina', 14),
(99, 'Lanco', 14),
(100, 'Los Lagos', 14),
(101, 'Paillaco', 14),
(102, 'La Unión', 14),
(103, 'Puerto Montt', 10),
(104, 'Puerto Varas', 10),
(105, 'Calbuco', 10),
(106, 'Maullín', 10),
(107, 'Los Muermos', 10),
(108, 'Fresia', 10),
(109, 'Llanquihue', 10),
(110, 'Cochamó', 10),
(111, 'Coyhaique', 11),
(112, 'Lago Verde', 11),
(113, 'Aysén', 11),
(114, 'Cisnes', 11),
(115, 'Guaitecas', 11),
(116, 'Cochrane', 11),
(117, 'O Higgins', 11),
(118, 'Tortel', 11),
(119, 'Punta Arenas', 12),
(120, 'Laguna Blanca', 12),
(121, 'Río Verde', 12),
(122, 'San Gregorio', 12),
(123, 'Cabo de Hornos', 12),
(124, 'Antártica', 12);


-- Crear la tabla 'candidato'
CREATE TABLE IF NOT EXISTS candidato (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insertar datos en la tabla 'candidato'
INSERT INTO candidato (nombre) VALUES
('Candidato 1'),
('Candidato 2');

-- Crear la tabla 'encuesta'
CREATE TABLE IF NOT EXISTS encuesta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insertar datos en la tabla 'encuesta'
INSERT INTO encuesta (descripcion) VALUES
('Web'),
('TV'),
('Redes Sociales'),
('Amigos');

-- Crear la tabla 'votante'
CREATE TABLE IF NOT EXISTS votante (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_apellido VARCHAR(100) NOT NULL,
  alias VARCHAR(50) NOT NULL,
  rut VARCHAR(12) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL,
  comuna_id INT NOT NULL,
  candidato_id INT NOT NULL,
  FOREIGN KEY (comuna_id) REFERENCES comuna(id),
  FOREIGN KEY (candidato_id) REFERENCES candidato(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear la tabla 'votante_encuesta'
CREATE TABLE IF NOT EXISTS votante_encuesta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  votante_id INT NOT NULL,
  encuesta_id INT NOT NULL,
  FOREIGN KEY (votante_id) REFERENCES votante(id),
  FOREIGN KEY (encuesta_id) REFERENCES encuesta(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
