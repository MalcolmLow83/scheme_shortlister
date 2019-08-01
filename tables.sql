-- tables for testing
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT,
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
	detail TEXT,
	url TEXT,
	photo_url TEXT,
	education TEXT,
	grad_year INTEGER,
	employment TEXT,
	experience INTEGER,
	message TEXT
);


-- for experience input <=

-- ==============================================

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT,
	citizenship TEXT,
	education INTEGER,
	grad_year INTEGER,
	employability BOOLEAN,
	experience INTEGER,
	ord_yrs INTEGER
);

CREATE TABLE IF NOT EXISTS schemes (
	id SERIAL PRIMARY KEY,
	name TEXT,
	detail TEXT,
	org TEXT,
	url TEXT,
	citizenship TEXT,
	education INTEGER,
	grad_year INTEGER,
	company BOOLEAN,
	experience INTEGER,
	ord_yrs INTEGER
);