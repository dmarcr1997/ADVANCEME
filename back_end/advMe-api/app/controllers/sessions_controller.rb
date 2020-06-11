class SessionsController < ApplicationController
    def new
        user = User.find_by(username: session_params[:username])
        user.skills.sort_by { |obj| obj.name }
        user.goals.sort_by { |obj| obj.name }
        if user
            render json: UserSerializer.new(user)
        else
            render json: {error: 'no user'}
        end
    end

    def welcome
        render json: {welcome: 'WELCOME'}
    end

    private
    def session_params
        params.require(:users).permit(:username, :password_digest)
    end
end
