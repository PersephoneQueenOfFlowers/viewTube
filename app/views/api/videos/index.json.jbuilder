
@videos.each do |video|
  json.set! video.id do 
    json.videoUrl url_for(video.video)
    json.extract! video, :id, :title, :description
  end
end 





