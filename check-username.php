<?php
	include "db_connect.php"; //anslutning till databasen

	$username = $_POST["name"];
	echo $username;

	$stmt = $dbc->stmt_init();

	$query = "SELECT username FROM user WHERE username = '$username'";
	$result = $dbc->query($query);
	$stmt->prepare($query);


	$result = mysqli_query($dbc, $query) 
		or die("Error querying database.");

	if (mysqli_num_rows($result) == 1) { //Kollar om det finns någon användare med det användarnamnet.
			echo "fail"; 	
	}else {
		echo "success";
	}

?>