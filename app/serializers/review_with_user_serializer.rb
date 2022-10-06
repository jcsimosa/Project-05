class ReviewWithUserSerializer < ActiveModel::Serializer
  attributes :id,:animeTitle,:animeImg,:releasedDate,:username
end
