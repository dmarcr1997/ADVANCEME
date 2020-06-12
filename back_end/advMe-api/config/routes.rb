Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'sessions#welcome'
  get '/logout', to: 'sessions#destroy'
  post '/login', to: 'sessions#new'
  post '/signup', to: 'users#new'
  post '/profile', to: 'users#show'
  post '/users/:user_id/skills/new', to: 'skills#new'
  post'/users/:user_id/skills/:skill_id/train', to: 'skills#edit'
  post '/users/:user_id/goals/new', to: 'goals#new'
  post '/users/:user_id/goals/:goal_id/end', to: 'goals#edit'
  
end
