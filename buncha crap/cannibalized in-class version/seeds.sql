USE comicsDB;

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
INSERT INTO comment (issueID, comicID, content, username)
VALUES (2, 4, "omg i love her she's the best", "jesspava");


INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (1, "Archie", 1);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (1, "Archie", 2);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (1, "Archie", 3);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (1, "Archie", 4);

INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (2, "Spider-Man", 1);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (2, "Spider-Man", 2);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (2, "Spider-Man", 3);

INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (3, "Wonder Woman", 1);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (3, "Wonder Woman", 2);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (3, "Wonder Woman", 3);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (3, "Wonder Woman", 4);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (3, "Wonder Woman", 5);

INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (4, "Teen Titans", 1);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (4, "Teen Titans", 2);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (4, "Teen Titans", 3);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (4, "Teen Titans", 4);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (4, "Teen Titans", 5);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (4, "Teen Titans", 6);
INSERT INTO issue (comicID, comic, issueNUMBER)
VALUES (4, "Teen Titans", 7);


INSERT INTO user (username, password, avatarLINK)
VALUES ("jedirey", "jaakusux", "http://www.image.com");
INSERT INTO user (username, password, avatarLINK)
VALUES ("generalorgana", "rebel4evr", "http://www.image.com");
INSERT INTO user (username, password, avatarLINK)
VALUES ("jesspava", "testor", "http://www.image.com");