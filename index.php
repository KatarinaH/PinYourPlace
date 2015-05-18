<?php 
if(isset($_GET["not_set"])){ //om man försöker gå in på dashboard, new_post eller comments utan att vara inloggad 
	$not_set_msg = "<p class='error'>Du måste fylla i dina användaruppgifter!</p>";
} else {
	$not_set_msg = "";
}


if(isset($_GET["unknown"])){ //Om användare och lösenord inte finns
	$error_msg = "<p class='error'> Okänd användare, försök igen!</p>";
} else {
	$error_msg = "";
}

if(isset($_GET["succeed_reg"])){ //Om registrering av ny användare lyckas
	$succeed_reg = "<p class='succeed'>Tack för din registrering!</p>";
} else {
	$succeed_reg = "";
}


include "header.php"; 

?>
	<div id="startpage">
		<?php	
			//echo "<p> $logged_out_msg </p>"; //meddelande visas - utloggad
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
	
	

