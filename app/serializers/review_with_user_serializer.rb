class ReviewWithUserSerializer < ActiveModel::Serializer
  attributes :id,:animeTitle,:user_id,:animeImg,:releasedDate,:username
end
