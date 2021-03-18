class Like < ApplicationRecord

  validates :user_id, uniqueness: { scope: :video_id }

  belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video 
    
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

end
