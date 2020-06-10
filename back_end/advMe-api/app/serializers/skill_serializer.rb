class SkillSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :level, :happiness, :user_id
end
