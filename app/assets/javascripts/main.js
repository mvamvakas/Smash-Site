

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

$(document).on('click', "#addPlayerBtnMenu", function(){
	console.log("YO");
    let x = document.getElementById("addPlayer");
	if (x.style.display === "none"){
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
});


$(document).on('click', "#addPlayerBtn", function(){
  let str1 = "michael";
  let str2 = "Lustymuff";
  let str3 = "Yoshi";
  let arr = {str1, str2, str3};
  let variable = "string" //JSON.stringify(arr);
  $.ajax({
    type: "get",
    //data: {variable},
    data: {variable},
    url: "/main/read_new_to_file",
    success: function(r){

    }
})
/*.done(function(data) {
   $.each(data, function (i, item) {
    $('#city_select').append($('<option>', {
        value: item.value,
        text : item.text
    }));
   });
 });*/
});
