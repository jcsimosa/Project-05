class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:comment,:user_id,:comment_username,:admin_username,:anime

end
