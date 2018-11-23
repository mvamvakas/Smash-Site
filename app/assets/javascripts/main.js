$(document).ready(function() {
  $.ajax({
    type: "get",
    dataType:"JSON",
    url: "/main/get_json_of_players",
    success: function(data){
      let string = "";
      for (let value in data){
        string = string.concat("<tr>");
        let json = data[value];
        console.log(json);

        for (i in json){
          console.log(json[i]);
            if (i === "kills"){
              break;
            }
            string = string.concat("<td>");
            string = string.concat(json[i]);
            string = string.concat("</td>");
        }
        string = string.concat("</tr>");
      }
      $('#playerTable').html(string);
    }
});
});

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
  let name = document.getElementById("playerNameCreate").value;
  let tag = document.getElementById("playerTagCreate").value;
  let main = document.getElementById("playerMainCreate").value;
  let secondary = document.getElementById("playerSecondaryCreate").value;

  let variable = "string" //JSON.stringify(arr);
  $.ajax({
    type: "get",
    //data: {variable},
    data: {name, tag, main, secondary},
    url: "/main/read_new_to_file",
    success: function(r){

    }
  });
});
