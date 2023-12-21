-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2023 at 04:07 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ndoroarum`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id_pesanan` int(15) NOT NULL,
  `nama` text NOT NULL,
  `tgl_lahir` varchar(20) NOT NULL,
  `jk` text NOT NULL,
  `no_hp` bigint(20) NOT NULL,
  `tgl_naik` varchar(20) NOT NULL,
  `tgl_turun` varchar(20) NOT NULL,
  `no_hp_kel` bigint(20) NOT NULL,
  `email` varchar(150) NOT NULL,
  `identitas` text NOT NULL,
  `no_identitas` bigint(25) NOT NULL,
  `alamat` text NOT NULL,
  `ktp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id_pesanan`, `nama`, `tgl_lahir`, `jk`, `no_hp`, `tgl_naik`, `tgl_turun`, `no_hp_kel`, `email`, `identitas`, `no_identitas`, `alamat`, `ktp`) VALUES
(20230001, 'ahmad jaeludin', '2013-12-19', 'laki-laki', 83166239092, '2023-12-27', '2023-12-30', 84421458812, 'ahmad@gmail.com', 'ktp', 1271144720040001, 'jl. andriani no.02 timur', 'lalala.jpg'),
(20230002, 'amel lala', '0000-00-00', 'perempuan', 62855432130, '0000-00-00', '0000-00-00', 62855432130, 'amel@gmail.com', 'ktp', 5678765456789, 'jl.pancing', 'undefined'),
(20230003, 'ika sari', '0000-00-00', 'perempuan', 89544557893, '0000-00-00', '0000-00-00', 845333247667, 'ika@gmail.com', 'ktp', 56787654535235, 'jl.andora', 'undefined'),
(20230005, 'andi', '0000-00-00', 'laki-laki', 85677884421, '0000-00-00', '0000-00-00', 89677884432, 'andi@gmail.com', 'ktp', 1271102859223832, 'jl.anggrek', 'undefined'),
(20230006, 'alya', '0000-00-00', 'perempuan', 85344567123, '0000-00-00', '0000-00-00', 85277314556, 'alya@gmail.com', 'ktp', 21788956432776, 'jl.pancing', 'foto.png'),
(20230007, 'alya', '0000-00-00', 'perempuan', 85344567123, '0000-00-00', '0000-00-00', 85277314556, 'alya@gmail.com', 'ktp', 21788956432776, 'jl.pancing', 'foto.png'),
(20230008, 'alya', '0000-00-00', 'perempuan', 85344567123, '0000-00-00', '0000-00-00', 85277314556, 'alya@gmail.com', 'ktp', 21788956432776, 'jl.pancing', 'foto.png'),
(20230009, 'Dharma', '0000-00-00', 'Laki-laki', 81223212210, '0000-00-00', '0000-00-00', 81222344432, 'dharma@gmail.com', 'KTP', 221234565439908, 'bali', 'undefined'),
(20230011, 'Gojo Satoru', '0000-00-00', 'Laki-laki', 81277896754, '0000-00-00', '0000-00-00', 81221222112, 'gojo123@gmail.com', 'ktp', 1211345623431110, 'Bandung', 'undefined'),
(20230013, 'Arya', '0000-00-00', 'laki-laki', 81256786654, '0000-00-00', '0000-00-00', 81167897763, 'arya@gmail.com', 'ktp', 1123567789000008, 'Bandung', 'undefined'),
(20230014, 'Arya', 'Fri Dec 22 2023 07:0', 'laki-laki', 81256786654, '0000-00-00', '0000-00-00', 81167897763, 'arya@gmail.com', 'ktp', 1123567789000008, 'Bandung', 'undefined'),
(20230015, 'Arya', 'Fri Dec 22 2023 07:0', 'laki-laki', 81256786654, '0000-00-00', '0000-00-00', 81167897763, 'arya@gmail.com', 'ktp', 1123567789000008, 'Bandung', 'undefined'),
(20230016, 'Arya', 'Fri Dec 22 2023 07:0', 'laki-laki', 81256786654, 'Mon Dec 25 2023 07:0', 'Fri Dec 29 2023 07:0', 81167897763, 'arya@gmail.com', 'ktp', 1123567789000008, 'Bandung', 'undefined'),
(20230017, 'Dea', 'Tue Dec 12 2023 07:0', 'perempuan', 82356777652, 'Wed Dec 20 2023 07:0', 'Thu Dec 28 2023 07:0', 81267554320, 'dea@gmail.com', 'ktp', 112356443211996, 'Jakarta', 'undefined'),
(20230018, 'Dea', 'Tue Dec 12 2023 07:0', 'perempuan', 82356777652, 'Wed Dec 20 2023 07:0', 'Thu Dec 28 2023 07:0', 81267554320, 'dea@gmail.com', 'ktp', 112356443211996, 'Jakarta', 'undefined'),
(20230019, 'Dea', 'Tue Dec 12 2023 07:0', 'perempuan', 82356777652, 'Wed Dec 20 2023 07:0', 'Thu Dec 28 2023 07:0', 81267554320, 'dea@gmail.com', 'ktp', 112356443211996, 'Jakarta', 'undefined'),
(20230020, 'Dea', 'Tue Dec 12 2023 07:0', 'perempuan', 82356777652, 'Wed Dec 20 2023 07:0', 'Thu Dec 28 2023 07:0', 81267554320, 'dea@gmail.com', 'ktp', 112356443211996, 'Jakarta', 'undefined'),
(20230021, 'Dea', 'Tue Dec 12 2023 07:0', 'perempuan', 82356777652, 'Wed Dec 20 2023 07:0', 'Thu Dec 28 2023 07:0', 81267554320, 'dea@gmail.com', 'ktp', 112356443211996, 'Jakarta', 'undefined'),
(20230022, 'Dea', 'Tue Dec 12 2023 07:0', 'perempuan', 82356777652, 'Wed Dec 20 2023 07:0', 'Thu Dec 28 2023 07:0', 81267554320, 'dea@gmail.com', 'ktp', 112356443211996, 'Jakarta', 'undefined'),
(20230023, 'Dea', 'Tue Dec 12 2023 07:0', 'perempuan', 82356777652, 'Wed Dec 20 2023 07:0', 'Thu Dec 28 2023 07:0', 81267554320, 'dea@gmail.com', 'ktp', 112356443211996, 'Jakarta', 'undefined'),
(20230024, 'Dea', 'Tue Dec 12 2023 07:0', 'perempuan', 82356777652, 'Wed Dec 20 2023 07:0', 'Thu Dec 28 2023 07:0', 81267554320, 'dea@gmail.com', 'ktp', 112356443211996, 'Jakarta', 'D:Massiveserverpublicimagesiconwarning.png');

-- --------------------------------------------------------

--
-- Table structure for table `booking_anggota`
--

CREATE TABLE `booking_anggota` (
  `id_anggota` int(11) NOT NULL,
  `nama` text NOT NULL,
  `no_hp` bigint(15) NOT NULL,
  `no_hp_kel` bigint(15) NOT NULL,
  `alamat` text NOT NULL,
  `ktp` varchar(255) NOT NULL,
  `id_pesanan` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` bigint(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `role` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `fname`, `lname`, `username`, `email`, `phone_number`, `password`, `gambar`, `role`) VALUES
(1, 'ade', 'rahma', 'ade123', 'ade@gmail.com', 6285387339862, '12345678', NULL, 'user'),
(2, 'akira', 'masaki', 'akira121', 'akira@gmail.com', 6289541019233, '$2b$10$x9x5/jxxnC.BhQ.YZRyIMuYA7w8czt5vO0D1illmdchSaAZu2NuE2', 'lala.jpg', 'user'),
(3, 'raka', 'ima', 'raka11', 'raka@gmail.com', 6289341019155, '$2b$10$IoiqJGPoVktb39jFV4yt5.YF3mHoLtfE5gXkKd/qZyEcKQUKQWIZi', '', 'admin'),
(5, 'ade', 'rara', 'ade123', 'ade@gmail.com', 8767689678, '$2b$10$Ym7P.I4GCMsMC5PQejiM1.q7dKp2lxg6odO3P9hMsQBD/AEWV2uVO', '', 'user'),
(6, 'amira', 'natasya', 'amira233', 'amira@gmail.com', 85677886657, '$2b$10$gyS7VIvPI0R40WRdDOSrL.mAbZ7N7eMEGZOJTE8.aWH99Vr2UzTSG', '', 'user'),
(7, 'dharma', 'wijaya', 'dharma1', 'dharma@gmail.com', 89675564721, '$2b$10$pjHfi6QJDv4xodFlFCBUHOp/b7TAxk1a3OrBXPihaxTwDGjoL9hPi', '', 'user'),
(8, 'Gojo', 'Satoru', 'Kikoo1', 'gojo123@gmail.com', 81277896754, '$2b$10$0Ng2O5Al.ypCDspUMR6j6eYbFyovGSNFH/ccx84Kecgu5Tuuah8Je', '', 'user'),
(9, 'dharma', 'wijaya', 'dharma2', 'dharma@gmail.com', 897556743322, '$2b$10$DmnSJfiyTZFVQ7oDo694hOX9AwCozH48WDoqTckBHk5vLYw7fqHLG', '', 'user'),
(10, 'lee', 'juyeon', 'juyeon1', 'juyeon@gmail.com', 895410194415, '$2b$10$V7SzADR16DV/7WquxFlHZuZE76R8MC0xpqDDni0xUvPheS/JuRv/e', '', 'user'),
(11, 'lee', 'juyeon', 'juyeon1', 'juyeon@gmail.com', 895410194415, '$2b$10$cKZ4mT.KbdjGkBB5zCJgg./TZJfB.vcptGvJ1LaiKsP6NUCBYRyaW', '', 'user'),
(12, 'lee', 'juyeon', 'juyeon1', 'juyeon@gmail.com', 895410194415, '$2b$10$h1m94z.xQVZE6oy/4VbwveNdKJgygLvWF5ijb85dG2R10R./xb9Qm', '', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id_pesanan`);

--
-- Indexes for table `booking_anggota`
--
ALTER TABLE `booking_anggota`
  ADD PRIMARY KEY (`id_anggota`),
  ADD UNIQUE KEY `id_pesanan` (`id_pesanan`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id_pesanan` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20230025;

--
-- AUTO_INCREMENT for table `booking_anggota`
--
ALTER TABLE `booking_anggota`
  MODIFY `id_anggota` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking_anggota`
--
ALTER TABLE `booking_anggota`
  ADD CONSTRAINT `booking_anggota_ibfk_1` FOREIGN KEY (`id_pesanan`) REFERENCES `booking` (`id_pesanan`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
