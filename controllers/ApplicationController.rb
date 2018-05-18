class ApplicationController < Sinatra::Base

	require 'bundler'
	Bundler.require()

	require './config/environments'

	# ActiveRecord::Base.establish_connection(
	# 	:adapter => 'postgresql',
	# 	:database => 'employer'
	# )
	use Rack::Session::Cookie,	:key => 'rack.session',
		:path => '/',
		:secret => 'your_secret'

	get '/' do
		{
			success: false,
			message: "Please consult the API documentation."
		}.to_json
	end

	not_found do
		halt 404
	end

	register Sinatra::CrossOrigin

	configure do
		enable :cross_origin
	end

	set :allow_origin, :any # you can specifiy origins here, we'll just say any
	set :allow_methods, [:get, :post, :options, :put, :patch, :delete]
	set :allow_credentials, true # session info / API key enable

	options '*' do
		response.headers['Allow'] = 'HEAD, GET, POST, PUT, PATCH, DELETE'
		response.headers['Access-Control-Allow-Origin'] = 'https://ems-react.herokuapp.com'
		response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	end

end
