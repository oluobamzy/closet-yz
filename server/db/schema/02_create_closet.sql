DROP TABLE IF EXISTS closet CASCADE;

CREATE TABLE closet (
  "id" SERIAL PRIMARY KEY,
  "closet_name" varchar not null,
  "users_id" integer REFERENCES "users" (id) ON DELETE CASCADE not null,
  "description" varchar,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);