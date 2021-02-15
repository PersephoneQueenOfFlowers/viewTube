class GalleryController < ApplicationController

  def show 
    @gallery = Gallery.find(params[:id])
    render :show
  end

  def index  
    @gallery = Gallery.find(params[0])
    render :index
  end

end
