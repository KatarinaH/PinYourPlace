<?php 
include "header.php"; 

if(isset($_POST["login"])){
	$_SESSION["logged_in"] = "TRUE";

} else if(isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] == "TRUE") {
	// redan inloggad, allt ok

} else {
	// försöker komma åt sidan utan att vara inloggad
	// skicka till login-sidan
	$_SESSION["logged_in"] = "FALSE";
	header("Location: index.php?not_set");
}



?>

	<script 
	type="text/javascript" 
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGIgmodIPp6-FkD_YsPkwR8V3_VqCi4Ac">
	</script>
	<div class="mobile_menu">
		<i class="fa fa-bars"></i>
		<div id="menu_content">
			<ul>
				<li> Alla <i class="fa fa-globe"></i></li>
				<li> Restauranger <i class="fa fa-cutlery"></i></li>
				<li> Hotell <i class="fa fa-bed"></i></li>
				<li> Affärer <i class="fa fa-shopping-cart"></i></li>
				<li> Nöjen <i class="fa fa-glass"></i></li>
				<li><a href="index.php?loggedout">Logga ut <i class="fa fa-sign-out"></i></a></li>
			</ul>
		</div>
	</div>
	<div class="clearfix"></div>

	<div class="desktop_menu">
		<div id="menu_content_descktop">
			<ul>
				<li><i class="fa fa-globe"></i> Alla </li>
				<li><i class="fa fa-cutlery"></i> Restauranger </li>
				<li><i class="fa fa-bed"></i> Hotell </li>
				<li><i class="fa fa-shopping-cart"></i> Affärer </li>
				<li><i class="fa fa-glass"></i> Nöjen </li>
				<li><a href="index.php?loggedout"><i class="fa fa-sign-out"></i>Logga ut </a></li>
			</ul>
		</div>
	</div>
	<div id="wrapper_map">
		<div id="content_map">
			<p>Klicka på kartan där du vill lägga till en ny pin!</p>
			<div id="info">
				<form method="post">
					<input type="text" id="lng" name="lng"/><br/>
					<input type="text" id="lat" name="lat"/><br/>
					<input type="text" id="pintitle" name="title" placeholder="Titel"/><br/>
					<input type="text" id="address" name="address" placeholder="Adress"/><br/>
					<textarea rows="4" cols="40" id="description" name="description" placeholder="Beskrivning"></textarea><br/>
					<select name="category" id="selectCategory">
						<option value="" selected disabled="">Välj kategori</option>
						<option value="1">&#xf0f5; Restaurang</option>
						<option value="2">&#xf236; Hotell </option>
						<option value="3">&#xf07a; Affärer </option>
						<option value="4">&#xf000; Nöjen</option>
					</select><br/>
					<input id="submitInfo" type="button" value="Lägg till Pin" name="addPin"/>
				</form>
			</div>
			<!--<input id="pac-input" class="controls" type="text" placeholder="Search Box">-->
			<div id="map"></div>
		</div>



	</div>

	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type="text/javascript"  src="js/googlemap.js"></script>	
	<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.0/TweenMax.min.js"></script>
	<script src="js/main.js"></script>	
</body>
</html>



