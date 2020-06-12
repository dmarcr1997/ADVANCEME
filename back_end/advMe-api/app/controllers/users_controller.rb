class UsersController < ApplicationController
    def new
        user = User.create(user_params)
        user.user_level = 0
        if user.save
            puts user
            session[:user_id] = user.id            
            render json: UserSerializer.new(user)
        else
            render json: {error: 'Invalid Entry'}
        end
    end

    def show
        puts user_params
        user = User.find_by(username: params[:username])
        if user
            render json: UserSerializer.new(user)
        else
            render json: {error: 'Invalid Entry'}
        end
    end

    private

    def user_params
        params.require(:users).permit(:username, :password)
    end
end
