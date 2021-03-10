json.comments do 
  @comments.each do |comment|
      author = comment.author.username
      json.set! comment.id do
        json.extract! comment, :body, :author, :video_id, :id
      end
  end 
end

