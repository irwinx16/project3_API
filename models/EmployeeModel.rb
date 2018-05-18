class Employee < ActiveRecord::Base
	has_many :shifts
	has_one :employer

	# Looks at the Shift table to see if there's an
	# existing shift for this employee
	def working?
		Shift.employee_working? id
	end
end
