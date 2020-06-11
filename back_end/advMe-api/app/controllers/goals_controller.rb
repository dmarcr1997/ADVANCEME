class GoalsController < ApplicationController

    def new
        user = User.find_by(id: params[:user_id])
        goal = Goal.new(goal_params)
        goal.user = user
        goal.exp = 10
        goal.ended = false
        if goal.save
            render json: GoalSerializer.new(user.goals)
        else
            render json: {error: 'Invalid goal'}
        end
    end

    def edit
        goal = Goal.find_by(id: params[:goal_id])
        user = User.find_by(id: goal_params[:user_id])
        goal.update(ended: true)
        sortedGoals = user.goals.sort_by { |obj| obj.name }
        if goal.save 
            render json: GoalSerializer.new(sortedGoals)
        else
            render json: {error: 'Invalid Update'}
        end
    end
    private

    def goal_params
        params.require(:goals).permit(:name, :timeframe, :exp, :user_id, :goal_id)
    end
end
