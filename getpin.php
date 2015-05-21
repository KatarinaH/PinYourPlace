<?php
	include "db_connect.php";

	$stmt = $dbc->stmt_init();

	$query = "SELECT * FROM pin";
	$result = $dbc->query($query);
	$stmt->prepare($query);


	$result = mysqli_query($dbc, $query) 
		or die("Error querying database.");


	echo json_encode($query);

	/*if (mysqli_num_rows($result) > 0) { //Kollar om det finns något i databasen
		echo "fail"; 	
	}else {
		echo "fail";
	}*/

?>