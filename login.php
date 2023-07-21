<?php
include('server.php');

$email = $_POST['email'];
$password = $_POST['password'];

$query = $mysqli->prepare('SELECT * FROM login WHERE email = ?');
$query->bind_param('s', $email);
$query->execute();

$query->store_result();
$query->bind_result($email, $hashed_password);
$query->fetch();

$num_rows = $query->num_rows;
$response = array();

if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['email'] = $email;
    } else {
        $response['status'] = "wrong password";
    }
}

echo json_encode($response);
