json.comments do 
  @comments.each do |comment|
      author = comment.author.username
      author_id = comment.author.id 
      body = comment.body 
      video_id = comment.video_id 
      json.set! comment.id do
        json.extract! comment, :body, :author, :video_id, :id
      end
  end 
end

