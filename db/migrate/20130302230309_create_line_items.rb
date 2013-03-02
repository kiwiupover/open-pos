class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.integer :product_id
      t.integer :order_id
      t.integer :quantity
      t.integer :price_cents
      t.integer :extended_cents

      t.timestamps
    end
  end
end
