class Category < ActiveRecord::Base
  has_many :products
  attr_accessible :image, :name
end

# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  image      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

