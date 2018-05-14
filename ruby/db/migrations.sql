DROP DATABASE IF EXISTS employer;

CREATE DATABASE employer;

\c employer

CREATE TYPE role AS ENUM ('server', 'bartender', 'chef', 'manager');

CREATE TABLE employees(
	id SERIAL PRIMARY KEY,
	name VARCHAR(128),
	position role,
	notes VARCHAR(256),
	availability VARCHAR(256)
);

CREATE TABLE shifts(
	id SERIAL PRIMARY KEY,
	name VARCHAR(128),
	employee_id INT REFERENCES employees(id) ON DELETE SET NULL,
	start_shift TIMESTAMP,
	end_shift TIMESTAMP,
	notes VARCHAR(256)
);


CREATE TABLE employers(
	id SERIAL PRIMARY KEY,
	username VARCHAR(128),
	password_digest VARCHAR(256),
	employee_id INT REFERENCES employees(id) ON DELETE CASCADE
);
