class LineItemSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :order_id, :quantity, :price_cents, :extended_cents, :name

  has_one :product, :include => true
end
