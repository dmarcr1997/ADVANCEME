class SessionsController < ApplicationController
    def new
        user = User.find_by(username: session_params[:username])
        if user
            if user.password_digest == session_params[:password_digest]
                render json: UserSerializer.new(user)
            else
                render json: {error: 'invalid password'}
            end
        else
            render json: {error: 'invalid username'}
        end

    end
    private
    def session_params
        params.require(:users).permit(:username, :password_digest)
    end
end
