class EmployerController < ApplicationController

	before do
		payload_body = request.body.read
		if(payload_body != "")
			@payload = JSON.parse(payload_body).symbolize_keys

				puts "-------PAYLOAD HERE----------------------------"
				pp @payload
				puts "-----------------------------------"
		end
	end

	#registerRoute

	post '/register' do
		employer = Employer.new
		employer.username = @payload[:username]
		employer.password = @payload[:password]
		employer.save

		session[:logged_in] = true
		session[:username] = employer.username
		session[:employer_id] = employer.id

		{
			success: true,
			message: "you are logged in as #{employer.username}."
		}.to_json
	end

	post '/login' do
		username = @payload[:username]
		password = @payload[:password]

		employer = Employer.find_by username: username

		if employer && employer.authenticate(password)
			session[:logged_in] = true
			session[:username] = username
			session[:employer_id] = employer.id

			{
				success: true,
				employer_id: employer.id,
				username: username,
				message: "Login successfull. Cookie created"
			}.to_json
		else {
			success: false,
			message: "Invalid username or password"
		}.to_json
		end
	end

	get '/logout' do

		session.destroy
		{
			success: true,
			message: "You're now Logout"
		}
	end







end