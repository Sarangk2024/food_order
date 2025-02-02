<?php
$servername = "localhost";
$username = "your_username"; // replace with your database username
$password = "your_password"; // replace with your database password
$dbname = "login"; // your database name
$port = 3307; // your custom port

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
