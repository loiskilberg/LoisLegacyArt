<?php
	$mail_to = 'info@loislegacyart.com'; // specify your email here

	// Assigning data from $_POST array to variables
	$name = $_POST['sender_name'];
	$mail_from = $_POST['sender_email'];
	$phone = $_POST['sender_phone'];
	$message = $_POST['sender_message'];

	// Construct subject of the email
	$subject = '[LoisLegacyArt] Newsletter Signup';

	// Construct email body
	$body_message .= 'Please add me to your mailing list: ' . $mail_from . "\r\n";

	// Construct headers of the message
	$headers = 'From: ' . $mail_from . "\r\n";
	$headers .= 'Reply-To: ' . $mail_from . "\r\n";

	$mail_sent = mail($mail_to, $subject, $body_message, $headers);

	if ($mail_sent == true){ ?>
		<script language="javascript" type="text/javascript">
		alert('Thank you for subscribing to my email list.');
		window.location = 'index.html';
		</script>
	<?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Error subscribing. Please try again.');
        window.location = 'index.html';
    </script>
	<?php
	}
?>
