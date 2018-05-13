require 'sinatra/base'
require 'sinatra/activerecord'

# models
require './models/EmployerModel'
require './models/EmployeeModel'
require './models/ShiftModel'

# controllers
require './controllers/ApplicationController'
require './controllers/EmployerController'
require './controllers/EmployeeController'
require './controllers/ShiftController'

# routes
map('/') {
	run ApplicationController
}
map('/employers') {
	run EmployerController
}
map('/employees') {
	run EmployeeController
}
map('/shifts') {
	run ShiftController
}