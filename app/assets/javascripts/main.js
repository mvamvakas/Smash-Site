var isLoggedIn = 1;

$(document).ready(function() {
    loadPlayerTable();
    $.ajax({
        type: "get",
        dataType:"JSON",
        url: "/main/get_player_names",
        success: function(data){
            let x = document.getElementById("playerStatsSelect");
            let y = document.getElementById("playerRecordSelect");
            for (let i in data){

            }
            for (let i in data){
                let option = document.createElement("option");
                let option1 = document.createElement("option");
                option.text = data[i];
                option1.text = data[i];
                x.add(option);
                y.add(option1);
            }
        }
    });
    console.log(isLoggedIn);
});

$(document).on('click', "#playerStatsBtn", function(){
    let x = document.getElementById("playerStats");
    let y = document.getElementById("addPlayer");
    let z = document.getElementById("recordGame");
    if (x.style.display === "none"){
		    x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
	  }
	  else {
		    x.style.display = "none";
	  }
    loadPlayerStatsTable();
});

$(document).on('click', "#addPlayerBtnMenu", function(){
    let x = document.getElementById("addPlayer");
    let y = document.getElementById("playerStats");
    let z = document.getElementById("recordGame");
	  if (x.style.display === "none"){
		    x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
	  }
	  else {
		    x.style.display = "none";
	  }
});

$(document).on('click', "#recordGameBtn", function(){
    let x = document.getElementById("recordGame");
    let y = document.getElementById("playerStats");
    let z = document.getElementById("addPlayer");
	  if (x.style.display === "none"){
		    x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
	  }
	  else {
		    x.style.display = "none";
	  }
});

$(document).on('click', "#addPlayerBtn", function(){
    if (isLoggedIn == 1){
        console.log("HM");
        addPlayer();
    }
    else {
        $("#myModal").modal();
    }
});

$(document).on('click', "#login", function(){
    let user = document.getElementById("usrname").value;
    let psw = document.getElementById("psw").value;
    if (user === "mvamvaka" && psw === "Inf0rmatics"){
        isLoggedIn = 1;
        addPlayer();
    }
    else {
        alert("Login Failed");
    }
});

$(document).on('click', "#record", function(){
    let tag = document.getElementById("playerRecordSelect").value;
    let kills = parseInt(document.getElementById("numKills").value, 10);
    let deaths = parseInt(document.getElementById("numDeaths").value, 10);
    console.log(kills + deaths);
    let win = 0;
    if (kills > deaths){
        win = 1;
    }
    else if (kills == deaths){
        console.log("Kills and deaths can't be the same");
        return;
    }
    $.ajax({
        type: "get",
        dataType: "JSON",
        async: "false",
        data: {tag, kills, deaths, win},
        url: "/main/add_match",
        success: function(data){
            console.log("Game Successfully recorded")
        }
    });
});

function addPlayer(){
    let name = document.getElementById("playerNameCreate").value;
    let tag = document.getElementById("playerTagCreate").value;
    let friendCode = document.getElementById("friendCode").value;
    let main = document.getElementById("playerMainCreate").value;
    let secondary = document.getElementById("playerSecondaryCreate").value;
    $.ajax({
        type: "get",
        dataType: "JSON",
        async: "false",
        data: {name, tag, friendCode, main, secondary},
        url: "/main/read_new_to_file",
        success: function(data){
            let x = document.getElementById("playerStatsSelect");
            let y = document.getElementById("playerRecordSelect");
            let option = document.createElement("option");
            let option1 = document.createElement("option");
            option.text = tag;
            option1.text = tag;
            x.add(option);
            y.add(option1);
            loadPlayerTable();
        }
    });
}

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
            let playerRank = 0;
            for (let value in data){
                playerRank ++;
                string = string.concat("<tr>");
                string = string.concat("<td>");
                string = string.concat(playerRank);
                string = string.concat("</td>");
                let json = data[value];
                for (i in json){
                    if (i === "main"){
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
