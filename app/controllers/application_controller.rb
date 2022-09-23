class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def current_user 
        @current_user||=User.find_by(id: session[:user_id])
    end

    
    private
        def not_found(exception)
            render json: {error: "#{exception.model} not found"}, status: :not_found
        end

        def invalid_record(exception)
            render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
        end    
end
