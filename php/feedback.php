<?php
$server = "localhost";
$user = "root";
$pass = "";
$dbname = "game_site";

$conn = mysqli_connect($server,$user,$pass,$dbname);

if (!$conn) {
  die("Connection failed:" . mysqli_connect_error());
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$check = mysqli_query($conn, "SELECT id FROM feedback WHERE email = '$email' LIMIT 1");

$isFirstTime = mysqli_num_rows($check) === 0;

$sql = "INSERT INTO feedback(name,email,message) VALUES ('$name','$email','$message')";

if (mysqli_query($conn, $sql)) {
  if ($isFirstTime) {
  require 'send_mail.php';
  sendWelcomeEmail($email);
}
}
?>