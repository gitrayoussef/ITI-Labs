<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDb";

// Create connection
$conn = mysqli_connect($servername, $username, $password);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Select Database
mysqli_select_db($conn, $dbname);

// Create users table
$sql = "CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(20) NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_gender ENUM('M' , 'F') NOT NULL,
    email_status BOOLEAN
)";
if (mysqli_query($conn, $sql)) {
    echo "Table created successfully";
} else {
    die("Error creating table: " . mysqli_error($conn));
}
mysqli_close($conn);
