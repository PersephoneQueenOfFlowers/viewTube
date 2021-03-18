class Api::LikesController < ApplicationController

  def show  
    debugger 
    @likes = Like.find(params[:video_id]) 
    render :show  
  end

  def create 
    @like = Like.create!(user_id: :user_id, video_id: :video_id)

  end

  def destroy 
    @like = Like.destroy(params[:id])
    
  end

  def like_params
    params.require(:like).permit(:user_id, :video_id)
  end

end
