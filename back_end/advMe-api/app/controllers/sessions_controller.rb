class SessionsController < ApplicationController
    def new
        user = User.find_by(id: params[:id])
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
