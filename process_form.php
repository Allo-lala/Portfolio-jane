<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $date = $_POST["date"];
    $message = $_POST["message"];

    // l will  process the data here (OR save it to a database or send an email)

    // Redirect to the "Thank you" page
    header("Location: thank_you.html");
    exit;
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $date = $_POST["date"];
    $message = $_POST["message"];

    // Create the email content
    $to = "janemukisa16@gmail.com"; // email address
    $subject = "New Form Submission";
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Phone: $phone\n";
    $message_body .= "Date: $date\n";
    $message_body .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $message_body);

    // Redirect to the "Thank you" page
    header("Location: thank_you.html");
    exit;
}
?>

