class Order < ActiveRecord::Base
  has_many :line_items
  has_many :products, through: :line_items
  attr_accessible :customer_email, :hold, :paid, :subtotal_cents, :tax_cents, :total_cents
end

# == Schema Information
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  customer_email :string(255)
#  paid           :boolean
#  hold           :boolean
#  subtotal_cents :integer
#  tax_cents      :integer
#  total_cents    :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

