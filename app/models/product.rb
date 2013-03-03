class Product < ActiveRecord::Base
  belongs_to :cateogry
  has_many :line_items
  has_many :orders, through: :line_items
  attr_accessible :category, :description, :image, :name, :price_cents, :upc_code
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

