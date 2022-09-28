Rails.application.routes.draw do
  resources :animes
  resources :reviews
  resources :users
 
  get "all_animes", to: 'animes#anime_from_api'

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"

  get "action_animes", to: "animes#action_from_api"

  get "horror_animes", to: "animes#horror_from_api"

  # get "/animes/:animeId", to: "animes#show"
end
