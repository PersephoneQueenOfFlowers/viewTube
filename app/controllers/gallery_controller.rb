class GalleryController < ApplicationController

  def show 
    @gallery = Gallery.find(params[:id])
    render :show
  end

  def index  
    @gallery = Gallery.find(0)
    render :index
  end
  
end
=begin
  TODO pass in an ID param to load the correct user gallery
=end