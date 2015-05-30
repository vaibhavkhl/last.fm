class User < ActiveRecord::Base
	devise :database_authenticatable, :recoverable,
         :registerable

  include DeviseTokenAuth::Concerns::User

  before_save -> { skip_confirmation! }
end
