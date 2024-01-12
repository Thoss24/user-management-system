<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Origin: *');

// ini_set("display_errors", "On");

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

    //echo $_SERVER['REQUEST_METHOD

    $requestData = json_decode(file_get_contents('php://input'), true);
    $name = $requestData['name'];
    $email = $requestData['email'];
    $position = $requestData['position'];
    $last_edited = $requestData['lastEdited'];

    $stmt = $pdo->prepare("INSERT INTO staff_members (name, email, position) VALUES (:name, :email, :position)");
    $stmt->bindValue(':name', $name);
    $stmt->bindValue(':email', $email);
    $stmt->bindValue(':position', $position);

    $stmt->execute();
} 
else if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $stmt = $pdo->prepare("SELECT * FROM staff_members");
    $stmt->execute();
    
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
}
else {
    http_response_code(405);

    $data = array('error' => 'Method not allowed');
    echo json_encode($data);
}



?>