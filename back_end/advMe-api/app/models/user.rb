class User < ApplicationRecord
    has_many :skills
    has_many :goals
end
