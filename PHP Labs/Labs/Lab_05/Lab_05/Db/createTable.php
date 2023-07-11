<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userDb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// sql to create table
$sql = "CREATE TABLE Users (
User_id INT(20) AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(30) NOT NULL,
user_password VARCHAR(30) NOT NULL
)";

if (mysqli_query($conn, $sql)) {
  echo "Table MyGuests created successfully";
} else {
  echo "Error creating table: " . mysqli_error($conn);
}

mysqli_close($conn);
?>