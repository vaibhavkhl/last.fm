class User < ActiveRecord::Base
	devise :database_authenticatable, :recoverable,
         :validatable, :registerable

  include DeviseTokenAuth::Concerns::User
end
