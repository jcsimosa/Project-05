class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :animeTitle, :animeImg, :releasedDate

  has_many :reviews
  has_many :users, through: :reviews
end
