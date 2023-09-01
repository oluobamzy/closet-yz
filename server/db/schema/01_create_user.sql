DROP TABLE IF EXISTS user CASCADE;
-- CREATE USERS
CREATE TABLE user (
  "id" integer PRIMARY KEY not null,
  "username" varchar not null,
  "first_name" varchar not null,
  "last_name" varchar   not null,
  "email" varchar not null,
  "password" varchar not null,
  "created_at" timestamp
);