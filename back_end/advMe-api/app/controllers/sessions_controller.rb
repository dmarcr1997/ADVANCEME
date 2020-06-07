class SessionsController < ApplicationController
    def new
        user = User.find(params[:id])
        render json: UserSerializer.new(user)
    end
end
