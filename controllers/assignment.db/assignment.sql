-- Create the 'users' table
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    firstName VARCHAR(255),
    lastName VARCHAR(255)
);

-- Create the 'countries' table
CREATE TABLE countries (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Create the 'addresses' table with foreign keys
CREATE TABLE addresses (
    id INT PRIMARY KEY,
    user_id INT,
    country_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

-- Insert data into 'users' table
INSERT INTO users (id, username, password, email, firstName, lastName)
VALUES
    (1, 'user1', 'password1', 'user1@example.com', 'John', 'Doe'),
    (2, 'user2', 'password2', 'user2@example.com', 'Jane', 'Smith');

-- Insert data into 'countries' table
INSERT INTO countries (id, name)
VALUES
    (1, 'Country1'),
    (2, 'Country2'),
    (3, 'Country3');

-- Insert data into 'addresses' table
INSERT INTO addresses (id, user_id, country_id)
VALUES
    (1, 1, 1),
    (2, 2, 1),
    (3, 2, 3);

-- List all countries
SELECT * FROM countries;

-- List all user emails
SELECT email FROM users;

-- List all user firstNames that have the letter "e" in the name
SELECT firstName FROM users WHERE firstName LIKE '%e%';

-- List all the countries where user_id = 2 lives
SELECT countries.name
FROM addresses
JOIN countries ON addresses.country_id = countries.id
WHERE addresses.user_id = 2;
