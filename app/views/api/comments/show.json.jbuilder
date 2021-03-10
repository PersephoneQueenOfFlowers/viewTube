
      author = @comment.author.username 
      json.extract! @comment, :body, :author, :video_id, :id 
