class SessionsController < ApplicationController
    def new
        user = User.find_by(username: session_params[:username])
        puts session_params[:password]
        if user
            if user.authenticate(session_params[:password])
                session[:user_id] = user.id
                render json: UserSerializer.new(user)
            else
                render json: {error: 'invalid password'}
            end
        else
            render json: {error: 'invalid username'}
        end

    end

    def welcome
        if (session[:user_id])
            render json: {user: session[:user_id]}
        else
            render json: {message: 'Not logged in'}
        end
    end

    def destroy
        session.delete(:user_id)
        render json: {message: 'You have been successfully logged out!'}
    end

    private
    def session_params
        params.require(:users).permit(:username, :password)
    end
end
