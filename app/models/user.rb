class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :animes, through: :reviews

    validates :name,:username, presence: true
    validates :name,:username, uniqueness: true 


    has_secure_password
end
