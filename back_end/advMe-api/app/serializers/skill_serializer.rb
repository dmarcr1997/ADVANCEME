class SkillSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :level, :user_id, :last_train
end
