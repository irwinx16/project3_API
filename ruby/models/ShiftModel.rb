class Shift < ActiveRecord::Base
	has_one :employee

	# We want to lookup the Shift table in the DB to see if an
	# individual employee is currently working.
	def self.employee_working?(employee_id)
		# Query the Shift table for all shifts for a specific employee
		shifts = Shift.where(
							 # And limit the results to where their start time is in the past
							 # and the end time is in the future.
						   'employee_id = :employee_id AND start_shift <= :current_time AND end_shift > :current_time',
						   employee_id: employee_id,
						   current_time: DateTime.now
						 )
		# Then we return a simple true or false if there are or aren't any shifts
		shifts.any?
	end



end
