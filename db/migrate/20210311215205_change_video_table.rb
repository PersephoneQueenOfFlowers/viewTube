class ChangeVideoTable < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :thumb_url, :string 
  end
end
