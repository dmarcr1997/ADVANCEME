class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :user_level, :skills, :goals
end
