CREATE DATABASE comicsDB;

USE comicsDB;

CREATE TABLE comic (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	link VARCHAR(10000) NOT NULL,
);

CREATE TABLE comment (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	comicID INT NOT NULL,
	issueID INT NOT NULL,
	content TEXT NOT NULL,
	username VARCHAR(100) NOT NULL
);

CREATE TABLE issue (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	comicID INT NOT NULL
	comic VARCHAR(100) NOT NULL,
	issueNUMBER INT NOT NULL
);

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	avatarLINK VARCHAR(10000) NOT NULL
);


INSERT INTO comic (name, link)
VALUES ("Archie", "http://www.image.com");
INSERT INTO comic (name, link)
VALUES ("Spider-Man", "http://www.image.com");
INSERT INTO comic (name, link)
VALUES ("Wonder Woman", "http://www.image.com");
INSERT INTO comic (name, link)
VALUES ("Teen Titans", "http://www.image.com");

INSERT INTO comment (issueID, comicID, content, username)
VALUES (1, 1, "Archie's friend Jughead is my favorite.", "jedirey");
INSERT INTO comment (issueID, comicID, content, username)
VALUES (3, 4, "lol", "generalorgana");
INSERT INTO comment (issueID, comicID, content, username)
VALUES (2, 3, "Go Wonder Woman!!!!", "jesspava");
