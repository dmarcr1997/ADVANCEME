class UsersController < ApplicationController
    def new
        user = User.create(user_params)
        if user.save
            render json: UserSerializer.new(user)
        else
            render json: {error: 'Invalid Entry'}
        end
    end

    def show
        user = User.find(params[:user_id])
        if user
            render json: UserSerializer.new(user)
        else
            render json: {error: 'Invalid Entry'}
        end
    end

    private

    def user_params
        params.require(:users).permit(:username, :password_digest)
    end
end
