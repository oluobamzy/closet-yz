DROP TABLE IF EXISTS bin CASCADE;
CREATE TABLE bin (
  "id" integer PRIMARY KEY,
  "date_deleted" timestamp,
  "closet_id" integer REFERENCES "closet" (id) ON DELETE CASCADE,
  "item_id" integer REFERENCES "item" (id) ON DELETE CASCADE
);