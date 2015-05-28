class User < ActiveRecord::Base
	devise :database_authenticatable, :recoverable,
         :registerable

  include DeviseTokenAuth::Concerns::User
end
