Rails.application.routes.draw do
  get 'main/site'

  resources :articles
  
  root 'main#site'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
