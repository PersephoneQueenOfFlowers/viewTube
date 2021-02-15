class Gallery < ApplicationRecord 
 validates :owner_id, uniqueness: true
 
 has_many_attached :videos 
 
 belongs_to :user,
  primary_key: :id,
  foreign_key: :owner_id,
    class_name: :User
end
