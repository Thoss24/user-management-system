<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "user_management_db";

try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error: " .$e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    print_r("hello");

    // $request_data = json_decode(file_get_contents('php://input'), true);
    // $name = $request_data['name'];

    // echo $name;
} else {
    http_response_code(405);

    $data = array('error' => 'Method not allowed');
    echo json_encode($data);
}



?>