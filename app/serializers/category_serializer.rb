class CategorySerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name, :image
  has_many :products
end
