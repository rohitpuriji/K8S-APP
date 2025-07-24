CREATE TABLE IF NOT EXISTS records (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO records (name)
VALUES ('Rohit'), ('Priya'), ('Aman'), ('Sneha'), ('Vikram');
