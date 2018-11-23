class Player
  attr_accessor :name, :tag, :main, :secondary, :wins, :losses, :cur_rank, :kills, :deaths
  attr_writer :name, :tag, :main, :secondary, :wins, :losses, :cur_rank, :kills, :deaths
  attr_reader :name, :tag, :main, :secondary, :wins, :losses, :cur_rank, :kills, :deaths
  @@rankings = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']

  def initialize (name, tag, main, secondary)
    @name = name
    @tag = tag
    @main = main
    @secondary = secondary
    @wins = 0
    @losses = 0
    @kills = 0
    @deaths = 0
    @cur_rank = "Unranked"
  end

  def add_game_result(kills, deaths, win)
    if (win == true)
      add_win
    else
      @losses = @losses + 1
    end
    @kills = @kills + kills
    @deaths = @deaths + deaths
  end

  def add_win()
    @wins = @wins + 1
    if (@wins >= 15)
      @cur_rank = @@rankings[0]
    elsif (@wins >= 30)
      @cur_rank = @@rankings[1]
    elsif (@wins >= 50)
      @cur_rank = @@rankings[2]
    elsif (@wins >= 75)
      @cur_rank = @@rankings[3]
    elsif (@wins >= 100)
      @cur_rank = @@rankings[4]
    end
  end

  def print_player
    puts "Name: " + @name
    puts "GamerTag: " + @tag
    puts "Main Char: " + @main
    puts "Secondary Char: " + @secondary
    puts "Wins: " + @wins.to_s
    puts "Losses: " + @losses.to_s
    puts "Current Rank: " + @cur_rank
  end

  def read_into_file
    str = "player_files/" + @tag
    file = File.new(str, 'w')
    file.puts @name
    file.puts @tag
    file.puts @main
    file.puts @secondary
    file.puts @wins
    file.puts @losses
    file.puts @cur_rank
    file.puts @kills.to_s
    file.puts @deaths.to_s
    file.close
  end

  def read_from_file
    str = "player_files/" + @tag
    if (File.exist?(str) == true)
      file = File.new(str, 'r')
      @name = file.gets.chomp
      @tag = file.gets.chomp
      @main = file.gets.chomp
      @secondary = file.gets.chomp
      @wins = file.gets.to_i
      @losses = file.gets.to_i
      @cur_rank = file.gets.chomp
      @kills = file.gets.to_i
      @deaths = file.gets.to_i
    end
  end

end
