<?php
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Check if username already exists
    $check = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $check->execute([$username]);
    if ($check->fetch()) {
        echo "Username already exists!";
    } else {
        $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        if ($stmt->execute([$username, $password])) {
            header("Location: login.html");
            exit;
        } else {
            echo "Something went wrong. Please try again.";
        }
    }
}
?>