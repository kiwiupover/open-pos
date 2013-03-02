class Product < ActiveRecord::Base
  has_many :line_items
  has_many :orders, through: :line_items
  attr_accessible :category, :description, :image, :name, :price_cents, :upc_code
end
