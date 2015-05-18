$(document).ready(function() {

	$("#registrate #username").blur(function(e){
		if($("#username").val().length == 1){
			 $("#feedback").html("");
		}

		$.post("check-username.php", {name: $("#username").val()}).done(function(data){
			console.log(data);
			if(data == "success") {
				$("#feedback").html("Användarnamnet är ledigt!");
			}else {
				$("#feedback").html("Användarnamnet är upptaget");
			}
		});		
	});

	$('.mobile_menu .fa-bars').on('click', function(){
		$('#menu_content').slideToggle('slow');
	});
});
