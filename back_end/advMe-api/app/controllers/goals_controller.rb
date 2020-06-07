class GoalsController < ApplicationController
    def index
        user = User.find_by(id: params[:user_id])
        goals = user.goals
        if goals
            render json: GoalSerializer.new(goals)
        else
            render json: {error: 'No goals yet'}
        end
    end

    def new
        user = User.find_by(id: params[:user_id])
        goal = Goal.new(goal_params)
        goal.user = user
        if goal.save
            render json: GoalSerializer.new(user.goals)
        else
            render json: {error: 'Invalid goal'}
        end
    end

    def show
        goal = Goal.find_by(id: params[:goal_id])
        if goal  
            render json: GoalSerializer.new(goal)
        else
            render json: {error: 'Cannot find goal'}
        end
    end

    def edit
        goal = Goal.find_by(id: params[:goal_id])
        goal.update(goal_params)
        if goal.save 
            render json: GoalSerializer.new(goal)
        else
            render json: {error: 'Invalid Update'}
        end
    end
    private

    def goal_params
        params.require(:goals).permit(:name, :timeframe, :exp, :user_id, :goal_id)
    end
end
