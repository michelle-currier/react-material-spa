<?php

// CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'] ?? "";
    $email = $data['email'] ?? "";
    $phone = $data['phone'] ?? "";
    $message = $data['message'] ?? "";

    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        http_response_code(400);
        echo json_encode(["error" => 'All fields are required']);
        exit;
    }

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => 'Invalid email address']);
        exit;
    }
    // send email

    $to = "mushel@gmail.com";
    $subject = "Contact from DF Construction Services";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\n$message";
    $header = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}




// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = htmlspecialchars($_POST['name']);
//     $email = htmlspecialchars($_POST['email']);
//     $message = htmlspecialchars($_POST['message']);

//     $to = "mushel@gmail.com";
//     $subject = "New Contact Form Submission";
//     $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

//     $headers = "From: $email";

//     if (mail($to, $subject, $body, $headers)) {
//         echo "Message sent successfully!";
//     } else {
//         echo "Message sending failed.";
//     }
// }
?>

<?php
// $resend = Resend::client('re_123456789');

// $resend->emails->send([
//   'from' => 'Acme <onboarding@resend.dev>',
//   'to' => ['delivered@resend.dev'],
//   'subject' => 'hello world',
//   'html' => '<strong>it works!</strong>',
// ]);

?>
