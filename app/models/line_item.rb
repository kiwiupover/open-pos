class LineItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product
  attr_accessible :extended_cents, :order_id, :price_cents, :product_id, :quantity, :name, :created_at

end

# == Schema Information
#
# Table name: line_items
#
#  id             :integer          not null, primary key
#  product_id     :integer
#  order_id       :integer
#  quantity       :integer
#  price_cents    :integer
#  extended_cents :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
