class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :customer_email
      t.boolean :paid, default: false
      t.boolean :hold, default: false
      t.integer :subtotal_cents
      t.integer :tax_cents
      t.integer :total_cents

      t.timestamps
    end
  end
end
