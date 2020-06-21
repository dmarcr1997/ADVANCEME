class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :user_level, :skills, :goals, :train_dates
end
