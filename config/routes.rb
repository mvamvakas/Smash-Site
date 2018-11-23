Rails.application.routes.draw do
  get 'main/site'

  resources :articles

  root 'main#site'
  resources :main do
    #get :read_new_to_file, on: :collection
    get :read_new_to_file, on: :collection
    get :get_player_names, on: :collection
    get :get_json_of_players, on: :collection
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
