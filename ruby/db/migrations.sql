DROP DATABASE IF EXISTS employer;

CREATE DATABASE employer;

\c employer

CREATE TYPE role AS ENUM ('server', 'bartender', 'chef', 'manager');

CREATE TABLE employers(
	id SERIAL PRIMARY KEY,
	username VARCHAR(128),
	password_digest VARCHAR(256),
	employee_id INT REFERENCES employees(id)
);

CREATE TABLE employees(
	id SERIAL PRIMARY KEY,
	name VARCHAR(128),
	position role,
	notes VARCHAR(256),
	availability VARCHAR(256),
	present BOOLEAN,
	shift_id INT REFERENCES shifts(id)
);

CREATE TABLE shifts(
	id SERIAL PRIMARY KEY,
	name VARCHAR(128),
	start_shift DATETIME,
	end_shift DATETIME,
	notes VARCHAR(256),
	employee_id INT REFERENCES employees(id)
);

CREATE TABLE whosworking(
	id SERIAL PRIMARY KEY,
	employee_id INT REFERENCES employees(id),
	shift_id INT REFERENCES shifts(id),
	day DATE
);
