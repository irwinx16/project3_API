class ShiftController < ApplicationController

	before do

		payload_body = request.body.read
		# making sure that it is not empty
		if !payload_body.empty?
		  	@payload = JSON.parse(payload_body).symbolize_keys

		  	puts "-----------------------------------------------HERE IS OUR PAYLOAD"
		  	pp @payload
		  	puts "-----------------------------------------------------------------"
		end
	end

	# get route
	get '/' do
		shifts = Shift.all
		{
			success: true,
			message: "These are all #{shifts.length} shifts.",
			shifts: shifts
		}.to_json	
	end

	# show route
	get '/:id' do

		shown_shift = Shift.find params[:id]
		{
			success: true,
			message: "Here is more information about #{shown_shift.name}",
			shown_shift: shown_shift
		}.to_json
	end

	# create route
	post '/' do
		new_shift = Shift.create(
			name: 			 @payload[:name],
			employee_id: @payload[:employee_id],
			start_shift: @payload[:start_shift],
			end_shift:   @payload[:end_shift],
			notes: 	 		 @payload[:notes]
		)
		{
			success: true,
			message: "You have successfully added #{new_shift.name}.",
			new_shift: new_shift
		}.to_json
	end

	# edit route
	put '/:id' do

		updated_shift 						= Shift.find params[:id]
		updated_shift.name 				= @payload[:name]
		updated_shift.employee_id = @payload[:employee_id]
		updated_shift.start_shift = @payload[:start_shift]
		updated_shift.end_shift 	= @payload[:end_shift]
		updated_shift.notes 			= @payload[:notes]
		updated_shift.save
		{
			success: true,
			message: "You have successfully edited #{updated_shift.name}.",
			updated_shift: updated_shift
		}.to_json
	end

	# delete route
	delete '/:id' do
		
		deleted_shift = Shift.find params[:id]
		deleted_shift.destroy
		{
			success: true,
			message: "You have successfully deleted #{deleted_shift.name}.",
			deleted_shift: deleted_shift
		}.to_json
	end

end