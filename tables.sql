-- tables for testing
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT,
	birth_date DATE,
	ord_date DATE,
	education TEXT,
	grad_year INTEGER,
	employment TEXT,
	experience INTEGER
);

CREATE TABLE IF NOT EXISTS schemes1 (
	id SERIAL PRIMARY KEY,
	name TEXT,
	detail TEXT,
	url TEXT,
	photo_url TEXT
);

CREATE TABLE IF NOT EXISTS schemes2 (
	id SERIAL PRIMARY KEY,
	name TEXT,
	url TEXT,
	photo_url TEXT,
	min_age INTEGER,
	max_age INTEGER,
	ord_mths INTEGER,
	education TEXT,
	grad_year INTEGER,
	employment TEXT,
	experience INTEGER,
	message TEXT,
	scheme1_id INTEGER
);


-- for experience input <=

-- ==============================================