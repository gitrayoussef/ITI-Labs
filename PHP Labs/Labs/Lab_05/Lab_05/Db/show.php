<?php

$errMsg = '';
function findUserInDb()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "userDb";
    $userName = $_POST['username'];
    $userPassword = $_POST['password'];
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT user_name , user_password FROM users WHERE user_name = '$userName' and user_password = '$userPassword' ";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        header('Location: profile.php');
        session_start();
        $_SESSION['username'] = $userName;
    } else {
        global $errMsg;
        $errMsg = 'Either Password or Username is wrong';
    }
    mysqli_close($conn);
}
