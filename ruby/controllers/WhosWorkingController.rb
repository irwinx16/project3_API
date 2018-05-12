class WhosWorkingController < ApplicationController

	before do

    payload_body = request.body.read

    if(payload_body != "")
      @payload = JSON.parse(payload_body).symbolize_keys

      puts "-----------------------------------------------HERE IS OUR PAYLOAD"
      pp @payload
      puts "-----------------------------------------------------------------"

    end
	end

	# get route
	get '/' do

		whosworking = WhosWorking.all
		# whosworking.employee_id = @payload[:employee_id]
		# whosworking.shift_id = @payload[:shift_id]
		# whosworking.date = @payload[:date]
		{
			success: true,
			message: "Here are all employees working now #{whosworking.length}.",
			whosworking: whosworking
		}.to_json
	end









end