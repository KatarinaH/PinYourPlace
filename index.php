<?php
include "header.php"; 

//om man har klickat på "logga ut" avslutas session
if(isset($_GET["loggedout"])) { 
	unset($_SESSION["logged_in"]);
	$logged_out_msg = "<p class='error'>Du är nu utloggad</p>";	
} else {
	$logged_out_msg = "";
}

//om man försöker gå in på dashboard, new_post eller comments utan att vara inloggad 
if(isset($_GET["not_set"])){ 
	$not_set_msg = "<p class='error'>Du måste fylla i dina användaruppgifter!</p>";
} else {
	$not_set_msg = "";
}

//Om användare och lösenord inte finns
if(isset($_GET["unknown"])){ 
	$error_msg = "<p class='error'> Okänd användare, försök igen!</p>";
} else {
	$error_msg = "";
}

//Om registrering av ny användare lyckas
if(isset($_GET["succeed_reg"])){ 
	$succeed_reg = "<p class='succeed'>Tack för din registrering!</p>";
} else {
	$succeed_reg = "";
}

//Om man försöker gå in på index.php och man redan är inloggad skickas man till loggedin.php
if(isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] == "TRUE") {
	header("Location: loggedin.php");
}
?>
	<div id="startpage">
		<?php	
			echo "<p> $logged_out_msg </p>"; //meddelande visas - utloggad
			echo "<p> $error_msg </p>"; //meddelande visas - okänd användare
			echo "<p> $not_set_msg </p>"; //meddelande visas - ej ifyllda uppgifter
		?>

		<h2>Logga in</h2>	
		<?php echo "<p> $succeed_reg </p>";?>
			
		<!--Formulär där användaren kan logga in-->
		<form method="post" action="checkuser.php">
			<label>Användarnamn:</label> <br/> <input class="cell" type="text" name="username"/><br/>
			<label>Password:</label> <br/> <input class="cell" type="password" name="password"/><br/>
			<input class='button' type="submit" name="login" value="Logga in"/>
		</form> <!-- #FORM -->

		<p><a href="new_user.php">Skapa ny användare</a></p>
	</div>
	
<?php include "footer.php"; ?>
	
	

