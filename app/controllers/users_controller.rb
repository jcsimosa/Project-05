class UsersController < ApplicationController
    skip_before_action :authenticate_user,only: :create
    def index 
        users = User.all 
        render json: users, status: :ok   
    end
    def show 
        if current_user
            render json:current_user, status: :ok
        else 
            render json: {error: "not current user stored"}, status: :unauthorized
        end
    end
    def create 
        user = User.create!(user_params)
        render json:user, status: :created
    end

    def destroy 
       session.delete :user_id
    end
    
    private 
    def user_params
        params.permit(:name, :username,:password)
    end
end
