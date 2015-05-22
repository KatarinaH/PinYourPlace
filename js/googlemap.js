
$(document).ready(function() {
var infowindow;
	//Betsämmer vilken del av kartan man ska se.
	var mapOptions = {
		center: {lat: 59.346027, lng: 18.058272},
		zoom: 14,
		scrollwheel: false,
		//disableDefaultUI: true
		//disableDoubleClickZoom: true //Gör att man inte kan scrolla i kartan
		//draggable: false //Gör att man inte kan dra och flytta kartan.
	};

	var mapStyle = [{ //Stylar kartan svartvit
		featureType: 'all',
		elementType: 'geometry',
		stylers: [
			{ lightness: 20 },
			{ saturation: 100 }, //-100 är svartvitt
			{ gamma: 0.76 },
			{ visibility: 'on' }
			//{ hue: '#ff00ff'}
		]
	}];

	//Skapar kartan
	var map = new google.maps.Map( 
		document.getElementById('map'), //bestämmer vart i html-dokumentet kartan ska visas
		mapOptions
	);

	//startPosition();

	/* SEARCHBOX - NOT WORKING
	// Create the search box and link it to the UI element.
  	var input = document.getElementById('pac-input');
 	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

 	var searchBox = new google.maps.places.SearchBox(input);

	// Listen for the event fired when the user selects an item from the
	// pick list. Retrieve the matching places for that item.
	google.maps.event.addListener(searchBox, 'places_changed', function() {
		var places = searchBox.getPlaces();

	    if (places.length == 0) {
	      return;
	    }
	    for (var i = 0, marker; marker = markers[i]; i++) {
	      marker.setMap(null);
	    }
	});
	*/

	map.setOptions({styles: mapStyle}); //Anropar styling för kartan

	/*var infowindow = new google.maps.InfoWindow({
	});

	var marker = new google.maps.Marker({
		map: map,
		title: 'Extinguisher',
		animation: google.maps.Animation.DROP,
		icon: 'http://iconshow.me/media/images/Mixed/Free-Flat-UI-Icons/png/20/heart-24-20.png'
	});

	google.maps.event.addListener(marker, 'click', function(){
		infowindow.open(map, marker);
	});*/

	google.maps.event.addListener(map, 'click', function(e){
		var lat = e.latLng.A;
		var lng = e.latLng.F;
		
		//marker.setPosition(new google.maps.LatLng(lat, lng));
		$("#info").fadeIn();
		$('#lng').val(lng);
		$('#lat').val(lat);
	});


	//gör en ajax call till getpin.php
	//ta resultatet from getpin.php och gör en markör för varje json object

	$.get("getpin.php", function(data){
		data = JSON.parse(data);
		for(var i = 0; i < data.length; i++){

			var images = ["img/cutlery.png", "img/bed.png", "img/cart.png", "img/glass.png" ];
			

			var marker = new google.maps.Marker({
		    	map: map,
		    	position: new google.maps.LatLng(data[i].lat, data[i].lng),
		    	title: data[i].title,
			    content: '<div id="pinInfo"><h2>' + data[i].title + '</h2><p>Adress: ' + data[i].address + '</p><p>Beskrivning: ' + data[i].description + '</p>',
				animation: google.maps.Animation.DROP,
				icon: images[data[i].id_category - 1]
		    });
		    
		    google.maps.event.addListener(marker, 'click', function(){ //när man klickar på platsen syns en text
		    	infowindow.setContent(this.content);
				infowindow.open(map, this);
			});

			
		}
		
		var infowindow = new google.maps.InfoWindow({
	    	content: ""
	    });
	    
		
	});


	$("#submitInfo").on('click', function(){
		var lng = $('#lng').val();
		var lat = $('#lat').val();
		var title = $('#pintitle').val();
		var address = $('#address').val();
		var description = $('#description').val();
		var category = $('#selectCategory option:selected').val();
		
		$.post( "savepin.php", {
			'lng': lng,
			'lat': lat,
			'title': title,
			'address': address,
			'description': description,
			'category': category
		}, function( data ) {
			if (data == 'success') {
				$("#info").fadeOut();
				document.getElementById("createPin").reset(); //Tömmer formuläret
				
				var images = ["img/cutlery.png", "img/bed.png", "img/cart.png", "img/glass.png" ]; //Array med pin ikoner
			    var marker = new google.maps.Marker({
			    	map: map,
			    	position: new google.maps.LatLng(lat, lng),
			    	title: title,
					animation: google.maps.Animation.DROP,
					icon: images[category - 1],
					content: contentString
			    });

			    var contentString = '<div id="pinInfo"><h1>' + title + '</h1><p>' + address + '</p><p>' + description + '</p>';

			    var infowindow = new google.maps.InfoWindow({
			    	content: contentString
			    });

			    google.maps.event.addListener(marker, 'click', function(){ //när man klickar på platsen syns en text
					infowindow.open(map, marker);
				}); 
		    	
			} else {
				console.log("error");
			}
		});
	});


});

/*function startPosition() {
	var startPos;
	var startLat;
	var startLon
	navigator.geolocation.getCurrentPosition(function(position) {
	    startPos = position;
	    startLat = startPos.coords.latitude;
	   	startLon = startPos.coords.longitude;
	});

	// set current position as center
    map.setCenter(new google.maps.LatLng(startLat,startLon));
}*/