Rails.application.routes.draw do
  get 'main/site'

  resources :articles

  root 'main#site'
  resources :main do
    #get :read_new_to_file, on: :collection
    get :read_new_to_file, on: :collection
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
