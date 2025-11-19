CREATE DATABASE users_payments;
USE users_payments;

CREATE TABLE users (
    userID INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE KEY NOT NULL,
    city VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    zipcode INT NOT NULL
);

INSERT INTO users (firstName, lastName, email, city, address, zipcode)
VALUES
("Andrew", "Ellis", "puriti275@gmail.com", "Memphis", "1375 Catherine Street", 38111);

CREATE TABLE payments (
    paymentID INT PRIMARY KEY AUTO_INCREMENT,
    purchaseDate DATE NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL
    product VARCHAR(100) NOT NULL
);