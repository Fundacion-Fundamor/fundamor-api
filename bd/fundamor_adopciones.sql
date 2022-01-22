-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2022 a las 01:22:25
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.3.33

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
  `estado` enum('en espera','finalizada','en proceso') NOT NULL DEFAULT 'en proceso',
  `observaciones` varchar(300) DEFAULT NULL,
  `id_adoptante` varchar(45) NOT NULL,
  `id_empleado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adopcion`
--

INSERT INTO `adopcion` (`id_adopcion`, `id_animal`, `fecha_estudio`, `fecha_entrega`, `estado`, `observaciones`, `id_adoptante`, `id_empleado`) VALUES
(41, 54, '2022-01-12', '2022-01-14', 'finalizada', 'asd', '100490344942', '1001'),
(42, 72, '2022-01-18', NULL, 'en espera', NULL, '123123', NULL),
(43, 64, '2022-01-18', NULL, 'en espera', NULL, '21213213', NULL),
(44, 64, '2022-01-18', NULL, 'en espera', NULL, '21213213', NULL),
(45, 64, '2022-01-18', NULL, 'en espera', NULL, '231', NULL),
(46, 70, '2022-01-18', NULL, 'en espera', NULL, '123123', NULL),
(47, 53, '2022-01-20', '2022-01-11', 'finalizada', 'asdadsadad', '100490344942', '1001'),
(48, 56, '2022-01-20', '2022-01-31', 'finalizada', 'sadsad', '383287243', '1001');

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
  `correo` varchar(90) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adoptante`
--

INSERT INTO `adoptante` (`id_adoptante`, `nombre`, `telefono_casa`, `telefono_celular`, `ciudad`, `ocupacion`, `correo`) VALUES
('100490344942', 'Carlos', '132', 'as', 'avenida bolivar', 'cirujano', 'carlos@gmail.com'),
('123123', 'asd', NULL, '213', 'sad', 'ad', NULL),
('21213213', 'sad', NULL, '213123', 'asdasd', 'asdasd', NULL),
('231', 'sad', NULL, '1321', 'sad', 'asd', NULL),
('383287243', 'Maria', '123', '213', '123', 'nose', NULL);

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
  `estado` enum('Adoptado','Sin adoptar','En proceso') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `animal`
--

INSERT INTO `animal` (`id_animal`, `id_fundacion`, `especie`, `nombre`, `fecha_nacimiento`, `sexo`, `caracteristicas`, `sitio_rescate`, `fecha_rescate`, `color`, `vacunas`, `esterilizado`, `desparasitado`, `tamanio`, `estado`) VALUES
(27, 2, 'perro', 'paco', '2021-11-10', 'macho', 'assadsad', 'asdasd', '2021-11-05', 'sadsad', 'sadsad', 1, 1, 'mediano', 'En proceso'),
(28, 2, 'perro', 'sadsad', '2021-11-10', 'macho', 'assadsad', 'asdasd', '2021-11-05', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Adoptado'),
(30, 2, 'gato', 'sdada', '2021-11-10', 'macho', 'asdsad', 'sadsad', '2021-11-11', 'sadsad', 'sadsad', 1, 1, 'mediano', 'En proceso'),
(36, 2, 'perro', 'sdasd', '2021-11-11', 'macho', 'sadad', 'asdasd', '2021-11-02', 'sadasd', 'sdasdasd', 1, 1, 'mediano', 'Sin adoptar'),
(37, 2, 'perro', 'sdasd', '2021-11-11', 'macho', 'sadad', 'asdasd', '2021-11-02', 'sadasd', 'sdasdasd', 1, 1, 'mediano', 'Adoptado'),
(44, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(45, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(46, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(47, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(48, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(49, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(50, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(51, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(52, 2, 'gato', 'sadsa', '2021-11-05', 'hembra', 'sadsad', 'asd', '2021-11-12', 'sadasd', 'asdsad', 1, 1, 'mediano', 'Sin adoptar'),
(53, 2, 'gato', 'asdsad', '2021-11-11', 'macho', 'sadsad', 'sadas', '2021-11-03', 'sadsad', 'sadsad', 1, 1, 'mediano', 'Adoptado'),
(54, 2, 'perro', 'dad', '2021-11-11', 'macho', 'sadasd', 'asdasd', '2021-11-13', 'sadd', 'sadasd', 1, 1, 'mediano', 'Adoptado'),
(56, 2, 'gato', 'sadsad', '2021-11-06', 'macho', 'asdsad', 'sadasd', '2021-11-10', 'asdasd', 'sadsad', 1, 1, 'pequeño', 'Adoptado'),
(57, 2, 'gato', 'sadsad', '2021-11-06', 'macho', 'asdsad', 'sadasd', '2021-11-10', 'asdasd', 'sadsad', 1, 1, 'pequeño', 'Sin adoptar'),
(58, 2, 'gato', 'asdsad', '2021-11-03', 'macho', 'sadsad', 'sadas', '2021-11-04', 'sadasd', 'sadsad', 1, 1, 'mediano', 'Sin adoptar'),
(59, 2, 'gato', 'asd', '2021-11-12', 'macho', 'sadasd', 'sadsad', '2021-11-10', 'asdasd', 'sadasd', 1, 1, 'grande', 'Adoptado'),
(64, 2, 'perro', 'Coronel', '2021-12-01', 'macho', 'Es muy amigable', 'Barrio villa inglesa', '2021-12-09', 'café', 'Antirrabica', 1, 1, 'mediano', 'Sin adoptar'),
(67, 2, 'perro', 'Juaco', '2022-01-05', 'macho', 'Es muy amigable', 'La fachada, armenia quindio', '2022-01-05', '123', 'Antirrabica', 1, 1, 'mediano', 'En proceso'),
(68, 2, 'perro', 'Nerón', '2022-01-03', 'macho', 'Aminagble', 'Barrio guaduales, Calarcá Quindío', '2022-01-05', 'café con manchas', '', 0, 1, 'pequeño', 'En proceso'),
(69, 2, 'gato', 'Manua', '2022-01-01', 'macho', '', '', NULL, 'Blanco', '', 0, 0, 'mediano', 'En proceso'),
(70, 2, 'perro', 'Zeus', '2005-01-05', 'macho', '', '', NULL, 'Café', '', 0, 0, 'grande', 'Sin adoptar'),
(72, 2, 'perro', 'Lluvia', '2022-01-06', 'macho', 'Beagle enrazado', 'Armenia Quindio', '2022-01-04', 'Negro', '', 1, 0, 'mediano', 'En proceso'),
(75, 2, 'perro', 'juaco', '2022-01-12', 'macho', 'es un perro amigable', 'La fachada armeniasadadsa', '2022-01-13', 'cafe con manchas', 'asdasd sajd sakjd askjd kasj dkjsa dkj sakdj asd sa sa a asd ', 1, 0, 'mediano', 'Sin adoptar');

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
  `rol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `id_fundacion`, `correo`, `contrasenia`, `nombre`, `rol`) VALUES
('1001', 2, 'luzmari0987@gmail.com', '$2a$10$zaS77dgdIKWxCW41heSAc.iUf2/KSEJQkj5hxK7glXqoBSui2VQ9C', 'Luz marina Ramirez gomez', 'administrador'),
('10011', 2, 'aureliomejiaa2000@malo.com', '', 'Aurelio mejia', 'administrador'),
('1005905547', 2, 'hernan@fundamor.com', '$2a$10$4gTy45cEJRv/jFIXtQwhWuHumiafvXO3XcV4deYlKabXK8MA0j3y.', 'Hernan camacho', 'administrador'),
('123123', 2, 'beatriz_elena0292@gmail.comx', '$2a$10$zaS77dgdIKWxCW41heSAc.iUf2/KSEJQkj5hxK7glXqoBSui2VQ9C', 'Beatriz elena aristizabal', 'colaborador'),
('1293892183', 2, 'luis@fundamor.com', '$2a$10$rFOyBzv7WQUZsfNAShPgoObR3XdZppLajy7U5LiSspmE6C9Ce7PAa', 'luis', 'administrador'),
('97435728312', 2, 'melqui@maloca.co', '$2a$10$Yph2BGtq4CqNhjO3nF.sOOVc7jZhKqC0w4/wSCPiS9oV9qpwDnBfi', 'Melquieadez', 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fundacion`
--

CREATE TABLE `fundacion` (
  `id_fundacion` int(11) NOT NULL,
  `correo` varchar(70) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `cuenta_donaciones` varchar(45) DEFAULT NULL,
  `nombre` varchar(70) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `mision` text DEFAULT NULL,
  `vision` text DEFAULT NULL,
  `url_mapa` text DEFAULT NULL,
  `url_video` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fundacion`
--

INSERT INTO `fundacion` (`id_fundacion`, `correo`, `telefono`, `cuenta_donaciones`, `nombre`, `direccion`, `mision`, `vision`, `url_mapa`, `url_video`) VALUES
(2, 'fundamor_calarca@hotmail.com adopciones_fundamor@hotmail.com', '+57 313 6309884', '102093833213', 'Fundacion fundamor', 'Calarcá, Quindío Colombia2', '        La Fundación Protectora y de amor por los Animales - de Calarcá FUNDAMOR DE\r\n                                            CALARCÁ es una organización sin animo de lucro que trabaja por la\r\n                                            reclamación de\r\n                                            los\r\n                                            derechos y el bienestar de los animales,\r\n                                            por la ejecución de programas para su atención, protección y rehabilitación;\r\n                                            brindando educación a la comunidad para su\r\n                                            adopción y tenencia responsable buscando como objetivo no solamente el\r\n                                            establecimiento de principios de ética animal y\r\n                                            su bienestar sino también la recuperación del espacio publico saludable\r\n                                            mediante la reducción del impacto que su\r\n                                            abandono genera en el medio ambiente, la salud publica y el bienestar de la\r\n                                            comunidad.\r\n                                            <br>\r\n                                            La Fundación Protectora y de amor por los Animales - de Calarcá propende por\r\n                                            la erradicación de toda forma de maltrato\r\n                                            de cualquier especie animal, doméstica o silvestre, cualquiera que sea su\r\n                                            destinación, o su hábitat.', 'La Fundación Protectora y de amor por los Animales - de Calarcá, será\r\n                                            reconocida a nivel local y global por ser una\r\n                                            organización sin ánimo de lucro comprometida con el bienestar animal y su\r\n                                            calidad de vida, la salud pública y la\r\n                                            concientización encaminada a la protección del medio ambiente y el entorno\r\n                                            del ciudadano.\r\n                                            <br>\r\n                                            Contribuirá al bienestar de la población mediante la implementación de\r\n                                            campañas de amor, respeto y responsabilidad por\r\n                                            los animales con el fin de que ni uno solo sea abandonado ni maltratado.', '<iframe                     src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5412.3478395669035!2d-75.64425884348316!3d4.5295807562608585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1642367833039!5m2!1ses!2sco\"                     width=\"1200\" height=\"600\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>', 'https://www.youtube.com/watch?v=meTbxyZh9K8');

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
(19, 44, 'images/animalImages/24eaf879-ce4e-403e-8246-efc232b089f3.jpg'),
(20, 45, 'images/animalImages/7bf2da70-3102-44a9-9cd0-420431396e37.jpg'),
(21, 46, 'images/animalImages/e4c5f90a-bfbb-4d3d-aa23-eb0f1d7cfe21.jpg'),
(22, 47, 'images/animalImages/d1d0d83d-0a76-40b9-8a58-ef1336a5c0b7.jpg'),
(23, 48, 'images/animalImages/e234aee9-fb04-47a1-acdf-a862487e66da.jpg'),
(42, 27, 'images/animalImages/3cf8a6f1-c247-4d3a-9a3e-b8424d37c8ee.png'),
(43, 64, 'images/animalImages/a679f97f-7ef9-45e5-970b-d727e020d29d.jpg'),
(44, 64, 'images/animalImages/b8cce235-60ad-44ae-b4d2-1048f4b3e458.jpg'),
(45, 64, 'images/animalImages/769d911c-f623-4542-85b0-3b3f89e7e6af.jpg'),
(46, 64, 'images/animalImages/3c8315d4-4ef0-4882-9ce5-15dff9926c69.jpg'),
(47, 64, 'images/animalImages/5d7b78e9-6c32-44d7-a34c-bb1488967095.jpg'),
(50, 67, 'images/animalImages/7e2a0f70-844d-44a5-affd-ff9c9b8c70bc.png'),
(51, 68, 'images/animalImages/2965d4de-2a6b-488f-aee7-b83d3af23e86.png'),
(52, 68, 'images/animalImages/a83dc9aa-1e76-416a-bd18-dd83a9039b0a.png'),
(53, 69, 'images/animalImages/1642c245-0fea-4d19-97b9-49b269fe9a6d.jpg'),
(54, 69, 'images/animalImages/94d38015-9ce5-438b-ae6d-fd6e4ef07196.png'),
(55, 69, 'images/animalImages/bd8dc506-d832-470d-b908-a1e6e6e32cac.png'),
(56, 69, 'images/animalImages/97191224-7a5a-456d-b60f-54ddfed8b646.png'),
(57, 69, 'images/animalImages/4b6f158c-b89f-4b9c-a3a9-530c057dd512.jpg'),
(58, 69, 'images/animalImages/0f3f54e4-f71b-4f06-bb40-f979f3823e01.jpg'),
(59, 69, 'images/animalImages/267a4aea-f8e7-4856-bb39-4e9aa0bfde83.jpg'),
(60, 69, 'images/animalImages/8ff2415a-e713-4498-9aa0-ad188cbcfadf.jpg'),
(61, 70, 'images/animalImages/6ecc603f-a7a6-41cf-b05b-3cb8074b2a9c.jpg'),
(62, 70, 'images/animalImages/7cd1320a-b858-4187-bc4b-5da646475d98.jpg'),
(63, 70, 'images/animalImages/c2d195ea-dcaa-4b33-a968-a67eabcf7e52.jpg'),
(64, 70, 'images/animalImages/ad423fa2-72fb-476a-98ad-21261c663ac6.png'),
(65, 70, 'images/animalImages/7159d1ab-8409-4802-88cf-381cb14ffc05.png'),
(66, 70, 'images/animalImages/4e24310e-1100-40e4-95b2-b87ebac0fd5b.jpg'),
(69, 72, 'images/animalImages/102d207d-a5a4-496c-9704-84194932d418.jpg'),
(70, 72, 'images/animalImages/7a108f06-f51a-46cd-b849-a5e12974f9e6.jpg'),
(71, 72, 'images/animalImages/7adf6bd5-8c25-4f94-a127-f4386df278e7.png'),
(83, 28, 'images/animalImages/f928d991-b3cd-4b60-a220-03b82a638baa.jpg'),
(84, 45, 'images/animalImages/921aeec9-9355-4279-b14d-309154c3890d.jpg'),
(85, 45, 'images/animalImages/3e46cde3-a11a-4319-b4cf-388dc881ee26.jpg'),
(91, 75, 'images/animalImages/031a6bcb-3252-4f8f-9069-3fef8c676b26.jpg'),
(94, 75, 'images/animalImages/79817e0c-1cb4-4a91-8580-1211aa15e74a.jpg'),
(95, 75, 'images/animalImages/8e3e7bb2-dcab-4686-a007-0a16c57f2aa9.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_publicacion`
--

CREATE TABLE `imagen_publicacion` (
  `id_publicacion` int(11) NOT NULL,
  `id_imagen_publicacion` int(11) NOT NULL,
  `ruta` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagen_publicacion`
--

INSERT INTO `imagen_publicacion` (`id_publicacion`, `id_imagen_publicacion`, `ruta`) VALUES
(3, 1, 'images/postImages/0072f105-8290-4d22-bbc3-fd4c1ab51fce.png'),
(7, 2, 'images/postImages/91e5f151-b1a0-4857-870c-1ec828712a2d.png'),
(7, 3, 'images/postImages/aa7267f2-64d5-4f61-885e-e4d06ea8b6a9.jpg'),
(1, 5, 'images/postImages/a5fc8651-ec0a-4813-b6d3-2b48dbdef032.jpg');

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
(57, 55, 'si'),
(60, 69, 'thanos'),
(61, 69, 'thor'),
(66, 55, 'no'),
(67, 73, 'sadasd'),
(68, 73, 'asdasd');

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
(35, 2, 'Le interesa', 'abierta'),
(55, 2, 'Esta de acuerdo con destinar un lugar para el perro', 'multiple'),
(60, 2, 'cuando voy a vivir', 'abierta'),
(69, 2, 'Quien soy', 'multiple'),
(72, 2, 'sdasdsad', 'abierta'),
(73, 2, 'sdsaddsa', 'multiple');

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

--
-- Volcado de datos para la tabla `pregunta_adopcion`
--

INSERT INTO `pregunta_adopcion` (`id_pregunta_adopcion`, `id_adopcion`, `id_pregunta`, `respuesta`) VALUES
(94, 41, 35, 'ninas'),
(95, 41, 55, 'si'),
(96, 41, 60, 'nunca'),
(97, 41, 69, 'thanos'),
(99, 42, 35, 'sad'),
(100, 42, 60, 'asd'),
(101, 42, 55, 'si'),
(102, 42, 69, 'thanos'),
(104, 43, 35, 'sad'),
(105, 43, 60, 'asd'),
(106, 43, 55, 'si'),
(107, 43, 69, 'thanos'),
(109, 44, 35, 'sad'),
(110, 44, 60, 'asd'),
(111, 44, 55, 'si'),
(112, 44, 69, 'thanos'),
(114, 45, 35, 'sadsad'),
(115, 45, 60, 'asdad'),
(116, 45, 55, 'si'),
(117, 45, 69, 'thanos'),
(119, 46, 35, 'asda'),
(120, 46, 60, 'asd'),
(121, 46, 55, 'si'),
(122, 46, 69, 'thanos'),
(124, 47, 35, 'asd'),
(125, 47, 55, 'si'),
(126, 47, 60, 'asdsad'),
(127, 47, 69, 'thanos'),
(129, 48, 35, 'sad'),
(130, 48, 55, 'si'),
(131, 48, 60, 'sad'),
(132, 48, 69, 'thanos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `id_publicacion` int(11) NOT NULL,
  `id_fundacion` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `cuerpo` text NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`id_publicacion`, `id_fundacion`, `titulo`, `cuerpo`, `fecha_creacion`) VALUES
(1, 2, 'Se reduce el periodo para aplicar dosis de refuerzo en Colombia', 'Este martes, el presidente Iván Duque y el ministro de Salud, Fernando Ruiz, señalaron en rueda de prensa nuevos lineamientos que responden al nivel de contagio de la variante ómicron. Pese a que se ha demostrado el alto nivel de contagio de esta variante, no dejaron de señalar la evidencia de que gracias a la vacunación masiva, el reciente aumento de casos en el país no ha sido equivalente a un aumento de muertes ni de casos llevados a UCI.', '2022-01-14 02:23:33'),
(2, 2, 'asd', 'el dia de ayer', '2022-01-12 00:00:00'),
(3, 2, 'sad', 'asad', '2022-01-12 00:00:00'),
(5, 2, 'asd', 'sadsads', '2022-01-12 03:35:38'),
(7, 2, 'El COVID-19 pone al descubierto las barreras que enfrentan los mil millones de personas que tienen alguna discapacidad', 'Alrededor del 80% de las personas con discapacidad viven en países en desarrollo. Se calcula que el 46% son personas mayores de 60 años, advierte la ONU.\r\n\r\nUna de cada cinco mujeres tiene probabilidades de tener una discapacidad durante su vida, mientras que en el caso de los niños es de uno de cada diez.\r\n\r\nPara responder a las necesidades de estas personas, el Secretario instó a todos los países a que apliquen plenamente la Convención sobre los Derechos de las Personas con Discapacidad.\r\n\r\nLos gobiernos, agregó, deben trabajar para ofrecer mayor accesibilidad y eliminar “las barreras jurídicas, sociales, económicas”.\r\n\r\n\" Haciendo efectivos los derechos, la capacidad de actuar y el liderazgo de las personas con discapacidad podremos promover nuestro futuro común\", argumentó. \" Necesitamos que todas las personas estén incluidas en el proyecto de alcanzar los Objetivos de Desarrollo Sostenible\".\r\n\r\nGuterres concluyó diciendo que las personas con discapacidad y las organizaciones que las representan trabajan en todo el mundo para hacer realidad una demanda clave: \"Nada sobre nosotros sin nosotros\". ', '2022-01-13 02:24:49');

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
(41, 12, '2022-01-12', 'jJj'),
(48, 13, '2022-01-20', 'asdasd');

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
  MODIFY `id_adopcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `animal`
--
ALTER TABLE `animal`
  MODIFY `id_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de la tabla `fundacion`
--
ALTER TABLE `fundacion`
  MODIFY `id_fundacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagen_animal`
--
ALTER TABLE `imagen_animal`
  MODIFY `id_imagen_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT de la tabla `imagen_publicacion`
--
ALTER TABLE `imagen_publicacion`
  MODIFY `id_imagen_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `opcion_pregunta`
--
ALTER TABLE `opcion_pregunta`
  MODIFY `id_opcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `pregunta_adopcion`
--
ALTER TABLE `pregunta_adopcion`
  MODIFY `id_pregunta_adopcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  MODIFY `id_seguimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adopcion`
--
ALTER TABLE `adopcion`
  ADD CONSTRAINT `FK_170` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_190` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id_animal`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_adoptante_adopcion` FOREIGN KEY (`id_adoptante`) REFERENCES `adoptante` (`id_adoptante`) ON DELETE CASCADE;

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
  ADD CONSTRAINT `FK_140` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_141` FOREIGN KEY (`id_adopcion`) REFERENCES `adopcion` (`id_adopcion`) ON DELETE CASCADE ON UPDATE NO ACTION;

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
