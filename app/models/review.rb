class Review < ApplicationRecord
  belongs_to :user
  belongs_to :anime

  def comment_username
    self.user.username 
  end
end
