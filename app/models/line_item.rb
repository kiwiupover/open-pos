class LineItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product
  attr_accessible :extended_cents, :order_id, :price_cents, :product_id, :quantity
end
