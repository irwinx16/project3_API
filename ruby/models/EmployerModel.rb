# employer is the user on our site
class Employer < ActiveRecord::Base
	has_secure_password
	has_many :employees
end