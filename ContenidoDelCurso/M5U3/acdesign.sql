-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-05-2023 a las 14:07:58
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
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'La nueva vulnerabilidad en el popular complemento de WordPress expone más de 2 millones de sitios a ataques cibernéticos', 'Se insta a los usuarios del complemento de Campos personalizados avanzados para WordPress a actualizar la versión 6.1.6 luego del descubrimiento de una falla de seguridad.\r\n', '\r\nEl problema, asignado al identificador CVE-2023-30777, se relaciona con un caso de secuencias de comandos entre sitios reflejadas ( XSS ) que podría ser abusado para inyectar secuencias de comandos ejecutables arbitrarias en sitios web benignos.\r\nEl complemento, que está disponible tanto como versión gratuita como profesional, ha terminado dos millones de instalaciones activas. El problema fue descubierto e informado a los mantenedores el 2 de mayo de 2023.\r\n\r\n\"Esta vulnerabilidad permite a cualquier usuario no autenticado robar información confidencial para, en este caso, escalar privilegios en el sitio de WordPress engañando a un usuario privilegiado para que visite la ruta URL creada,\" Investigador de Patchstack Rafie Muhammad dijo.'),
(2, 'La nueva vulnerabilidad en el popular complemento de WordPress expone más de 2 millones de sitios a ataques cibernéticos', 'Se insta a los usuarios del complemento de Campos personalizados avanzados para WordPress a actualizar la versión 6.1.6 luego del descubrimiento de una falla de seguridad.\r\n', '\r\nEl problema, asignado al identificador CVE-2023-30777, se relaciona con un caso de secuencias de comandos entre sitios reflejadas ( XSS ) que podría ser abusado para inyectar secuencias de comandos ejecutables arbitrarias en sitios web benignos.\r\nEl complemento, que está disponible tanto como versión gratuita como profesional, ha terminado dos millones de instalaciones activas. El problema fue descubierto e informado a los mantenedores el 2 de mayo de 2023.\r\n\r\n\"Esta vulnerabilidad permite a cualquier usuario no autenticado robar información confidencial para, en este caso, escalar privilegios en el sitio de WordPress engañando a un usuario privilegiado para que visite la ruta URL creada,\" Investigador de Patchstack Rafie Muhammad dijo.'),
(3, 'Dragon Breath APT Group utiliza la técnica de doble aplicación limpia para dirigir la industria del juego', 'Un actor avanzado de amenaza persistente ( APT ) conocido como Aliento de dragón se ha observado agregando nuevas capas de complejidad a sus ataques mediante la adopción de una novela DLL carga lateral mecanismo.', '\"El ataque se basa en un ataque clásico de carga lateral, que consiste en una aplicación limpia, un cargador malicioso y una carga útil encriptada, con varias modificaciones realizadas a estos componentes a lo largo del tiempo,\" El investigador de Sophos Gabor Szappanos dijo.\r\n\r\n\"Las últimas campañas agregan un giro en el que una aplicación limpia de primera etapa \'lado\' carga una segunda aplicación limpia y la ejecuta automáticamente. La segunda aplicación limpia carga lateralmente el cargador malicioso DLL. Después de eso, el cargador malicioso DLL ejecuta la carga útil final.\"\r\n\r\nLa Operación Dragon Breath, también rastreada bajo los nombres APT-Q-27 y Golden Eye, fue primero documentado por QiAnXin en 2020, que detalla una campaña de abrevadero diseñada para engañar a los usuarios para que descarguen un instalador troyano de Windows para Telegram.'),
(4, 'Dragon Breath APT Group utiliza la técnica de doble aplicación limpia para dirigir la industria del juego', 'Un actor avanzado de amenaza persistente ( APT ) conocido como Aliento de dragón se ha observado agregando nuevas capas de complejidad a sus ataques mediante la adopción de una novela DLL carga lateral mecanismo.', '\"El ataque se basa en un ataque clásico de carga lateral, que consiste en una aplicación limpia, un cargador malicioso y una carga útil encriptada, con varias modificaciones realizadas a estos componentes a lo largo del tiempo,\" El investigador de Sophos Gabor Szappanos dijo.\r\n\r\n\"Las últimas campañas agregan un giro en el que una aplicación limpia de primera etapa \'lado\' carga una segunda aplicación limpia y la ejecuta automáticamente. La segunda aplicación limpia carga lateralmente el cargador malicioso DLL. Después de eso, el cargador malicioso DLL ejecuta la carga útil final.\"\r\n\r\nLa Operación Dragon Breath, también rastreada bajo los nombres APT-Q-27 y Golden Eye, fue primero documentado por QiAnXin en 2020, que detalla una campaña de abrevadero diseñada para engañar a los usuarios para que descarguen un instalador troyano de Windows para Telegram.'),
(5, 'a', 'a', 'a'),
(6, '1', '1', ''),
(7, 'ad', 'ad', 'ad'),
(8, 'af', 'af', ''),
(9, 'ag', 'ag', ''),
(10, '14', '14', ''),
(11, '14', '14', ''),
(12, '14', '14', '14'),
(13, '145', '15', '15'),
(14, 'ax', 'ax', ''),
(15, 'ax', 'ax', ''),
(16, '2', '2', ''),
(17, 'afg', 'ag', ''),
(18, 'ee', 'ee', ''),
(19, 'ej', '', 'ej'),
(20, 's', '', ''),
(21, '5', '5', '');

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
