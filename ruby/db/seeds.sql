-- employees data

INSERT INTO employees (name, position, notes, availability) VALUES ('Samat', 'server', 'hard worker, meh', 'Monday thru Wednesday');
INSERT INTO employees (name, position, notes, availability) VALUES ('Irwin', 'chef', 'good at cooking, great with people', 'Weekends preferred');
INSERT INTO employees (name, position, notes, availability) VALUES ('Marie', 'bartender', 'makes a mean cocktail', 'Evenings');
INSERT INTO employees (name, position, notes, availability) VALUES ('Alyssa', 'server', 'customers love her attitude', 'Evenings and weekends');
INSERT INTO employees (name, position, notes, availability) VALUES ('Mark', 'manager', 'whips the workers into shape', 'Monday thru Friday');

-- shifts data

INSERT INTO shifts (name, employee_id, start_shift, end_shift, notes) VALUES ('Breakfast', 2, '2016-06-22 19:10:25-07', '2016-06-23 01:10:25-07', 'shift starts bright and early!');
INSERT INTO shifts (name, employee_id, start_shift, end_shift, notes) VALUES ('Lunch', 1, '2018-05-13 01:10:25-07', '2018-05-26 01:10:25-07', 'shift goes through the middle of the day');
INSERT INTO shifts (name, employee_id, start_shift, end_shift, notes) VALUES ('Dinner', 4,  '2019-05-13 01:10:25-07', '2019-05-13 07:10:25-07', 'shift goes up until restaurant close');
INSERT INTO shifts (name, employee_id, start_shift, end_shift, notes) VALUES ('Lunch', 2, '2016-06-22 19:10:25-07', '2016-06-23 01:10:25-07', 'shift starts bright and early!');

-- employers data

INSERT INTO employers (username, password_digest, employee_id) VALUES ('markymark', 'mark', 5);
