<?php
session_start();
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT password FROM users WHERE username = :username");
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);
    $result = $stmt->execute();

    $row = $result->fetchArray(SQLITE3_ASSOC);
    if ($row) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $username;
            header("Location: form.php");
            exit;
        } else {
            echo "<p>Incorrect password.</p>";
        }
    } else {
        echo "<p>Username not found.</p>";
    }
}
?>