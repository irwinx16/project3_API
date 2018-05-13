-- shifts data

INSERT INTO shifts (name, start_shift, end_shift, notes) VALUES ('Breakfast', '6:00', '12:00', 'shift starts bright and early!');
INSERT INTO shifts (name, start_shift, end_shift, notes) VALUES ('Lunch', '12:00', '6:00', 'shift goes through the middle of the day');
INSERT INTO shifts (name, start_shift, end_shift, notes) VALUES ('Dinner', '6:00', '12:00', 'shift goes up until restaurant close');

-- employees data

INSERT INTO employees (name, position, notes, availability, present, shift_id) VALUES ('Samat', 'server', 'hard worker, meh', 'Monday thru Wednesday', 'true', 1);
INSERT INTO employees (name, position, notes, availability, present, shift_id) VALUES ('Irwin', 'chef', 'good at cooking, great with people', 'Weekends preferred', 'true', 1);
INSERT INTO employees (name, position, notes, availability, present, shift_id) VALUES ('Marie', 'bartender', 'makes a mean cocktail', 'Evenings', 'false', 3);
INSERT INTO employees (name, position, notes, availability, present, shift_id) VALUES ('Alyssa', 'server', 'customers love her attitude', 'Evenings and weekends', 'false', 3);
INSERT INTO employees (name, position, notes, availability, present, shift_id) VALUES ('Mark', 'manager', 'whips the workers into shape', 'Monday thru Friday', 'true', 2);

-- employers data

INSERT INTO employers (username, password_digest, employee_id) VALUES ('markymark', 'mark', 5);
