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
$sql = "DELETE FROM users WHERE user_id= $_GET[user_id]";
$result = mysqli_query($conn, $sql);
if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);
