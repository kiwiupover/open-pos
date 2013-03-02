class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price_cents, :category, :upc_code, :image
end
