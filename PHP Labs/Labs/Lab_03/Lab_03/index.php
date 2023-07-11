<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 450px;
            margin-bottom: 8px;
            display: flex;
            justify-content: flex-start;
        }
    </style>
</head>

<body>
    <?php
    $username = '';
    $email = '';
    $group = '';
    $classDetails = '';
    $gender = '';
    $courses = '';
    $usernameErr = '';
    $emailErr = '';
    $genderErr = '';
    if (isset($_POST['submit'])) {
        if (empty($_POST['username'])) {
            $usernameErr = "Name is required";
        } else {
            $username = $_POST['username'];
            if (!preg_match("/^[a-zA-Z-' ]*$/", $username)) {
                $usernameErr = "Only letters and white space allowed";
            }
        }
        if (empty($_POST['email'])) {
            $emailErr = "E-mail is required";
        } else {
            $email = $_POST['email'];
        }
        $group = $_POST['group'];
        $classDetails = $_POST['classDetails'];
        if (!isset($_POST['gender'])) {
            $genderErr = "Gender is required";
        } else {
            $gender = $_POST['gender'];
        }
        if (!empty($_POST['courses'])) {
            $courses = implode(',', $_POST['courses']);
        }
    }
    echo $email;
    ?>
    <h1>Application name: AAST_BIS class registration </h1>
    <p style="color: red;">* Requires field</p>
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
        <div>
            <label for="username">Name:</label>
            <input type="text" name="username" id="username" value="<?php echo $username; ?>"><span style="color: red;">* <?php echo $usernameErr ?></span>
        </div>
        <div>
            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email" value="<?php echo $email; ?>"><span style="color: red;">* <?php echo $emailErr ?></span>
        </div>
        <div>
            <label for="group">Group#</label>
            <input type="text" name="group" id="group" value="<?php echo $group; ?>">
        </div>
        <div>
            <label for="classDetails">Class details:</label>
            <textarea name="classDetails" id="classDetails" cols="20" rows="10"><?php echo $classDetails; ?></textarea>
        </div>
        <div>
            <label for="gender">Gender:</label>
            <div>
                <input type="radio" id="female" name="gender" <?php if (isset($_POST['gender']) && $gender == "female") {
                                                                    echo "checked";
                                                                } ?> value="female">
                <label for="female">Female</label>
                <input type="radio" id="male" name="gender" <?php if (isset($_POST['gender']) && $gender == "male") {
                                                                echo "checked";
                                                            } ?> value="male">
                <label for="male">Male</label><span style="color: red;">* <?php echo $genderErr ?></span>
            </div>
        </div>
        <div>
            <label for="courses">Select Courses:</label>
            <select name="courses[]" id="Courses" multiple>

                <option value="php" <?php
                                    if (isset($_POST['courses']) && in_array("php", $_POST['courses'])) {
                                        echo "selected";
                                    } ?>>PHP</option>
                <option value="javascript" <?php
                                            if (isset($_POST['courses']) && in_array("javascript", $_POST['courses'])) {
                                                echo "selected";
                                            } ?>>Java Script</option>
                <option value="mysql" <?php
                                        if (isset($_POST['courses']) && in_array("mysql", $_POST['courses'])) {
                                            echo "selected";
                                        } ?>>MySQL</option>
                <option value="html" <?php
                                        if (isset($_POST['courses']) && in_array("html", $_POST['courses'])) {
                                            echo "selected";
                                        } ?>>HTML</option>
                <option value="css" <?php
                                    if (isset($_POST['courses']) && in_array("css", $_POST['courses'])) {
                                        echo "selected";
                                    } ?>>CSS</option>
                <option value="laravel" <?php
                                        if (isset($_POST['courses']) && in_array("laravel", $_POST['courses'])) {
                                            echo "selected";
                                        } ?>>Laravel</option>
                <option value="softskill" <?php
                                            if (isset($_POST['courses']) && in_array("softskill", $_POST['courses'])) {
                                                echo "selected";
                                            } ?>>Soft Skills</option>
            </select>
        </div>
        <div>
            <label for="agree">Agree:</label>
            <input type="checkbox" id="agree" name="agree">
        </div>
        <button type="submit" name="submit">Submit</button>
    </form>
    <main>
        <h1>Your given values are as:</h1>
        <?php
        if (isset($_POST['submit'])) {
            echo "<span>Name: $username</span><br>
            <span>Email: $email</span><br>
            <span>Group#: $group</span><br>
            <span>Class details: $classDetails</span><br>
            <span>Gender: $gender</span><br>
            <span>Courses: $courses</span><br>";
        }
        ?>
    </main>
</body>

</html>