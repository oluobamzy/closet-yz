DROP TABLE IF EXISTS access CASCADE;

CREATE TABLE access (
  "id" SERIAL PRIMARY KEY,
  "closet_id" integer REFERENCES "closet" (id) ON DELETE CASCADE,
  "users_id" integer REFERENCES "users" (id) ON DELETE CASCADE,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);