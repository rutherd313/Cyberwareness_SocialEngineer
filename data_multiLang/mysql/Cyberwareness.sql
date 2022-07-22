-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 10. Nov 2021 um 21:07
-- Server-Version: 10.4.14-MariaDB
-- PHP-Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `Cyberwareness`
--
CREATE DATABASE IF NOT EXISTS `Cyberwareness` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Cyberwareness`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Score`
--

CREATE TABLE `Score` (
  `score_ID` bigint(20) NOT NULL,
  `general` tinyint(4) NOT NULL COMMENT 'in percent',
  `phishing` tinyint(4) NOT NULL COMMENT 'in percent',
  `online_environment` tinyint(4) NOT NULL COMMENT 'in percent',
  `physical_attacks` tinyint(4) NOT NULL COMMENT 'in percent',
  `test_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `visitor_ID` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Visitor`
--

CREATE TABLE `Visitor` (
  `visitor_ID` bigint(20) NOT NULL,
  `age` tinyint(4) NOT NULL,
  `sex` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Score`
--
ALTER TABLE `Score`
  ADD PRIMARY KEY (`score_ID`),
  ADD KEY `visitor_ID` (`visitor_ID`);

--
-- Indizes für die Tabelle `Visitor`
--
ALTER TABLE `Visitor`
  ADD PRIMARY KEY (`visitor_ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Score`
--
ALTER TABLE `Score`
  MODIFY `score_ID` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `Visitor`
--
ALTER TABLE `Visitor`
  MODIFY `visitor_ID` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `Score`
--
ALTER TABLE `Score`
  ADD CONSTRAINT `score_ibfk_1` FOREIGN KEY (`visitor_ID`) REFERENCES `Visitor` (`visitor_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
