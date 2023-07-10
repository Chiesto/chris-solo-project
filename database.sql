--DB name needs to be 'pantry_pal'

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "fridge" (
	"id" SERIAL PRIMARY KEY,
	"ingredient_name" VARCHAR NOT NULL,
	"food_group_id" INT NOT NULL REFERENCES "food_group",
	"amount" VARCHAR,
	"expiration" DATE,
	"user_id" INT REFERENCES "user"
);
CREATE TABLE "food_group" (
	"id" SERIAL PRIMARY KEY,
	"group_name" VARCHAR
);