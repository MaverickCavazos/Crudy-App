DROP DATABASE IF EXISTS crud_app_db;
CREATE DATABASE crud_app_db;
USE crud_app_db;

CREATE TABLE gameTable (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    gameName VARCHAR(60) NOT NULL,
    gameReview TEXT(600) NOT NULL
);

