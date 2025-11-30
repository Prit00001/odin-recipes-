<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Choose Card Design</title>
  <style>
    body {font-family: Arial; background: #f5f5f5; text-align:center;}
    .container {display:flex; justify-content:center; gap:20px; margin-top:30px;}
    .card {
        width:220px; height:130px; border-radius:10px; padding:10px;
        box-shadow:0 0 10px rgba(0,0,0,0.2); cursor:pointer;
        display:flex; flex-direction:column; justify-content:center; align-items:center;
        transition:transform 0.3s;
    }
    .card:hover {transform:scale(1.05);}
    .selected {border:4px solid dodgerblue;}
    form {background:#fff; width:350px; margin:30px auto; padding:20px; border-radius:10px;}
    label{display:block; margin-top:8px;}
  </style>
</head>
<body>

<h2>Select Your Visiting Card Design</h2>

<form action="color_choice.php" method="post" enctype="multipart/form-data">
  <label>Name:</label>
  <input type="text" name="name" required>
  <label>Designation:</label>
  <input type="text" name="designation" required>
  <label>Email:</label>
  <input type="email" name="email" required>
  <label>Mobile:</label>
  <input type="text" name="mobile" required>
  <label>Organisation:</label>
  <input type="text" name="organisation" required>
  <label>Logo:</label>
  <input type="file" name="logo" required><br><br>

  <div class="container">
    <label>
      <input type="radio" name="template" value="1" required hidden>
      <div class="card" style="background:#111; color:white;">
        <h3>Design 1</h3><p>Modern Dark</p>
      </div>
    </label>

    <label>
      <input type="radio" name="template" value="2" required hidden>
      <div class="card" style="background:#f2f2f2; color:#333;">
        <h3>Design 2</h3><p>Minimal Light</p>
      </div>
    </label>

    <label>
      <input type="radio" name="template" value="3" required hidden>
      <div class="card" style="background:linear-gradient(45deg,#ff9966,#ff5e62); color:white;">
        <h3>Design 3</h3><p>Gradient</p>
      </div>
    </label>
  </div>

  <br>
  <button type="submit">Next → Choose Colors</button>
</form>

<script>
const cards = document.querySelectorAll('.card');
cards.forEach((c,i)=>{
  c.addEventListener('click',()=>{
    cards.forEach(x=>x.classList.remove('selected'));
    c.classList.add('selected');
    c.previousElementSibling.checked = true;  // select that radio
  });
});
</script>

</body>
</html>
