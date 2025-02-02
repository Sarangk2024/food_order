<?php
// Database connection
include 'db.php'; // Include your database connection file

// Retrieve the order data from the POST request
$orderData = json_decode(file_get_contents('php://input'), true);

if ($orderData) {
    // Extract the order details from the received data
    $name = $orderData['name'];
    $address = $orderData['address'];
    $email = $orderData['email'];
    $phone = $orderData['phone'];
    $item = $orderData['item'];
    $item_count = $orderData['item_count'];
    $total_amount = $orderData['total_amount'];
    $payment_status = $orderData['payment_status'];

    // Prepare the SQL query to insert the order into the database
    $sql = "INSERT INTO `orders` (`name`, `address`, `email`, `phone`, `item`, `item_count`, `total_amount`, `payment_status`) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        // Bind the parameters to the query
        $stmt->bind_param("sssssiis", $name, $address, $email, $phone, $item, $item_count, $total_amount, $payment_status);

        // Execute the query
        if ($stmt->execute()) {
            echo "Order placed successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Error: " . $conn->error;
    }

    // Close the database connection
    $conn->close();
} else {
    echo "No order data received!";
}
?>
