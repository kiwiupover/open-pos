class Product < ActiveRecord::Base
  belongs_to :category
  has_many :line_items
  has_many :orders, through: :line_items

  validates_presence_of :category_id, :name, :price_cents
  
  
  attr_accessor :price

  attr_accessible :category_id, :description, :image, :name, :price_cents, :upc_code, :price

  def price
    price_cents/100.0 if price_cents
  end

  def price= price
  	self.price_cents = (price.to_f*100).round
  end

end

# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :text
#  price_cents :integer
#  upc_code    :string(255)
#  image       :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer
#

