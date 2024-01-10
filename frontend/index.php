<?php
require_once '/opt/lampp/htdocs/user-management-system/backend/database.php';
ini_set("display_errors", "On");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Project</h1>

    <?php
    $sql = "SELECT * FROM staff_members";
    $result = mysqli_query($conn, $sql);
    print_r($result);

    ?>

</body>
</html>