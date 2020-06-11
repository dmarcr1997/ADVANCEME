class GoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :timeframe, :exp, :ended
end
