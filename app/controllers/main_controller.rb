class MainController < ApplicationController
  def site
  end

  def read_new_to_file()

    puts "HI"
  #  str = tag + ".txt"
    file = File.new(params[:variable], 'w')
    file.puts "HI"
  #  file.puts tag
  #  file.puts main
  #  file.puts "none"
  #  file.puts 0
  #  file.puts 0
  #  file.puts "Bronze"
  #  file.puts 0
  #  file.puts 0
  #  file.close
  end
end
