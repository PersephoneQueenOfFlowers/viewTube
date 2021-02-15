json.array! @gallery.videos do |video|
  json.videoUrl url_for(video)
end