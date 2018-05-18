class EmployeeController < ApplicationController

	before do
    payload_body = request.body.read

    if(payload_body != "")
      @payload = JSON.parse(payload_body).symbolize_keys
    end
	end

	# get route
	get '/' do
		employees = Employee.all
		{
			success: true,
			message: "Here are all #{employees.length} employees.",
			employees: employees
		}.to_json
	end

	# who's working get route, to get all employees currently working base on the method on shiftmodel
	get '/whosworking' do
		whosworking = Employee.all.select do |employee|
			employee.working?
		end
		{
			success: true,
			message: "Here are all #{whosworking.length} employees currently working.",
			whosworking: whosworking
		}.to_json
	end

	# employee show route
	get '/:id' do
		shown_employee = Employee.find params[:id]
		{
			success: true,
			message: "Here is more information about #{shown_employee.name}",
			shown_employee: shown_employee
		}.to_json
	end

	# create route
	post '/' do
		new_employee 						  = Employee.new
		new_employee.name 				= @payload[:name]
		new_employee.position 		= @payload[:position]
		new_employee.notes 				= @payload[:notes]
		new_employee.availability = @payload[:availability]
		new_employee.save
		{
			success: true,
			message: "You have successfully hired #{new_employee.name}.",
			new_employee: new_employee
		}.to_json

	end

	# edit route
	put '/:id' do
		updated_employee 						  = Employee.find params[:id]
		updated_employee.name 			  = @payload[:name]
		updated_employee.position 		= @payload[:position]
		updated_employee.notes 			  = @payload[:notes]
		updated_employee.availability = @payload[:availability]
		updated_employee.save
		{
			success: true,
			message: "You have successfully edited #{updated_employee.name}.",
			updated_employee: updated_employee
		}.to_json
	end

	# delete route
	delete '/:id' do
		deleted_employee = Employee.find params[:id]
		deleted_employee.destroy
		{
			success: true,
			message: "You have successfully fired #{deleted_employee.name}.",
			deleted_employee: deleted_employee
		}.to_json
	end
end
