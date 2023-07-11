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

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>" .
            "<th scope='row'>" . $row["user_id"] . "</th>"
            . "<td>" . $row["user_name"] . "</td>"
            . "<td>" . $row["user_email"] . "</td>"
            . "<td>" . $row["user_gender"] . "</td>"
            . "<td>" . (($row["email_status"] == 1) ? 'Yes' : 'No') . "</td>"
            . "<td>
            <a href='show.php?user_id=$row[user_id]' class='me-3'><i class='bi bi-eye-fill'></i></a>
            <a href='edit.php?user_id=$row[user_id]' class='me-3'><i class='bi bi-pencil-fill'></i></a>
            <a href='delete.php?user_id=$row[user_id]'><i class='bi bi-trash3'></i></a>
            </td>"
            . " </tr> ";
    }
} else {
    echo "0 results";
}
mysqli_close($conn);
