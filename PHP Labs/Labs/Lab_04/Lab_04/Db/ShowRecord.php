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

$sql = "SELECT * FROM users WHERE user_id= $_GET[user_id]";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        $id = $row['user_id'];
        $name = $row['user_name'];
        $email = $row['user_email'];
        $gender = ($row['user_gender'] == 'F') ? "Female" : "Male";
        $emailStatus = ($row['email_status'] == 1) ? "You will receive emails from us." : "You will not receive emails from us.";
    }
} else {
    echo "0 results";
}
mysqli_close($conn);
