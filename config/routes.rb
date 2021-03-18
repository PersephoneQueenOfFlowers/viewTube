Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users
    resources :galleries, only: [:create, :index]
    resources :videos, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :new]
    resources :comments, only: [:create, :index, :destroy, :update]
    resources :likes, only: [:create, :show, :destroy]
  end

  resources :gallery, only: [:create, :index, :show]

  root "static_pages#root"
end








