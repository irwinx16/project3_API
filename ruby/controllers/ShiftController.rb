class ShiftController < ApplicationController

	before do

		payload_body = request.body.read

		if(payload_body != "")
  	@payload = JSON.parse(payload_body).symbolize_keys

  	puts "-----------------------------------------------HERE IS OUR PAYLOAD"
  	pp @payload
  	puts "-----------------------------------------------------------------"
		end
	end

	#get route

	get '/' do
		shifts = Shift.all
		{
			succes: true,
			message: "These are all Shift #{shifts.length}"
		}.to_json	
	end

	# show route
	get '/:id' do

		show_shift = Shift.find params[:id]
		{
			success: true,
			message: "Here is more information about #{show_shift.name}",
			show_shift: show_shift
		}.to_json
	end

	# create route
	post '/' do

		new_shift = Shift.new
		new_shift.name = @payload[:name]
		new_shift.start_shift = @payload[:start_shift]
		new_shift.end_shift = @payload[:end_shift]
		new_shift.notes = @payload[:notes]
		new_shift.save
		{
			success: true,
			message: "You have successfully added #{new_shift.name}.",
			new_shift: new_shift
		}.to_json
	end

	# edit route
	put '/:id' do

		updated_shift = Shift.new
		updated_shift.name = @payload[:name]
		updated_shift.start_shift = @payload[:start_shift]
		updated_shift.end_shift = @payload[:end_shift]
		updated_shift.notes = @payload[:notes]
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
			message: "You have successfully deteled #{deleted_shift.name}.",
			deleted_shift: deleted_shift
		}.to_json
	end









end