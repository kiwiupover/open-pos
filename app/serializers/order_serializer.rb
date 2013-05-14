class OrderSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :customer_email, :paid, :hold, :subtotal_cents, :tax_cents, :total_cents
  has_many :line_items
end
