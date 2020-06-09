Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'sessions#welcome'
  post '/login', to: 'sessions#new'
  post '/signup', to: 'users#new'
  get '/profile', to: 'users#show'
  get '/users/:user_id/skills', to: 'skills#index'
  get '/users/:user_id/skills/:skill_id', to: 'skills#show'
  get '/users/:user_id/skills/new', to: 'skills#new'
  get '/users/:user_id/skills/:skill_id/train', to: 'skills#edit'
  get '/users/:user_id/goals', to: 'goals#index'
  get '/users/:user_id/goals/new', to: 'goals#new'
  get '/users/:user_id/goals/end', to: 'goals#edit'
end
