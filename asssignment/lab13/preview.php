
<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit;
}
?>
<?php
session_start();
$info = $_SESSION['details'];
$bg = $_POST['bg'];
$text = $_POST['text'];
$template = $info['template'];
move_uploaded_file($_FILES['logo']['tmp_name'], "uploads/".$_FILES['logo']['name']);
$logo = "uploads/".$_FILES['logo']['name'];
?>
<!DOCTYPE html>
<html>
<head>
<title>Preview Card</title>
<style>
body{text-align:center; font-family:Arial; background:#f5f5f5;}
.card{
  width:360px; height:200px; border-radius:15px; margin:40px auto;
  background:<?php echo $bg; ?>; color:<?php echo $text; ?>;
  display:flex; flex-direction:column; justify-content:center; align-items:center;
  box-shadow:0 0 10px rgba(0,0,0,0.3);
}
img{width:60px; height:60px; border-radius:50%; margin-bottom:8px;}
</style>
</head>
<body>
<h2>Final Visiting Card Preview (Design <?php echo $template; ?>)</h2>
<div class="card">
  <img src="<?php echo $logo; ?>">
  <h3><?php echo $info['name']; ?></h3>
  <p><?php echo $info['designation']; ?></p>
  <p><?php echo $info['organisation']; ?></p>
  <p><?php echo $info['email']." | ".$info['mobile']; ?></p>
</div>
</body>
</html>

