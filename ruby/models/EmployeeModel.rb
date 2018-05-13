class Employee < ActiveRecord::Base
	has_many :shifts
	has_one :employer
end