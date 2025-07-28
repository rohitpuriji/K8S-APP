BEGIN;

CREATE TABLE IF NOT EXISTS records (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO records (name)
VALUES 
    ('Rohit'), 
    ('Priya'), 
    ('Aman'), 
    ('Sneha'), 
    ('Vikram');

COMMIT;
