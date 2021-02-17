json.array! @videos.each do |vidObj|
  json.videoUrl url_for(vidObj.video)
end

# json.videos do
#   @gallery.videos.each do |video|
#     json.set! video.id do 
#       # json.extract! videoUrl: to get title, id, description
#       #  
#       json.videoUrl url_for(video)
#     end
#   end 
    
# end


