<?php
include 'db.php'; // Include the database connection file

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize user inputs
    $name = $conn->real_escape_string(trim($_POST['name']));
    $address = $conn->real_escape_string(trim($_POST['address']));
    $email = $conn->real_escape_string(trim($_POST['email']));
    $phone = $conn->real_escape_string(trim($_POST['phone']));
    $item = $conn->real_escape_string(trim($_POST['item']));

    // Insert the order details into the database
    $insertOrderQuery = "INSERT INTO orders (name, address, email, phone, item) VALUES ('$name', '$address', '$email', '$phone', '$item')";

    if ($conn->query($insertOrderQuery) === TRUE) {
        // Display a success message
        echo "<script>alert('Order placed successfully!'); window.location.href='order_now.html';</script>";
    } else {
        // Display an error message with details
        echo "Error: " . $insertOrderQuery . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
