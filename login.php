<?php
include 'db.php'; // Include the database connection file

if (isset($_POST['signIn'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Retrieve the user from the database
    $selectQuery = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($selectQuery);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user['password'])) {
            echo "Login successful! Welcome " . $user['firstName'];
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found with that email.";
    }
}

$conn->close();
?>
