<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

function sendWelcomeEmail($toEmail) {
    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'mo0on7gogo@gmail.com';
        $mail->Password   = 'fqqq awpo lsie ezwp';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Sender & recipient
        $mail->setFrom('mo0on7gogo@gmail.com', 'Ghost of Tsushima Website');
        $mail->addAddress($toEmail);

        // Email content
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Thank you for your feedback!';

        $mail->Body = '
        <div style="background: #000; padding:40px 20px; font-family: Arial, sans-serif;">

          <div style="
            max-width:600px;
            margin:0 auto;
            background:#0b0b0b;
            border-radius:14px;
            overflow:hidden;
          ">

            <!-- Image -->
            <div style="text-align:center;">
              <img src="https://assetsio.gnwcdn.com/tsushima_0CrS6xD.jpg?width=570&quality=85&format=jpg&auto=webp"
                  alt="Ghost of Tsushima"
                  style="width:100%; display:block;">
            </div>

            <!-- Content -->
            <div style="padding:30px; text-align:center; background:#0b0b0b;">

              <p style="
                color:#9f0d0a;
                font-size:22px;
                font-weight:bold;
                margin-bottom:18px;
                letter-spacing:1px;
              ">
                Thank You for Your Feedback
              </p>

              <p style="
                color:#dbd9d0;
                font-size:16px;
                line-height:1.7;
                margin-bottom:22px;
              ">
                We truly appreciate you taking the time to share your thoughts with us.
                Your feedback plays an important role in improving this project and
                shaping a better experience inspired by Ghost of Tsushima.
              </p>

              <p style="
                color:#808080;
                font-size:13px;
                line-height:1.6;
                margin-top:10px;
              ">
                This is a one-time email sent because this is the first time your email
                has been used to submit feedback.
                You will not receive any promotional or repeated messages from us.
              </p>

              <div style="
                margin-top:30px;
                font-size:14px;
                color:#dbd9d0;
              ">
                — Ghost of Tsushima Website
              </div>

            </div>

          </div>

        </div>
        ';
        $mail->AltBody = "Thank you for your feedback. We appreciate you taking the time to share your thoughts with us. This is a one-time confirmation email.";

        $mail->send();

    } catch (Exception $e) {
        // Fail silently or log if needed
    }
}