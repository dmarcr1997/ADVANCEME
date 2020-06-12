class User < ApplicationRecord
    has_secure_password
    has_many :skills
    has_many :goals
end
