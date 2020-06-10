class SkillsController < ApplicationController
    def index
        user = User.find_by(id: params[:user_id])
        skills = user.skills
        if skills
            render json: SkillSerializer.new(skills)
        else
            render json: {error: 'No Skills yet'}
        end
    end

    def new
        user = User.find_by(id: params[:user_id])
        skill = Skill.new(skill_params)
        skill.level = 0
        skill.happiness = 5
        skill.user = user
        if skill.save
            render json: SkillSerializer.new(user.skills)
        else
            render json: {error: 'Invalid Skill'}
        end
    end

    def show
        skill = Skill.find_by(id: params[:skill_id])
        if skill  
            render json: SkillSerializer.new(skill)
        else
            render json: {error: 'Cannot find skill'}
        end
    end

    def edit
        skill = Skill.find_by(id: params[:skill_id])
        skill.update(skill_params)
        if skill.save 
            render json: SkillSerializer.new(skill)
        else
            render json: {error: 'Invalid Update'}
        end
    end

    private

    def skill_params
        params.require(:skills).permit(:name, :user_id)
    end

end
