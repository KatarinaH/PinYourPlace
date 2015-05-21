<?php
	include "db_connect.php";

	$stmt = $dbc->stmt_init();

	$query = "SELECT * FROM pin";
	$result = $dbc->query($query);
	$stmt->prepare($query);
	$stmt->execute();
	$stmt->bind_result($id_pin, $lng, $lat, $title, $address, $description, $id_user, $id_category);
	mysqli_stmt_fetch($stmt);

	$ds = []; 
	while( $row = $result->fetch_assoc() ) {
		$ds[] = $row;
	}


	echo json_encode($ds);

	/*if (mysqli_num_rows($result) > 0) { //Kollar om det finns något i databasen
		echo "fail"; 	
	}else {
		echo "fail";
	}*/

?>