DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  Title VARCHAR(171) NOT NULL, 
  Author VARCHAR(24) NOT NULL,
  Average_Rating NUMERIC(4,2) NOT NULL,
  Number_of_Pages INTEGER  NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON books (author);