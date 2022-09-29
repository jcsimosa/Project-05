class ReviewsController < ApplicationController
    
    def index 
        reviews = Review.all 
        render json: reviews
    end
    def show
        review = Review.find(params[:id])
        render json: review
    end
    
    def create 
        byebug
        user = current_user
        anime = Anime.find_or_create_by(anime_params)
        review = Review.new(review_params)
        review.user_id = user.id
        review.anime_id = anime.id
        review.save
        render json:review
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end
    
    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end


    private

    def review_params
        params.permit(:comment)
    end
    def anime_params
        params.permit(:animeTitle,:animeImg,:releasedDate)
    end
end
