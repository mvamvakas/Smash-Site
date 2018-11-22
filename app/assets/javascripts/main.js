

$('#playerSelectOptions li a').on('click', function(){
    consol.log($('#playerSelectButt').val($(this).html()));
});

$(document).on('click', "#playerStatsBtn", function(){
    let x = document.getElementById("playerStats");
	console.log("HI");
	if (x.style.display === "none"){
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
});

$(document).on('click', "#addPlayerBtn", function(){
	console.log("YO");
    let x = document.getElementById("addPlayer");
	if (x.style.display === "none"){
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
});

