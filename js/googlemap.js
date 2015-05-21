
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
			//icon bed - http://i61.tinypic.com/65tk4p.png
			//icon cutlery - http://i59.tinypic.com/2mpbdco.png
			//icon glass - http://i60.tinypic.com/23rnz20.png
			//icon cart - http://i62.tinypic.com/nx86lj.png
			/*if (data[i].id_category == 1) {
				var marker = new google.maps.Marker({
			    	map: map,
			    	position: new google.maps.LatLng(data[i].lat, data[i].lng),
			    	title: data[i].title,
				    content: data[i].description,
					animation: google.maps.Animation.DROP,
					icon: 'http://i59.tinypic.com/2mpbdco.png'
			    });
			} else if (data[i].id_category == 2) {
				var marker = new google.maps.Marker({
			    	map: map,
			    	position: new google.maps.LatLng(data[i].lat, data[i].lng),
			    	title: data[i].title,
				    content: data[i].description,
					animation: google.maps.Animation.DROP,
					icon: 'http://i61.tinypic.com/65tk4p.png'
			    });
			} else if (data[i].id_category == 3) {
				var marker = new google.maps.Marker({
			    	map: map,
			    	position: new google.maps.LatLng(data[i].lat, data[i].lng),
			    	title: data[i].title,
				    content: data[i].description,
					animation: google.maps.Animation.DROP,
					icon: 'http://i62.tinypic.com/nx86lj.png'
			    });
			} else if (data[i].id_category == 4) {
				var marker = new google.maps.Marker({
			    	map: map,
			    	position: new google.maps.LatLng(data[i].lat, data[i].lng),
			    	title: data[i].title,
				    content: data[i].description,
					animation: google.maps.Animation.DROP,
					icon: 'http://i60.tinypic.com/23rnz20.png'
			    });
			}*/
			console.log(data[i].id_category)

			if (data[i].id_category == 1) {
				var marker = new google.maps.Marker({
		    	map: map,
		    	position: new google.maps.LatLng(data[i].lat, data[i].lng),
		    	title: data[i].title,
			    content: data[i].description,
				animation: google.maps.Animation.DROP,
				icon: 'http://i61.tinypic.com/65tk4p.png'
		    });
			}

			/*var marker = new google.maps.Marker({
		    	map: map,
		    	position: new google.maps.LatLng(data[i].lat, data[i].lng),
		    	title: data[i].title,
			    content: data[i].description,
				animation: google.maps.Animation.DROP,
				icon: 'http://i61.tinypic.com/65tk4p.png'
		    });*/
		    

		    google.maps.event.addListener(marker, 'click', function(e){ //när man klickar på platsen syns en text
		    	console.log(e.currentTarget);
		    	infowindow.setContent(e.currentTarget.content);
				infowindow.open(map, marker);
			});
		}
		infowindow = new google.maps.InfoWindow({
	    	title: '',
	    	content: ''
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
				// when complete
			    var marker = new google.maps.Marker({
			    	map: map,
			    	position: new google.maps.LatLng(lat, lng),
			    	title: title,
					animation: google.maps.Animation.DROP,
					icon: 'http://iconshow.me/media/images/Mixed/Free-Flat-UI-Icons/png/20/heart-24-20.png'
			    });

			    var infowindow = new google.maps.InfoWindow({
			    	title: title,
			    	content: description
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