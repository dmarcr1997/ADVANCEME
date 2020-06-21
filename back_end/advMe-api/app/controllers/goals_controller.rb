class GoalsController < ApplicationController

    def new
        user = User.find_by(id: params[:user_id])
        goal = Goal.new(goal_params)
        goal.user = user
        goal.exp = 10
        goal.ended = false
        if goal.save
            render json: UserSerializer.new(user)
        else
            render json: {error: 'Invalid goal'}
        end
    end

    def edit
        goal = Goal.find_by(id: params[:goal_id])
        user = User.find_by(id: goal_params[:user_id])
        goal.update(ended: true)
        user.user_level += 1
        user.save
        todays_date = Time.now.strftime("%m/%d/%Y")
        if goal.save 
            train = TrainDate.find_or_create_by(date: todays_date)
            train.count +=1
            train.user = user
            train.save
            render json: UserSerializer.new(user)
        else
            render json: {error: 'Invalid Update'}
        end
    end
    private

    def goal_params
        params.require(:goals).permit(:name, :timeframe, :exp, :user_id, :goal_id)
    end
end
