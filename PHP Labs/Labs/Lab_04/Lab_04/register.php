<?php include('./Db/InsertRecord.php') ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
</head>

<body class='container p-5 w-50'>
    <h1>User Registration Form</h1>
    <hr>
    <p class="text-muted">Please fill this form and submit to add user record to the database.</p>
    <form method="POST" action="">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" value="<?php echo $name ?>"><span class="text-danger"><?php echo $nameErr; ?></span>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="<?php echo $email ?>"><span class="text-danger"><?php echo $emailErr; ?></span>
        </div>
        <label class="form-label">Gender</label>
        <div class="mb-3">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="female" value="F" <?php if (isset($_POST['gender']) && $gender == "F") {
                                                                                                        echo 'checked';
                                                                                                    } ?>>
                <label class="form-check-label" for="female">
                    Female
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="male" value="M" <?php if (isset($_POST['gender']) && $gender == "M") {
                                                                                                    echo 'checked';
                                                                                                } ?>>
                <label class="form-check-label" for="male">
                    Male
                </label>
            </div>
            <span class="text-danger"><?php echo $genderErr; ?></span>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="receiveEmails" name="receiveEmails" <?php if (isset($_POST['receiveEmails']) && $receiveEmails == 1) {
                                                                                                        echo 'checked';
                                                                                                    } ?>>
            <label class="form-check-label" for="receiveEmails">Receive E-Mails from us.</label>
        </div>
        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        <a type="submit" class="btn btn-outline-dark" href="register.php">Cancel</a>
    </form>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
</body>

</html>