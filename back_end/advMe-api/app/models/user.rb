class User < ApplicationRecord
    has_secure_password
    has_many :skills
    has_many :goals
    has_many :train_dates, -> { distinct }
    validates :username, uniqueness: true
end
