-- tables for testing
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT,
	employment BOOLEAN,
	experience INTEGER
);

CREATE TABLE IF NOT EXISTS schemes (
	id SERIAL PRIMARY KEY,
	name TEXT,
	detail TEXT,
	url TEXT,
	photo_url TEXT,
	employment BOOLEAN,
	experience INTEGER
);

-- for experience input <=



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