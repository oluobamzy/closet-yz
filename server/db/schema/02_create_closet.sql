DROP TABLE IF EXISTS closet CASCADE;

CREATE TABLE closet (
  "id" integer PRIMARY KEY,
  "closet_name" varchar,
  "user_id" integer REFERENCES "user" (id) ON DELETE CASCADE,
  "created_at" timestamp
);