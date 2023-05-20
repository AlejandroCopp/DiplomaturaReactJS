-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-05-2023 a las 00:32:48
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acdesign`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'La vulnerabilidad en el popular complemento de WordPress expone más de 2 millones de sitios a ataques cibernéticos', 'Se a los usuarios del complemento de Campos personalizados avanzados para WordPress a actualizar la versión 6.1.6 luego del descubrimiento de una falla de seguridad.', 'El , asignado al identificador CVE-2023-30777, se relaciona con un caso de secuencias de comandos entre sitios reflejadas ( XSS ) que podría ser abusado para inyectar secuencias de comandos ejecutables arbitrarias en sitios web benignos.\r\nEl complemento, que está disponible tanto como versión gratuita como profesional, ha terminado dos millones de instalaciones activas. El problema fue descubierto e informado a los mantenedores el 2 de mayo de 2023.\r\n\r\n\"Esta vulnerabilidad permite a cualquier usuario no autenticado robar información confidencial para, en este caso, escalar privilegios en el sitio de WordPress engañando a un usuario privilegiado para que visite la ruta URL creada,\" Investigador de Patchstack Rafie Muhammad dijo.', 'cqdvd5ckvtjhk4n1nbwo'),
(26, 'La vulnerabilidad en el popular complemento de WordPress expone más de 2 millones de sitios a ataques cibernéticos', 'Se a los usuarios del complemento de Campos personalizados avanzados para WordPress a actualizar la versión 6.1.6 luego del descubrimiento de una falla de seguridad.', 'Se a los usuarios del complemento de Campos personalizados avanzados para WordPress a actualizar la versión 6.1.6 luego del descubrimiento de una falla de seguridad.', 'j6o82xdpjp1kpupnqi5u'),
(28, 'La vulnerabilidad en el popular complemento de WordPress expone más de 2 millones de sitios a ataques cibernéticos', 'Se a los usuarios del complemento de Campos personalizados avanzados para WordPress a actualizar la versión 6.1.6 luego del descubrimiento de una falla de seguridad.', 'Se a los usuarios del complemento de Campos personalizados avanzados para WordPress a actualizar la versión 6.1.6 luego del descubrimiento de una falla de seguridad.', 'joyjhsdtldirqvekngpe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Ale', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'pepe', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
