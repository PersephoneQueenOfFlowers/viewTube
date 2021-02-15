class ChangeGallery < ActiveRecord::Migration[5.2]
  def change
    remove_column :galleries, :owner_id
    add_column :galleries, :owner_id, :integer
  end
end
