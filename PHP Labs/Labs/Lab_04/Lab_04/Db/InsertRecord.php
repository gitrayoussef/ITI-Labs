<?php
$name = '';
$email = '';
$gender = '';
$receiveEmails = '';
$nameErr = '';
$emailErr = '';
$genderErr = '';

function validateForm()
{
    global $nameErr, $emailErr, $genderErr, $receiveEmails, $name, $email, $gender, $flag;
    if (
        isset($_POST['submit'])
    ) {
        if (empty($_POST['name']) || !preg_match("/^[a-z\s]*$/", $name)) {
            $nameErr = "Warning:Name cannot be empty";
        } else {
            $name = $_POST['name'];
        }
        if (empty($_POST['email'])) {
            $emailErr = "Warning:Email cannot be empty";
        } else {
            $email = $_POST['email'];
        }
        if (!isset($_POST['gender'])) {
            $genderErr = "Warning:Gender must be selected";
        } else {
            $gender = $_POST['gender'];
        }
        if ($name && $email && $gender && isset($_POST['receiveEmails'])) {
            $flag = true;
            $receiveEmails = True;
            insertToDb($name, $email, $gender, $receiveEmails);
        } elseif ($name && $email && $gender && !isset($_POST['receiveEmails'])) {
            $flag = true;
            $receiveEmails = False;
            insertToDb($name, $email, $gender, $receiveEmails);
        }
    }
}
function insertToDb($name, $email, $gender, $receiveEmails)
{
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
    ('default' , '$name' , '$email' , '$gender' , '$receiveEmails' )";
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        die("Error creating New record: " . mysqli_error($conn));
    }
    mysqli_close($conn);
}
validateForm();

if ($flag) {
    header("Location: usersDetails.php");
}
