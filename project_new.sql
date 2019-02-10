-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 10 2019 г., 13:16
-- Версия сервера: 5.7.20
-- Версия PHP: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `project_new`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Game`
--

CREATE TABLE `Game` (
  `id` int(11) NOT NULL,
  `team1` varchar(11) NOT NULL,
  `team2` varchar(11) NOT NULL,
  `result` varchar(255) NOT NULL DEFAULT '0:0',
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Game`
--

INSERT INTO `Game` (`id`, `team1`, `team2`, `result`, `id_user`) VALUES
(1, 'Лисы', 'Волки ЛТУ', '0:0', 1),
(3, 'Лисы', 'Политех', '0:0', 2),
(13, 'team1', 'team2', '0:0', 1),
(14, 'A', 'B', '0:0', 2),
(15, 'Волки ЛТУ', 'Лисы', '0:0', 1),
(16, 'Политех', 'Стражи', '0:0', 1),
(17, 'Стражи', 'Волки ЛТУ', '0:0', 1),
(18, 'Политех', 'Волки ЛТУ', '0:0', 1),
(19, 'Политех', 'Лисы', '0:0', 1),
(20, 'Волки ЛТУ', 'Стражи', '0:0', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `Player`
--

CREATE TABLE `Player` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Player`
--

INSERT INTO `Player` (`id`, `name`, `role`, `number`, `team_id`) VALUES
(1, 'Иванов Иван', 'нп', 11, 1),
(2, 'Петров Петр', 'нп', 23, 1),
(3, 'Сидоров Николай', 'вр', 2, 2),
(4, 'Кочарыгин Олег', 'нп', 89, 2),
(5, 'Норкин Алексей', 'зщ', 43, 3),
(6, 'Варин Петр', 'нп', 3, 1),
(7, 'Кочарыжкин Павел', 'нп', 96, 1),
(8, 'Соловьев Николай', 'вр', 30, 1),
(9, 'Ефимов Иван', 'зщ', 15, 1),
(10, 'Лелин Егор', 'нп', 19, 1),
(11, 'Масликов Роман', 'нп', 54, 1),
(12, 'Соколов Владислав', 'зщ', 42, 1),
(13, 'Виленский Кирилл', 'зщ', 17, 1),
(14, 'Белехов Вадим', 'зщ', 12, 1),
(15, 'Коробов Евгений', 'нп', 25, 2),
(16, 'Громов Александр', 'нп', 35, 2),
(17, 'Беляков Иван', 'нп', 16, 2),
(18, 'Плотников Вадим', 'нп', 21, 2),
(19, 'Макарицкий Никита', 'нп', 8, 2),
(20, 'Александров Николай', 'зщ', 6, 2),
(21, 'Любимов Владимир', 'зщ', 16, 2),
(22, 'Чуркин Владлен', 'зщ', 32, 2),
(23, 'Морозов Никита', 'зщ', 28, 2),
(24, 'Коробов Сергей', 'вр', 1, 3),
(25, 'Денисов Ефим', 'зщ', 14, 3),
(26, 'Кульчицкий Алексей', 'зщ', 33, 3),
(27, 'Кривошееев Егор', 'зщ', 12, 3),
(28, 'Емельянов Артем', 'нп', 29, 3),
(29, 'Ерохин Егор', 'нп', 36, 3),
(30, 'Кондрашкин Дмитрий', 'нп', 17, 3),
(31, 'Кагарлицкий Петр', 'нп', 19, 3),
(32, 'Кулемин Леонид', 'нп', 22, 3),
(33, 'Фирсов Владислав', 'нп', 27, 3),
(34, 'Белошейкин Александр', 'вр', 31, 4),
(35, 'Твердохлеб Антон', 'нп', 15, 4),
(36, 'Косачев Дмитрий', 'зщ', 18, 4),
(37, 'Кручинин Никита', 'зщ', 19, 4),
(38, 'Аникеев Борис', 'зщ', 97, 4),
(39, 'Арновский Борис', 'зщ', 95, 4),
(40, 'Бобровский Евгений', 'нп', 13, 4),
(41, 'Панарин Артем', 'нп', 15, 4),
(42, 'Тарасенко Антон', 'нп', 43, 4),
(43, 'Кузнецов Евгений', 'нп', 17, 4),
(44, 'Ковалевский Марк', 'нп', 25, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `Team`
--

CREATE TABLE `Team` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL DEFAULT '''logo.png'''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Team`
--

INSERT INTO `Team` (`id`, `name`, `logo`) VALUES
(1, 'Лисы', 'gasu.png'),
(2, 'Волки ЛТУ', 'ftu.png'),
(3, 'Политех', 'politeh.png'),
(4, 'Стражи', 'mvd.png');

-- --------------------------------------------------------

--
-- Структура таблицы `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `User`
--

INSERT INTO `User` (`id`, `login`, `password`, `name`, `email`) VALUES
(1, 'admin', 'admin', 'Анастасия', ''),
(2, 'mainJudge', '$2y$10$cpbIB8rfUjIrg/URPaDEp.yW/b0Q1kfYHd/p7/Cc2UsLvRGZbpcq6', 'Олег', 'w@b.ru'),
(7, 'judge1', '$2y$10$k6sfjN0R1cdaYQlDgLOMkOHNE4JRN09aFzabNdjY7rWk4w9M5zey2', 'Anna', 'q@mail.com'),
(8, 'о_judge', '$2y$10$AekarMqKXn1JE15hLtfMiO7whimMvHrzemiCitBWuXkv5M1.oSFDm', 'Алексей Антонов', 'q@mail.com'),
(9, 'romacia2007', '$2y$10$5h32tpqO4NOQGwH3ph0Q2u5sGP5F7HjqvKkanM7gL8VPSyqMhtzVy', 'Anna', 'q@mail.com'),
(10, 'vlad_os', '$2y$10$3fmm67hlUV7XOK1dn/NbseBLIocXPLLGgY8kyImnB.xg1Bf.pPkOG', 'Владимир Осоков', 'q@mail.com');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Game`
--
ALTER TABLE `Game`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Player`
--
ALTER TABLE `Player`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Team`
--
ALTER TABLE `Team`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Game`
--
ALTER TABLE `Game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
