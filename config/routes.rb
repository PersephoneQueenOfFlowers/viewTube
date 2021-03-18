Rails.application.routes.draw do

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users
    resources :galleries, only: [:create, :index]
    resources :videos, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :new]
    resources :comments, only: [:create, :index, :destroy, :update]
  end

  resources :gallery, only: [:create, :index, :show]

end








