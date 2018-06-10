CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
  id Int( 20 ) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR( 20 ) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id) 
);