class Shift < ActiveRecord::Base
	has_many :employees
	has_one :employer
end