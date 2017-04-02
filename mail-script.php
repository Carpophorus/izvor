<?php
  if(isset($_POST['email'])) {
 
    $email_to = "markomrkonjic9@gmail.com";
    $email_subject = "Pekara Izvor - Poruka iz kontakt-forme";

    function died($error) {
        echo "Postoje greške u Vašoj formi. ";
        echo "Greške su navedene ispod.<br /><br />";
        echo $error."<br /><br />";
        echo "Molimo Vas, vratite se na formu i ispravite navedene greške.<br /><br />";
        die();
    }

    if(!isset($_POST['name']) ||
        !isset($_POST['e-mail']) ||
        !isset($_POST['message'])) {
        died('Neko polje je nepopunjeno.');
    }

    $name = $_POST['name']; // required
    $email_from = $_POST['e-mail']; // required
    $comments = $_POST['message']; // required

    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email_from)) {
      $error_message .= 'Uneta e-mail adresa nije u validnom formatu.<br />';
    }
   
    $string_exp = "/^[A-Za-z .'-ŠĐČĆŽšđčćž]+$/";
    if(!preg_match($string_exp,$name)) {
      $error_message .= 'Ime koje ste uneli nije u validnom formatu.<br />';
    }

    if(strlen($comments) < 2) {
      $error_message .= 'Poruka koju ste uneli nije u validnom formatu.<br />';
    }
   
    if(strlen($error_message) > 0) {
      died($error_message);
    }
 
    $email_message = "\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Ime: ".clean_string($name)."\n";
    $email_message .= "e-mail: ".clean_string($email_from)."\n";
    $email_message .= "Poruka: ".clean_string($comments)."\n";
 
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);  
?>

  Hvala Vam na Vašim komentarima i ukazanom poverenju!

<?php
}
?>