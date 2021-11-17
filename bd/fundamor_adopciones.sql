-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2021 a las 19:12:03
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
  `fecha_estudio` date NOT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `estado` enum('finalizada','en proceso') NOT NULL DEFAULT 'en proceso',
  `observaciones` varchar(200) DEFAULT NULL,
  `id_adoptante` varchar(45) NOT NULL,
  `id_empleado` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adopcion`
--

INSERT INTO `adopcion` (`id_adopcion`, `id_animal`, `fecha_estudio`, `fecha_entrega`, `estado`, `observaciones`, `id_adoptante`, `id_empleado`) VALUES
(2, 1, '2021-09-07', NULL, 'en proceso', NULL, '10023', '1001');

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
('10023', 'Juan camilo perez', NULL, '3156627271312', 'Armenia quindio', 'Odontologo', 'jua2p@gmail.com', '$2a$10$rv.HYzeHlMnpA/QM4s7SQ.naYmxHYep0A65b0CvOfPpe1fQv3KFzi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animal`
--

CREATE TABLE `animal` (
  `id_animal` int(11) NOT NULL,
  `id_fundacion` int(11) NOT NULL,
  `especie` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `caracteristicas` varchar(300) DEFAULT NULL,
  `sitio_rescate` varchar(190) DEFAULT NULL,
  `fecha_rescate` date DEFAULT NULL,
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
(1, 2, 'perro', 'nerón', '2021-08-09', 'macho', 'nonse', 'Armenia', '2021-09-10', 'negro', 'sisas', 1, 0, 'grande', 'Adoptado'),
(27, 2, 'perro', 'sadsad', '2021-11-10', 'macho', 'assadsad', 'asdasd', '2021-11-05', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(28, 2, 'perro', 'sadsad', '2021-11-10', 'macho', 'assadsad', 'asdasd', '2021-11-05', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(29, 2, 'perro', 'sadsad', '2021-11-10', 'macho', 'assadsad', 'asdasd', '2021-11-05', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(30, 2, 'gato', 'sdada', '2021-11-10', 'macho', 'asdsad', 'sadsad', '2021-11-11', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(31, 2, 'gato', 'asdasd', '2021-11-05', 'macho', 'asdsad', 'sadasd', '2021-11-12', 'cafe', 'asdasdasd', 1, 1, 'mediano', 'Sin adoptar'),
(32, 2, 'gato', 'xzcxzc', '2021-11-11', 'macho', 'sadasd', 'sadasd', '2021-11-12', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(33, 2, 'gato', 'xzcxzc', '2021-11-11', 'macho', 'sadasd', 'sadasd', '2021-11-12', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(34, 2, 'gato', 'xzcxzc', '2021-11-11', 'macho', 'sadasd', 'sadasd', '2021-11-12', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(35, 2, 'gato', 'xzcxzc', '2021-11-11', 'macho', 'sadasd', 'sadasd', '2021-11-12', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(36, 2, 'perro', 'sdasd', '2021-11-11', 'macho', 'sadad', 'asdasd', '2021-11-02', 'sadasd', 'sdasdasd', 1, 1, 'mediano', 'Sin adoptar'),
(37, 2, 'perro', 'sdasd', '2021-11-11', 'macho', 'sadad', 'asdasd', '2021-11-02', 'sadasd', 'sdasdasd', 1, 1, 'mediano', 'Sin adoptar'),
(38, 2, 'perro', 'adssad', '2021-11-05', 'hembra', 'asdsad', 'sadasd', '2021-11-10', 'asdasd', 'sadasd', 1, 0, 'mediano', 'Sin adoptar'),
(39, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(40, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(41, 2, 'gato', 'Morioh', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(42, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(43, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(44, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(45, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(46, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(47, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(48, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(49, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(50, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(51, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(52, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(53, 2, 'gato', 'asdsad', '2021-11-11', 'macho', 'sadsad', 'sadas', '2021-11-03', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(54, 2, 'perro', 'dad', '2021-11-11', 'macho', 'sadasd', 'asdasd', '2021-11-13', 'sadd', 'sadasd', 1, 1, 'mediano', 'Sin adoptar'),
(56, 2, 'gato', 'sadsad', '2021-11-06', 'macho', 'asdsad', 'sadasd', '2021-11-10', 'asdasd', 'sadsad', 1, 1, 'pequeño', 'Sin adoptar'),
(57, 2, 'gato', 'sadsad', '2021-11-06', 'macho', 'asdsad', 'sadasd', '2021-11-10', 'asdasd', 'sadsad', 1, 1, 'pequeño', 'Sin adoptar'),
(58, 2, 'gato', 'asdsad', '2021-11-03', 'macho', 'sadsad', 'sadas', '2021-11-04', 'sadasd', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(59, 2, 'gato', 'asd', '2021-11-12', 'macho', 'sadasd', 'sadsad', '2021-11-10', 'asdasd', 'sadasd', 1, 1, 'grande', 'Sin adoptar');

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
('1001', 2, 'aurelio@gmail.com', '$2a$10$PW9wNChN5NlmhLg3YBb3yeFh06uno/D1IeCeRgloW1bGBiY/YuLD.', 'Test User2', 'colaborador'),
('11005095547', 2, 'juanp@gmailt.com', '12345678', 'juan danez', 'colaborador'),
('1232132', 2, 'elmerw@gmail.com', '$2a$10$x68khiImilla.Kpepxw8UOeNDQLhuWLA0CDhV16iQvVtQqWfCsRCG', 'elmer', 'colaborador'),
('2132139', 2, 'jan@fundamor.com', '$2a$10$O7LILFz6q3gOrEJUKrGfJusb2MWwHUAPDmhGBJ6w6n/ZqfTuDxKgC', 'jan', 'colaborador'),
('2837362', 2, 'hernan@gmail.com', '$2a$10$LiBmfojREVeccWLK3nggp.OU06ArgQQHU9265gJQki5fI7oXJ90C6', 'hernan', 'colaborador'),
('32213123', 2, 'paquito@fundamor.com', '$2a$10$s0OhGT5EXK.ImOLiuWNoW./9ewEUZERP2Tuzy0YHLWDvbdVoWHNoK', 'paco', 'colaborador');

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
(2, 'fundamor@gmail.com', '1233', '312321', 'Fundacion fundamor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_animal`
--

CREATE TABLE `imagen_animal` (
  `id_imagen_animal` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `ruta` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagen_animal`
--

INSERT INTO `imagen_animal` (`id_imagen_animal`, `id_animal`, `ruta`) VALUES
(11, 35, 'images/animalImages/04cfb401-4620-47c5-944f-528a88052c9e.jpg'),
(12, 35, 'images/animalImages/4e3fc31c-17ab-4531-b0e2-2b90fd5c6023.jpg'),
(13, 35, 'images/animalImages/92b39cf6-d4f2-4d85-ac48-3ec6149bedc3.jpg'),
(14, 39, 'images/animalImages/40c0a5b9-6d34-43d7-8ae7-10092b04b1e1.jpg'),
(15, 40, 'images/animalImages/4a6afc36-0cfd-4202-acaa-945470c0874f.jpg'),
(17, 42, 'images/animalImages/404cb80c-cd55-4a19-838e-7cbf4c70155a.jpg'),
(18, 43, 'images/animalImages/b50fe136-8676-4bbc-945b-d7c7d2bd0103.jpg'),
(19, 44, 'images/animalImages/24eaf879-ce4e-403e-8246-efc232b089f3.jpg'),
(20, 45, 'images/animalImages/7bf2da70-3102-44a9-9cd0-420431396e37.jpg'),
(21, 46, 'images/animalImages/e4c5f90a-bfbb-4d3d-aa23-eb0f1d7cfe21.jpg'),
(22, 47, 'images/animalImages/d1d0d83d-0a76-40b9-8a58-ef1336a5c0b7.jpg'),
(23, 48, 'images/animalImages/e234aee9-fb04-47a1-acdf-a862487e66da.jpg'),
(35, 41, 'images/animalImages/2a9d9957-6d94-4feb-8ab1-1eb7a072bc3c.jpg');

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
(10, 29, 'Sisas'),
(11, 29, 'Nonas');

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
(27, 2, 'sadsad', 'abierta'),
(29, 2, 'melos?', 'multiple');

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
  `fecha_creacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimiento`
--

CREATE TABLE `seguimiento` (
  `id_adopcion` int(11) NOT NULL,
  `id_seguimiento` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `anotaciones` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `seguimiento`
--

INSERT INTO `seguimiento` (`id_adopcion`, `id_seguimiento`, `fecha`, `anotaciones`) VALUES
(2, 1, '2021-09-07', 'No contesta');

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
  MODIFY `id_adopcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `animal`
--
ALTER TABLE `animal`
  MODIFY `id_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `fundacion`
--
ALTER TABLE `fundacion`
  MODIFY `id_fundacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagen_animal`
--
ALTER TABLE `imagen_animal`
  MODIFY `id_imagen_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `imagen_publicacion`
--
ALTER TABLE `imagen_publicacion`
  MODIFY `id_imagen_publicacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `opcion_pregunta`
--
ALTER TABLE `opcion_pregunta`
  MODIFY `id_opcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `pregunta_adopcion`
--
ALTER TABLE `pregunta_adopcion`
  MODIFY `id_pregunta_adopcion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  MODIFY `id_seguimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  ADD CONSTRAINT `FK_177` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id_animal`) ON DELETE CASCADE;

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
