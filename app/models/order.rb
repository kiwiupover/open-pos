class Order < ActiveRecord::Base
  has_many :line_items
  has_many :products, through: :line_items
  attr_accessible :customer_email, :hold, :paid, :subtotal_cents, :tax_cents, :total_cents
end
