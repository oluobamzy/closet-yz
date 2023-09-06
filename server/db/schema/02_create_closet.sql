DROP TABLE IF EXISTS closet CASCADE;

CREATE TABLE closet (
  "id" SERIAL PRIMARY KEY,
  "closet_name" varchar,
  "users_id" integer REFERENCES "users" (id) ON DELETE CASCADE,
  "created_at" timestamp
);