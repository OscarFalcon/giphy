USE GIPHY;

CREATE TABLE USER_PASSWORD(username varchar(32) not null primary key, password varchar(128) not null, salt varchar(64), roles varchar(128) not null);

CREATE TABLE USER(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, username varchar(32) NOT NULL );

CREATE TABLE CONTENT(content_id varchar(512) NOT NULL PRIMARY KEY, content_url varchar(2048) not null, title varchar(64), description varchar(1024));

CREATE TABLE USER_CONTENT_FAVORITES (username varchar(32) NOT NULL, content_id varchar(512) NOT NULL);

CREATE TABLE USER_CONTENT_FAVORITE_HASHTAGS (username varchar(32) NOT NULL, content_id varchar(512) NOT NULL, hashtag_name varchar(64) NOT NULL);


INSERT INTO USER_PASSWORD(username, password, salt, roles) VALUES ('oscar', 'password', 'salt', 'userRole');

INSERT INTO USER(username) VALUES ('oscar');

INSERT INTO CONTENT(content_id, content_url, title, description) VALUES ('"10GjhqsVTwVDUY"', 'https://media1.giphy.com/media/10GjhqsVTwVDUY/200.gif', 'Go Spurs Go!', 'Selena Gomez at the spurs game.');

INSERT INTO USER_CONTENT_FAVORITES(username, content_id) VALUES ('oscar', '10GjhqsVTwVDUY');

