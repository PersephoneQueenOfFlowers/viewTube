class AddVideoIdtoGalleries < ActiveRecord::Migration[5.2]
  def change
    add_column :galleries, :video_id, :integer
  end
end
