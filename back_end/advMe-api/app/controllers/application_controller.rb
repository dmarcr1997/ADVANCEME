
require 'active_support/all'
class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
    # protect_from_forgery :exception
    before_action :set_auth_token_cookie
    
    private
        def set_auth_token_cookie 
            cookies['CSRF-TOKEN'] = form_authenticity_token

        end
end
