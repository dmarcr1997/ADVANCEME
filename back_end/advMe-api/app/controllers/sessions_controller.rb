class SessionsController < ApplicationController
    def new
        user = User.find_by(username: session_params[:username])
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

    def show
        user = User.find_by(id: params[:id])
        render json: UserSerializer.new(user)
    end

    def welcome
       if session[:user_id]
            render json: {sessh: session[:user_id]}
       else
            render json: {no_sessh: 'Not here'}
       end
    end

    def destroy
        session.delete(:user_id)
        puts "#{session[:user_id]} session"
        render json: {message: 'You have been successfully logged out!'}
    end

    private
    def session_params
        params.require(:users).permit(:username, :password)
    end
end
