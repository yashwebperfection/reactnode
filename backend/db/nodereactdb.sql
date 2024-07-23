-- phpMyAdmin SQL Dump
-- version 5.2.1deb1ubuntu0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 23, 2024 at 11:27 AM
-- Server version: 8.0.35-0ubuntu0.23.04.1
-- PHP Version: 8.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodereactdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `author`, `content`, `created_at`, `updatedAt`) VALUES
(29, 'Demo 1', 'Shubham Rana', 'This is just an dummy content for this post.', '2024-06-14 11:45:51', '2024-06-19 12:23:49'),
(38, 'Shanu Creation', 'Shanu', 'This post is created by Shanu...', '2024-06-14 12:08:02', '2024-06-19 12:23:49'),
(42, 'React API Tutorials', 'Shubham', 'This is a react and Node basic api with authentications.', '2024-06-19 12:20:08', '2024-07-03 04:27:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'adasdasd', '$2a$10$9wPpV5CMYNTavwxQMwzDjuV2tGAeQNdmdYNAU962YOoTyNzi6zuia'),
(2, 'shubham', '$2a$10$J9jN5LlIF9/m8hzMszQCbueDnd5q3mhUHsdtY5YTDWEwAj2RS/Z0C'),
(8, 'sadada', '$2a$10$QuV2zFM48yhsYmehPOzexuJ3RRv7mhkDcqfnPCqLqXCP0sbfY4Yri'),
(9, 'gjf3435', '$2a$10$ZGJXrWGJhF7rPGHouIX4PekXfxntlmV4dQ7CEARvMY2stEhLhbYgy'),
(15, 'safsf224234', '$2a$10$rvlxUClbO4rSCcRXFJT41.8av92aG8gCvShHhIRA0lncL71/KzPD6'),
(16, 'testing', '$2a$10$k96BRnxChmb9CzDVNOg.neCZ2OZijCphdOd/HTkKJGpo9DEH.T//S'),
(17, 'Demo', '$2a$10$04BzAjrzUNrAY77z7u64Eu1CiXnrqO4ANbFlg0oCJe.IZXi1o0lfW'),
(18, 'shubha', '$2a$10$uTV6cjdd8sTCpn9NaGvjketDTPhVdQqRrB5jpiYo1dU4yEARPOy0C'),
(19, 'demo08', '$2a$10$KSQw2cxokhOIk1NoC9t/yOooCQLLlR88q9UT3bww.J4AojZV0h7hG'),
(26, 'shubham1', '$2a$10$H4e/Q1u4zkl8OEgSLER0puFi4g6BSdWeYrDFkyyHYi.GNHhMLb6c2'),
(37, 'shb', '$2a$10$ncOdUzpk81kPW9eKraUEQ.rftRdhkNq3bGPeR3X5pgYwaprxI/KK.'),
(40, 'shubh2222', '$2a$10$nGgapoS9P1F7Gt4D1FyC2OUHVayseQt3jTOi5wpXLoPGAfasJzrNG'),
(45, 'shubham6', '$2a$10$rmnsbgqcZx9SVtDOC43p7O0fFLQer5Kf68ExjrcpW957Auv0LVwo.'),
(46, 'deepak', '$2a$10$Lcxmo9yx4Cy1bauAPhypFO8BbA0ntYnXkQ.rCY1Qxj/NyBfcwbiwC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
