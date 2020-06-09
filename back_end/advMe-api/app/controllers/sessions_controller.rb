class SessionsController < ApplicationController
    def new
        puts params
        user = User.find_by(username: params[:username])
        if user
            render json: UserSerializer.new(user)
        else
            render json: {error: 'no user'}
        end
    end

    def welcome
        render json: {welcome: 'WELCOME'}
    end
end
