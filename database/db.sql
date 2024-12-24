DROP TABLE IF EXISTS person;

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO person (name, email) VALUES
('Facu', 'facu@mail'),
('Huevo', 'huevo@mail'),
('Zapato', 'zapato@mail');