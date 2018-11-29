$(document).ready(function() {
    loadPlayerTable();
    $.ajax({
        type: "get",
        dataType:"JSON",
        url: "/main/get_player_names",
        success: function(data){
            let x = document.getElementById("playerStatsSelect");
            for (let i in data){

            }
            for (let i in data){
                let option = document.createElement("option");
                option.text = data[i];
                x.add(option);
            }
        }
    });
});

$(document).on('click', "#playerStatsBtn", function(){
    let x = document.getElementById("playerStats");
    let y = document.getElementById("addPlayer");
    if (x.style.display === "none"){
		    x.style.display = "block";
        y.style.display = "none";
	  }
	  else {
		    x.style.display = "none";
	  }
    loadPlayerStatsTable();
});

$(document).on('click', "#addPlayerBtnMenu", function(){
    let x = document.getElementById("addPlayer");
    let y = document.getElementById("playerStats");
	  if (x.style.display === "none"){
		    x.style.display = "block";
        y.style.display = "none";
	  }
	  else {
		    x.style.display = "none";
	  }
});

$(document).on('click', "#addPlayerBtn", function(){
    $("#myModal").modal();
});

$(document).on('click', "#login", function(){
    let user = document.getElementById("usrname").value;
    let psw = document.getElementById("psw").value;
    if (user === "mvamvaka" && psw === "Inf0rmatics"){
        let name = document.getElementById("playerNameCreate").value;
        let tag = document.getElementById("playerTagCreate").value;
        let main = document.getElementById("playerMainCreate").value;
        let secondary = document.getElementById("playerSecondaryCreate").value;
        $.ajax({
            type: "get",
            dataType: "JSON",
            async: "false",
            data: {name, tag, main, secondary},
            url: "/main/read_new_to_file",
            success: function(data){
                let x = document.getElementById("playerStatsSelect");
                let option = document.createElement("option");
                option.text = tag;
                x.add(option);
                loadPlayerTable();
            }
        });
    }
    else {
        alert("Login Failed");
    }
});

$(document).on('change', "#playerStatsSelect", function(){
    loadPlayerStatsTable();
});

function loadPlayerTable(){
    $.ajax({
        type: "get",
        dataType:"JSON",
        url: "/main/get_json_of_players",
        success: function(data){
            let string = "";
            for (let value in data){
                string = string.concat("<tr>");
                let json = data[value];
                for (i in json){
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
}

function loadPlayerStatsTable(){
    let tag = document.getElementById("playerStatsSelect").value;
    $.ajax({
        type: "get",
        data: {tag},
        dataType:"JSON",
        url: "/main/get_json_of_player",
        success: function(data){
            let string = "";
            string = string.concat("<tr>");
            for (i in data){
                string = string.concat("<td>");
                string = string.concat(data[i]);
                string = string.concat("</td>");
            }
            string = string.concat("</tr>");
            $('#playerSelectTableBody').html(string);
        }
    });
}
