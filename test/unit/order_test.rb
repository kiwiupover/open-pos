require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
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

