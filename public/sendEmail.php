<?php
header("Access-Control-Allow-Origin: *"); // Adjust this for security in production
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Check if POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve JSON data from request body
    $data = json_decode(file_get_contents("php://input"), true);

    // Get form data
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $message = $data['message'];

    // Email configuration
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "Content-Type: text/plain; charset=UTF-8";

    // Email message
    $emailBody = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        http_response_code(200); // Success
        echo json_encode(["message" => "Email sent successfully."]);
    } else {
        http_response_code(500); // Error
        echo json_encode(["message" => "Failed to send email."]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Only POST requests are allowed."]);
}
