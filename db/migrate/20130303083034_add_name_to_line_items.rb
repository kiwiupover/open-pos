class AddNameToLineItems < ActiveRecord::Migration
  def change
    add_column :line_items, :name, :string
  end
end
