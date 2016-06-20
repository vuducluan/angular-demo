module Api
  module V1
    class UsersController < ApplicationController
      respond_to :json

      def index
        respond_with User.all
      end
    end

    private

    def user_params
      params.permit :name, :email, :phone
    end
  end
end
