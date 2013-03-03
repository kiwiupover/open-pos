require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
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

