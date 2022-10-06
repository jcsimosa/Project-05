class Review < ApplicationRecord
  belongs_to :user
  belongs_to :anime

  def comment_username
    self.user.username
  end
  def admin_username
    self.user.admin
  end

end
