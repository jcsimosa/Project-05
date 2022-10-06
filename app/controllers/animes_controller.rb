class AnimesController < ApplicationController
    before_action :authorized?, only: :create
    skip_before_action :authenticate_user, except: :index
    def anime_from_api
       resp = RestClient.get('https://gogoanime.herokuapp.com/popular')
       render json: resp
    end
    def action_from_api
        resp = RestClient.get('https://gogoanime.herokuapp.com/genre/action')
        render json: resp
     end
     def horror_from_api
        resp = RestClient.get('https://gogoanime.herokuapp.com/genre/horror')
        render json: resp
     end

    def show
        anime = Anime.find(params[:id])
        render json: anime
    end
    def index 
        animes = current_user.animes
        render json: animes
    end
    def create 
        byebug
        # anime = Anime.create()
        # render json: anime, status: :created
    end

    private 
    def anime_params
        params.permit(:animeTitle,:animeImg,:releasedDate)
    end
end
