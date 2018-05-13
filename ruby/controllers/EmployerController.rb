# employer is user, so this is essentially a user controller
class EmployerController < ApplicationController

	before do
		payload_body = request.body.read
		if(payload_body != "")
			@payload = JSON.parse(payload_body).symbolize_keys

				logger.info "-------PAYLOAD HERE----------------------------"
				pp @payload
				logger.info "-----------------------------------"
		end
	end

	# get route
	get '/' do 
		employers = Employer.all
		{
			success: true,
			message: "Here are all #{employers.length} employers.",
			employers: employers
		}.to_json
	end

	# logout route
	get '/logout' do
		username = session[:username]
		session.destroy
		{
			success: true,
			message: "#{username} has logged out."
		}.to_json
	end

	# register route
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
			message: "You are now registered as #{employer.username}."
		}.to_json
	end

	# login route
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
				message: "Login successful. Cookie created."
			}.to_json
		else 
			{
				success: false,
				message: "Invalid username or password."
			}.to_json
		end
	end

	# show route
	get '/:id' do
		shown_employer = Employer.find params[:id]
		{
			success: true,
			message: "Here's more information about #{shown_employer.username}.",
			shown_employer: shown_employer
		}.to_json
	end

	# edit route
	put '/:id' do
		updated_employer = Employer.find params[:id]
		updated_employer.username = @payload[:username]

		# not sure if this actually will update the password when they login, but it works in json
		updated_employer.password_digest = @payload[:password]
		updated_employer.save
		{
			success: true,
			message: "#{updated_employer.username} successfully updated.",
			updated_employer: updated_employer
		}.to_json
	end

	# delete route
	delete '/:id' do
		deleted_employer = Employer.find params[:id]
		deleted_employer.destroy
		{
			success: true,
			message: "#{deleted_employer.username} successfully deleted."
		}.to_json
	end
end