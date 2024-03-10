<?php 
    include "service/database.php";

    if (isset($_POST['login'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

        $result = $db->query("$sql");

        if($result->num_rows > 0) {
            $data = $result->fetch_assoc();
            
            header("location: dasboard.php");

        }else {
            echo "Login Gagal";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/login.css">
</head>
<body>

    <form action="login.php" method="POST">
    <h3>Login Your Acount</h3>
        <input type="text" placeholder="username" name="username">
        <input type="password" placeholder="password" name="password">
        <button type="submit" name="login">Login Sekarng</button>
    </form>
</body>
</html>