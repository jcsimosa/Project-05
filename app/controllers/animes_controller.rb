class AnimesController < ApplicationController
   
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
        animes = Anime.all 
        render json: animes
    end
    # def create 
    #     anime = Anime.create()
    # end

end
