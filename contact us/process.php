<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "allankyagulan8@gmail.com"; //  your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    echo "Thank you for contacting us, $name!";
} else {
    header("Location: contact.html");
    exit();
}
?>
