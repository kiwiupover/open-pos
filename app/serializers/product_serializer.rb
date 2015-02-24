class ProductSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :name, :description, :price_cents, :upc_code, :image, :taxable
  attribute :short_description

  has_one :category

  def short_description
    (description[0..40] + "...") if description
  end

end
