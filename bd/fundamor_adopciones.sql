-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-09-2021 a las 00:11:18
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fundamor_adopciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adopcion`
--

CREATE TABLE `adopcion` (
  `id_adopcion` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `fecha_estudio` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fecha_entrega` timestamp NULL DEFAULT NULL,
  `estado` enum('finalizada','en proceso') NOT NULL DEFAULT 'en proceso',
  `observaciones` varchar(200) DEFAULT NULL,
  `id_adoptante` varchar(45) NOT NULL,
  `id_empleado` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adopcion`
--

INSERT INTO `adopcion` (`id_adopcion`, `id_animal`, `fecha_estudio`, `fecha_entrega`, `estado`, `observaciones`, `id_adoptante`, `id_empleado`) VALUES
(14, 5, '2021-09-05 20:27:05', NULL, 'finalizada', NULL, '10021301293', '1000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adoptante`
--

CREATE TABLE `adoptante` (
  `id_adoptante` varchar(45) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `telefono_casa` varchar(45) DEFAULT NULL,
  `telefono_celular` varchar(45) NOT NULL,
  `ciudad` varchar(90) NOT NULL,
  `ocupacion` varchar(90) NOT NULL,
  `correo` varchar(90) DEFAULT NULL,
  `contrasenia` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adoptante`
--

INSERT INTO `adoptante` (`id_adoptante`, `nombre`, `telefono_casa`, `telefono_celular`, `ciudad`, `ocupacion`, `correo`, `contrasenia`) VALUES
('10021301293', 'Juan camilo perez', NULL, '3156627271312', 'Armenia quindio', 'Vigilante', 'juap@gmail.com', '$2a$10$9pczNMhHVwK96BKxf5qP5uhWGv4cvuQso1vp/kU/NRgTCy1CY9KwS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animal`
--

CREATE TABLE `animal` (
  `id_animal` int(11) NOT NULL,
  `id_fundacion` int(11) NOT NULL,
  `especie` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `fecha_nacimiento` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sexo` varchar(10) NOT NULL,
  `caracteristicas` varchar(300) DEFAULT NULL,
  `sitio_rescate` varchar(190) DEFAULT NULL,
  `fecha_rescate` datetime DEFAULT NULL,
  `color` varchar(45) NOT NULL,
  `vacunas` varchar(100) DEFAULT NULL,
  `esterilizado` tinyint(4) NOT NULL,
  `desparasitado` tinyint(1) NOT NULL,
  `tamanio` varchar(45) NOT NULL,
  `estado` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `animal`
--

INSERT INTO `animal` (`id_animal`, `id_fundacion`, `especie`, `nombre`, `fecha_nacimiento`, `sexo`, `caracteristicas`, `sitio_rescate`, `fecha_rescate`, `color`, `vacunas`, `esterilizado`, `desparasitado`, `tamanio`, `estado`) VALUES
(5, 3, 'perro', 'nerón', '2021-08-09 00:00:00', 'Macho', 'isisi', 'Armenia', '2021-09-10 00:00:00', 'negro', 'sisas', 0, 0, 'Grande', 'Sin adoptar'),
(6, 3, 'perro', 'nerón', '2021-08-09 00:00:00', 'Macho', 'nonse', 'Armenia', '2021-09-10 00:00:00', 'negro', 'sisas', 0, 0, 'Grande', 'Sin adoptar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id_empleado` varchar(45) NOT NULL,
  `id_fundacion` int(11) NOT NULL,
  `correo` varchar(70) NOT NULL,
  `contrasenia` varchar(300) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `rol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `id_fundacion`, `correo`, `contrasenia`, `nombre`, `rol`) VALUES
('1000', 3, 'tester@gmail.com', '$2a$10$7mo4cArMWSWyX7l51qG0Y.UBPCub94gmPVu8UDKKuoV7XM0o7PQjG', 'Test User', 'colaborador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fundacion`
--

CREATE TABLE `fundacion` (
  `id_fundacion` int(11) NOT NULL,
  `correo` varchar(70) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `cuenta_donaciones` varchar(45) DEFAULT NULL,
  `nombre` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fundacion`
--

INSERT INTO `fundacion` (`id_fundacion`, `correo`, `telefono`, `cuenta_donaciones`, `nombre`) VALUES
(3, 'fundacionFundamor@gmail.com', '3128029383', '123213-231123-213', 'Fundacion Fundamor de Calarcá');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_animal`
--

CREATE TABLE `imagen_animal` (
  `id_imagen_animal` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `ruta` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_publicacion`
--

CREATE TABLE `imagen_publicacion` (
  `id_publicacion` int(11) NOT NULL,
  `id_imagen_publicacion` int(11) NOT NULL,
  `ruta` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcion_pregunta`
--

CREATE TABLE `opcion_pregunta` (
  `id_opcion` int(11) NOT NULL,
  `id_pregunta` int(11) DEFAULT NULL,
  `descripcion` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `opcion_pregunta`
--

INSERT INTO `opcion_pregunta` (`id_opcion`, `id_pregunta`, `descripcion`) VALUES
(29, 20, 'SI'),
(30, 20, 'SI'),
(31, 20, 'SIasas'),
(32, 20, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `id_pregunta` int(11) NOT NULL,
  `id_fundacion` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `tipo_pregunta` enum('abierta','multiple') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`id_pregunta`, `id_fundacion`, `titulo`, `tipo_pregunta`) VALUES
(20, 3, '¿HAY ?', 'multiple'),
(21, 3, '¿HAY ?', 'multiple');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta_adopcion`
--

CREATE TABLE `pregunta_adopcion` (
  `id_pregunta_adopcion` int(11) NOT NULL,
  `id_adopcion` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `respuesta` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `id_publicacion` int(11) NOT NULL,
  `id_fundacion` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `cuerpo` text NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`id_publicacion`, `id_fundacion`, `titulo`, `cuerpo`, `fecha_creacion`) VALUES
(24, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:06:13'),
(25, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:06:53'),
(26, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:13:23'),
(27, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:13:47'),
(28, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:14:09'),
(29, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:16:10'),
(30, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:16:28'),
(31, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:17:10'),
(32, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:20:27'),
(33, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:20:59'),
(34, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:21:37'),
(35, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:21:55'),
(36, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:22:17'),
(37, 3, 'TEST DE NOTICIA', 'Vacunas en la uniquindio', '2021-09-05 03:23:26'),
(38, 3, 'TEST DE NOTICIA22', 'Vacunas en la uniquindio', '2021-09-05 22:07:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimiento`
--

CREATE TABLE `seguimiento` (
  `id_adopcion` int(11) NOT NULL,
  `id_seguimiento` int(11) NOT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `anotaciones` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `seguimiento`
--

INSERT INTO `seguimiento` (`id_adopcion`, `id_seguimiento`, `fecha_hora`, `anotaciones`) VALUES
(14, 4, '2021-09-05 21:20:47', 'No contesta'),
(14, 5, '2021-09-05 21:20:48', 'No contesta');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adopcion`
--
ALTER TABLE `adopcion`
  ADD PRIMARY KEY (`id_adopcion`),
  ADD KEY `fkIdx_135` (`id_adoptante`),
  ADD KEY `fkIdx_171` (`id_empleado`),
  ADD KEY `FK_190` (`id_animal`);

--
-- Indices de la tabla `adoptante`
--
ALTER TABLE `adoptante`
  ADD PRIMARY KEY (`id_adoptante`);

--
-- Indices de la tabla `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`id_animal`),
  ADD KEY `fk_animal_fundacion1_idx` (`id_fundacion`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id_empleado`),
  ADD KEY `id_fundacion_fk1` (`id_fundacion`);

--
-- Indices de la tabla `fundacion`
--
ALTER TABLE `fundacion`
  ADD PRIMARY KEY (`id_fundacion`);

--
-- Indices de la tabla `imagen_animal`
--
ALTER TABLE `imagen_animal`
  ADD PRIMARY KEY (`id_imagen_animal`),
  ADD KEY `fkIdx_178` (`id_animal`);

--
-- Indices de la tabla `imagen_publicacion`
--
ALTER TABLE `imagen_publicacion`
  ADD PRIMARY KEY (`id_imagen_publicacion`,`id_publicacion`),
  ADD KEY `fkIdx_79` (`id_publicacion`);

--
-- Indices de la tabla `opcion_pregunta`
--
ALTER TABLE `opcion_pregunta`
  ADD PRIMARY KEY (`id_opcion`),
  ADD KEY `fk_pregunta_idx` (`id_pregunta`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`id_pregunta`),
  ADD UNIQUE KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_fk_respuesta_pregunta` (`id_fundacion`);

--
-- Indices de la tabla `pregunta_adopcion`
--
ALTER TABLE `pregunta_adopcion`
  ADD PRIMARY KEY (`id_pregunta_adopcion`),
  ADD KEY `FK_141_idx` (`id_adopcion`),
  ADD KEY `fkIdx_141` (`id_pregunta`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`id_publicacion`),
  ADD KEY `fkIdx_206` (`id_fundacion`);

--
-- Indices de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD PRIMARY KEY (`id_seguimiento`),
  ADD KEY `id_adopcion_fk` (`id_adopcion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adopcion`
--
ALTER TABLE `adopcion`
  MODIFY `id_adopcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `animal`
--
ALTER TABLE `animal`
  MODIFY `id_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `fundacion`
--
ALTER TABLE `fundacion`
  MODIFY `id_fundacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `imagen_animal`
--
ALTER TABLE `imagen_animal`
  MODIFY `id_imagen_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `imagen_publicacion`
--
ALTER TABLE `imagen_publicacion`
  MODIFY `id_imagen_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `opcion_pregunta`
--
ALTER TABLE `opcion_pregunta`
  MODIFY `id_opcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `pregunta_adopcion`
--
ALTER TABLE `pregunta_adopcion`
  MODIFY `id_pregunta_adopcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  MODIFY `id_seguimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adopcion`
--
ALTER TABLE `adopcion`
  ADD CONSTRAINT `FK_134` FOREIGN KEY (`id_adoptante`) REFERENCES `adoptante` (`id_adoptante`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_170` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_190` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id_animal`);

--
-- Filtros para la tabla `animal`
--
ALTER TABLE `animal`
  ADD CONSTRAINT `fk_animal_fundacion1` FOREIGN KEY (`id_fundacion`) REFERENCES `fundacion` (`id_fundacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `id_fundacion_fk1` FOREIGN KEY (`id_fundacion`) REFERENCES `fundacion` (`id_fundacion`);

--
-- Filtros para la tabla `imagen_animal`
--
ALTER TABLE `imagen_animal`
  ADD CONSTRAINT `FK_177` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id_animal`);

--
-- Filtros para la tabla `imagen_publicacion`
--
ALTER TABLE `imagen_publicacion`
  ADD CONSTRAINT `FK_78` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id_publicacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `opcion_pregunta`
--
ALTER TABLE `opcion_pregunta`
  ADD CONSTRAINT `fk_pregunta` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `id_fk_respuesta_pregunta` FOREIGN KEY (`id_fundacion`) REFERENCES `fundacion` (`id_fundacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pregunta_adopcion`
--
ALTER TABLE `pregunta_adopcion`
  ADD CONSTRAINT `FK_140` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`),
  ADD CONSTRAINT `FK_141` FOREIGN KEY (`id_adopcion`) REFERENCES `adopcion` (`id_adopcion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `FK_205` FOREIGN KEY (`id_fundacion`) REFERENCES `fundacion` (`id_fundacion`);

--
-- Filtros para la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD CONSTRAINT `id_adopcion_fk` FOREIGN KEY (`id_adopcion`) REFERENCES `adopcion` (`id_adopcion`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
