class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record






    private
        def not_found(exception)
            render json: {error: "#{exception.model} not found", status: :not_found
        end

        def invalid_record(exception)
            render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
        end
end
