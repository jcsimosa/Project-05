class AnimesController < ApplicationController
   
    def anime_from_api
       resp = RestClient.get('https://gogoanime.herokuapp.com/popular')
       render json: resp
    end

    def show
        anime = Anime.find(params[:id])
        render json: anime
    end
end
