class Order < ActiveRecord::Base
  has_many :line_items
  has_many :products, through: :line_items
  attr_accessible :customer_email, :hold, :paid, :subtotal_cents, :tax_cents, :total_cents
  scope :all_open, where("paid != 't' AND hold != 't'")
  scope :all_held, where("hold = 't' AND paid != 't'")
  scope :all_paid, where(paid: true)

  def subtotal
    subtotal_cents/100.0
  end

  def tax
    tax_cents/100.0
  end

  def total
    total_cents/100.0
  end

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

