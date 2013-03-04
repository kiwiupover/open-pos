class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :order_id, :quantity, :price_cents, :extended_cents, :name

end
