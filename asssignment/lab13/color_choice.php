<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit;
}

$_SESSION['details'] = $_POST;
?>

<!DOCTYPE html>
<html>
<head>
<title>Select Colors</title>
<style>
body{text-align:center; font-family:Arial; background:#fafafa;}
form{display:inline-block; padding:30px; background:white; border-radius:10px;}
</style>
</head>
<body>
<h2>Customize Colors</h2>
<form action="preview.php" method="post">
  <label>Background Color:</label><br>
  <input type="color" name="bg" required><br><br>
  <label>Text Color:</label><br>
  <input type="color" name="text" required><br><br>
  <button type="submit">Preview Card</button>
</form>
</body>
</html>
