require 'sinatra/base'
require 'sinatra/activerecord'

# models
require './models/UserModel'
require './models/EmployeeModel'
require './models/ShiftModel'
require './models/WhosWorkingModel'

# controllers
require './controllers/ApplicationController'
require './controllers/EmployeeController'
require './controllers/ShiftController'
require './controllers/WhosWorkingController'

# routes
map('/') {
	run ApplicationController
}
map('/employees') {
	run EmployeeController
}
map('/shifts') {
	run ShiftController
}
map('/whosworking') {
	run WhosWorkingController
}