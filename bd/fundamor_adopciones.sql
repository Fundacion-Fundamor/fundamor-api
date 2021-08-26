-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-08-2021 a las 04:55:08
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
  `estado` enum('Finalizada','En proceso') NOT NULL DEFAULT 'En proceso',
  `observaciones` varchar(200) DEFAULT NULL,
  `id_adoptante` varchar(45) NOT NULL,
  `id_empleado` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adopcion`
--

INSERT INTO `adopcion` (`id_adopcion`, `id_animal`, `fecha_estudio`, `fecha_entrega`, `estado`, `observaciones`, `id_adoptante`, `id_empleado`) VALUES
(1, 1, '2021-08-17', NULL, 'En proceso', 'sasd', '10050932423', '2'),
(2, 1, '2021-08-17', NULL, 'En proceso', 'sasd', '10050932423', '2'),
(3, 1, '2021-08-25', NULL, 'En proceso', '123', '012390132', '2'),
(4, 1, '2021-08-25', NULL, 'En proceso', '123', '012390132', '2');

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
('012390132', 'andres', '123', '123', '123123', '123', '123', '123'),
('10021301293', 'Juan camilo perez', NULL, '3156627271312', 'Armenia quindio', 'Odontologo', 'juap@gmail.com', '$2a$10$kyaPtVvlb/ketPSGoIBvYeClH2WDo1e41UJ6a7tmdWMh8oaTRl4/S'),
('10050932423', 'Carlos andres Gonzales', '312', '', 'asd', 'sad', 'sad', 'sad');

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
  `vacunas` varchar(100) NOT NULL,
  `esterilizado` tinyint(4) NOT NULL,
  `desparasitado` tinyint(1) NOT NULL,
  `tamanio` varchar(45) NOT NULL,
  `estado` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `animal`
--

INSERT INTO `animal` (`id_animal`, `id_fundacion`, `especie`, `nombre`, `fecha_nacimiento`, `sexo`, `caracteristicas`, `sitio_rescate`, `fecha_rescate`, `color`, `vacunas`, `esterilizado`, `desparasitado`, `tamanio`, `estado`) VALUES
(1, 1, 'gato', 'paco', '2021-08-10', '', 'agradable', 'guaduales de la villa', '2021-08-09', 'pardo', 'sisi', 1, 1, 'mediano', 'En proceso');

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
('1000', 1, 'juan@gmail.com', '$2a$10$W9xRMFd.pJd2CSHPp.beuOsYbVKkb5vChHxgHfGtO1J1WFiHBSn.S', 'juan talamera', 'colaborador'),
('2', 1, 'test@gmail.com', '12345678', 'Test User ', 'administrador');

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
(1, 'fundamor@gmail.com', '3142163213', '102-213-1232-31123', 'Fundación Fundamor de Calarcá');

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
-- Estructura de tabla para la tabla `opcion_pregunta`
--

CREATE TABLE `opcion_pregunta` (
  `id_opcion` int(11) NOT NULL,
  `id_pregunta` int(11) DEFAULT NULL,
  `descripcion` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Estructura de tabla para la tabla `seguimiento`
--

CREATE TABLE `seguimiento` (
  `id_adopcion` int(11) NOT NULL,
  `id_seguimiento` int(11) NOT NULL,
  `fecha_hora` date NOT NULL,
  `anotaciones` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  MODIFY `id_adopcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `animal`
--
ALTER TABLE `animal`
  MODIFY `id_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `fundacion`
--
ALTER TABLE `fundacion`
  MODIFY `id_fundacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `imagen_animal`
--
ALTER TABLE `imagen_animal`
  MODIFY `id_imagen_animal` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `opcion_pregunta`
--
ALTER TABLE `opcion_pregunta`
  MODIFY `id_opcion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pregunta_adopcion`
--
ALTER TABLE `pregunta_adopcion`
  MODIFY `id_pregunta_adopcion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  MODIFY `id_seguimiento` int(11) NOT NULL AUTO_INCREMENT;

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
-- Filtros para la tabla `opcion_pregunta`
--
ALTER TABLE `opcion_pregunta`
  ADD CONSTRAINT `fk_pregunta` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Filtros para la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD CONSTRAINT `id_adopcion_fk` FOREIGN KEY (`id_adopcion`) REFERENCES `adopcion` (`id_adopcion`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
