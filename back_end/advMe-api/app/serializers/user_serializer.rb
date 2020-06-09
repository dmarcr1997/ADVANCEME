class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :skills
end
