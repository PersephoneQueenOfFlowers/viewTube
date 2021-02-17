class Api::GalleriesController < ApplicationController
  
  # def show 
  #   @gallery = Gallery.find(params[:id])
  #   render :show
  # end

  def index 
    @gallery = Gallery.find(1)
    render :index
  end

end