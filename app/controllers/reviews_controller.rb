class ReviewsController < ApplicationController
    
    def index 
        reviews = Review.all 
        render json: reviews
    end
    
    def create 
        user = current_user
        anime = Anime.find_or_create_by(anime_params)
        review = Review.new(review_params)
        review.user_id = user.id
        review.anime_id = anime.id
        review.save
    end

    private

    def review_params
        params.permit(:comment)
    end
    def anime_params
        params.permit(:animeTitle,:animeImg,:releasedDate)
    end
end
