$(document).ready(function() {
	//Betsämmer vilken del av kartan man ska se.
	var mapOptions = {
		center: {lat: 59.346027, lng: 18.058272},
		zoom: 15,
		scrollwheel: false, //Gör att man inte kan scrolla i kartan
		//draggable: false //Gör att man inte kan dra och flytta kartan.
	};

	var mapStyle = [{ //Stylar kartan svartvits
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

	map.setOptions({styles: mapStyle}); //Anropar styling för kartan


});
