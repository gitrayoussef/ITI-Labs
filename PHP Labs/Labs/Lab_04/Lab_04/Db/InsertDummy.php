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
$sql = "INSERT INTO users VALUES
    ('default' , 'user1' , 'supervisor@iti.com' , 'F' , True ),
    ('default' , 'user2' , 'admin@iti.com' , 'M' , False ),
    ('default' , 'user3' , 'test@iti.com' , 'F' , True ),
    ('default' , 'noha' , 'admin@admin.com' , 'M' , False ),
    ('default' , 'omar' , 'omar.kiwan@iti.com' , 'M' , True ),
    ('default' , 'test' , 'test@demo.com' , 'M' , False ),
    ('default' , 'demo' , 'demo@test.com' , 'F' , True )
";
if (mysqli_query($conn, $sql)) {
    echo "New records created successfully";
} else {
    die("Error creating New records: " . mysqli_error($conn));
}
mysqli_close($conn);
