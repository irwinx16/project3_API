DROP DATABASE IF EXISTS employer;

CREATE DATABASE employer;

\c employer

CREATE TYPE role AS ENUM ('server', 'bartender', 'chef', 'manager');
-- TIME format is (hours:minutes in a 24 hour scale)
-- DATE format is YYYY:MM:DD (year:month:day)

CREATE TABLE shifts(
	id SERIAL PRIMARY KEY,
	name VARCHAR(128),
	-- time datatype is being returned in a weird way. change data type?
	start_shift TIME,
	end_shift TIME,
	notes VARCHAR(256)
);

CREATE TABLE employees(
	id SERIAL PRIMARY KEY,
	name VARCHAR(128),
	position role,
	notes VARCHAR(256),
	availability VARCHAR(256),
	present BOOLEAN,
	shift_id INT REFERENCES shifts(id) ON DELETE SET NULL
);

CREATE TABLE employers(
	id SERIAL PRIMARY KEY,
	username VARCHAR(128),
	password_digest VARCHAR(256),
	employee_id INT REFERENCES employees(id) ON DELETE CASCADE
);
