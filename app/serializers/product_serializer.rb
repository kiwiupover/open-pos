class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price_cents, :category, :upc_code, :image, :taxable
  attribute :short_description

  def short_description
    (description[0..40] + "...") if description
  end

end
