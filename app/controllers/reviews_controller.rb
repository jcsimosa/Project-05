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
        user = current_user
        anime = Anime.find_by(id: review_params[:anime_id])
        review = Review.new(review_params)
        review.user_id = user.id
        review.anime_id = anime.id
        review.save
        render json:review
    end
    
    def destroy
        review = Review.find(params[:id])
        if current_user[:admin] === true
            review.destroy
            head :no_content
        elsif current_user[:username] === review.comment_username
            review.destroy
            head :no_content
        else render json: {error: "you don't have the right to delete this comment"}, status: :forbidden
        end
    end
    
    def update
        review = Review.find(params[:id])
        if current_user[:username] === review.comment_username
        review.update!(review_params)
        render json: review, status: :accepted
        end
    end


    private

    def review_params
        params.permit(:comment,:anime_id)
    end
    def anime_params
        params.permit(:animeTitle,:animeImg,:releasedDate)
    end
end
