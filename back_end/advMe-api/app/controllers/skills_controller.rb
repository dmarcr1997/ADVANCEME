class SkillsController < ApplicationController
    
    def new
        user = User.find_by(id: params[:user_id])
        skill = Skill.new(skill_params)
        skill.level = 0
        skill.user = user
        if skill.save
            render json: UserSerializer.new(user)
        else
            render json: {error: 'Invalid Skill'}
        end
    end

    def edit
        skill = Skill.find_by(id: skill_params[:skill_id])
        user = User.find_by(id: skill_params[:user_id])
        user.user_level += 0.25
        user.save
        skill.level += 0.25
        skill.last_train = DateTime.now()
        if skill.save
            todays_date = Time.now.strftime("%m/%d/%Y")
            train = TrainDate.find_or_create_by(date: todays_date)
            train.count += 1
            train.user = user
            train.save
            allSkills = user.skills
            render json: UserSerializer.new(user)
        else
            render json: {error: 'invalid update'}
        end
    end

    private

    def skill_params
        params.require(:skills).permit(:name, :user_id, :skill_id)
    end

end
