Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'sessions#welcome'
  get '/login/:id', to: 'sessions#new'
  get '/signup', to: 'users#new'
  get '/profile', to: 'users#show'
  resources :users, shallow: true do
    get '/skills', to: 'skills#index'
    get '/skills/:skill_id', to: 'skills#show'
    get '/skills/new', to: 'skills#new'
    get '/skills/:skill_id/train', to: 'skills#edit'
    get '/goals', to: 'goals#index'
    get '/goals/new', to: 'goals#new'
    get '/goals/end', to: 'goals#edit'
  end
end
