class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end
  
  # check if comment creator is same as current user 
  def update
    @user = current_user
    @comment = Comment.find(params[:id].to_i)
    @comments = Comment.all 
    success = @comment.update(comment_params)
    if success 
      render json: @comments
    else  
      render json: errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def index
    @comments = Comment.all 
    render :index
  end
  
  def destroy 
    @comment = selected_comment
    @user = current_user
    if @comment && @comment.author_id == @user.id 
      @comment.destroy
      @comments = Comment.all 
      render :index
    else
      render ['Could not find commemnt']
    end
  end
  
  private
  
  def selected_comment
    Comment.find(params[:id])
  end
  
  def comment_params
    params.require(:comment).permit(:author_id, :video_id, :body)
  end
end
