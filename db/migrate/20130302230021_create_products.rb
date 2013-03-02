class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :price_cents
      t.string :category
      t.string :upc_code
      t.string :image

      t.timestamps
    end
  end
end
