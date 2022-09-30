class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create
    
    def show 
        render json: current_user, status: :ok
    end
    
    def create 
        byebug
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def destroy 
       session.delete :user_id
       head :no_content
    end
    
    private 
    def user_params
        params.permit(:name, :username, :password)
    end
end
