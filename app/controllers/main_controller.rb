class MainController < ApplicationController
  def site
    $playerArray = Dir["player_files/*"]
    $playerArray.map!{|x| x.remove "player_files/"}
    $playerHash = {}
    $playerArray.each{|tag|
      #puts tag
      player = Player.new(0, tag, 0, 0)
      player.read_from_file
      $playerHash[tag] = player
    }
  end

  def read_new_to_file()
    str = "player_files/" + params[:tag]
    if !File.exist?(str)
      player = Player.new(params[:name], params[:tag], params[:main], params[:secondary])
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
