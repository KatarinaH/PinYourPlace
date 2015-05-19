<?php 
	


	include "db_connect.php";

		if(isset($_POST["addPin"])) { //om man har klickat på "Lägg till Pin" 
			    $title = $_POST["title"];
				$address = $_POST["address"];
				$description = $_POST["description"];
				$category = $_POST["category"];
				
				mysqli_query($dbc, $query = "INSERT INTO pin (long, lat, title, address, description, id_user, id_category) VALUES ('','', '$title', '$address','$description', '', '')");

		}//Stänger den första if satsen

	//lägg in post arrayen i db.
	//kolla ifall insättning lyckats (echo successs annars fail)
	//I js kolla om data är succceeeccsssas dölj rutan annars fel
	
?>