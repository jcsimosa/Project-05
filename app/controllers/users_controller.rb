class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create
    
    def index 
        users = User.all
        render json: users
    end
    def show 
        render json: current_user, status: :ok
    end
    
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
   
    def destroy  
        user = User.find(params[:id])
        if current_user[:admin] === true 
            user.destroy
            head :no_content
        else render json: {error: "you don't have the credentials to do this"}, status: :forbidden
        end
    end

    
    
    private 
    def user_params
        params.permit(:name, :username, :password)
    end
end
