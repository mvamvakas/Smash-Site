class MainController < ApplicationController
  def site
    $playerArray = Dir["player_files/*"]
    $playerArray.map!{|x| x.remove "player_files/"}
    tempHash = {}
    $playerHash = {}
    $playerArray.each{|tag|
      #puts tag
      player = Player.new(0, tag, 0, 0, 0)
      player.read_from_file
      tempHash[tag] = player
    }
    $playerHash = tempHash.sort_by{|key, value| value.wins}.reverse.to_h
  end

  def add_match()
    player = $playerHash[params[:tag]]
    player.add_game_result(params[:kills].to_i, params[:deaths].to_i, params[:win].to_i)
  end

  def read_new_to_file()
    str = "player_files/" + params[:tag]
    if !File.exist?(str)
      player = Player.new(params[:name], params[:tag], params[:friendCode], params[:main], params[:secondary])
      player.read_into_file
      $playerHash[player.tag] = player
      $playerArray.push(player.tag)
    end
    render json: $playerArray
  end

  def get_player_names
    render json: $playerArray
  end

  def get_json_of_players
    render json: $playerHash
  end

  def get_json_of_player
    render json: $playerHash[params[:tag]]
  end

end
