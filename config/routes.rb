Rails.application.routes.draw do
  resources :animes
  resources :reviews
  resources :users
 
  get "all_animes", to: 'animes#anime_from_api'

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
end
