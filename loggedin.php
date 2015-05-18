<?php include "header.php"; ?>

	<script 
	type="text/javascript" 
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGIgmodIPp6-FkD_YsPkwR8V3_VqCi4Ac">
	</script>
	<div id="wrapper_map">

		<div class="menu">
			<i class="fa fa-bars"></i>
			<div id="menu_content">
				<ul>
					<li> Alla </li>
					<li> Restauranger </li>
					<li> Hotell </li>
					<li> Affärer </li>
					<li> Nöjen </li>
				</ul>
			</div>
		</div>

		<div id="content_map">
			<p>Klicka på kartan där du vill lägga till en ny pin!</p>
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



