class User < ApplicationRecord
    has_many :reviews
    has_many :animes, through: :reviews

    validates :name,:username,:password, presence: true
    
    has_secure_password
end
