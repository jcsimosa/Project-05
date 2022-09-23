class User < ApplicationRecord
    has_many :reviews


    validates :name,:username,:password, presence: true
    
    has_secure_password
end
