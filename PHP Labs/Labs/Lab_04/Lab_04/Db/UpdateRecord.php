<?php
$nameErr = '';
$emailErr = '';
$genderErr = '';
$receiveEmails = '';
$name = '';
$email = '';
$gender = '';
$flag = '';
function validateForm()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "myDb";
    global $nameErr, $emailErr, $genderErr, $receiveEmails, $name, $email, $gender, $flag;
    // Create connection
    $conn = mysqli_connect($servername, $username, $password);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    // Select Database
    mysqli_select_db($conn, $dbname);
    $sqlGet = "SELECT * FROM users WHERE user_id= $_GET[user_id]";
    $result = mysqli_query($conn, $sqlGet);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while ($row = mysqli_fetch_assoc($result)) {
            $id = $row['user_id'];
            $name = $row['user_name'];
            $email = $row['user_email'];
            $gender = $row['user_gender'];
            $receiveEmails = $row['email_status'];
        }
    } else {
        echo "0 results";
    }

    if (
        isset($_POST['submit'])
    ) {
        if (empty($_POST['name'])) {
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
            $sql = "UPDATE users SET user_name = '$name' , user_email = '$email' , user_gender = '$gender' , email_status = $receiveEmails WHERE user_id = $id";
            if (mysqli_query($conn, $sql)) {
                echo "Record updated successfully";
            } else {
                die("Error updating record: " . mysqli_error($conn));
            }
            mysqli_close($conn);
        } elseif ($name && $email && $gender && !isset($_POST['receiveEmails'])) {
            $flag = true;
            $sql = "UPDATE users SET user_name = '$name' , user_email = '$email' , user_gender = '$gender' , email_status = 0 WHERE user_id = $id";
            if (mysqli_query($conn, $sql)) {
                echo "Record updated successfully";
            } else {
                die("Error updating record: " . mysqli_error($conn));
            }
            mysqli_close($conn);
        }
    }
}

validateForm();


if ($flag) {
    header("Location: usersDetails.php");
}
