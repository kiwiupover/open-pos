class AddTaxableToLineItems < ActiveRecord::Migration
  def change
    add_column :products, :taxable, :boolean
  end
end
