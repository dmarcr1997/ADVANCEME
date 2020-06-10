class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :skills, :goals
end
