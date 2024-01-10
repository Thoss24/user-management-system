<?php

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "user_management_db";

$conn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);

if (!$conn) die("Database connection failed!");

?>