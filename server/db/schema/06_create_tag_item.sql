DROP TABLE IF EXISTS tag_item CASCADE;
CREATE TABLE tag_item (
  "id" integer PRIMARY KEY,
  "item_id" integer REFERENCES "item" (id) ON DELETE CASCADE,
  "tag_id" integer REFERENCES "tag" (id) ON DELETE CASCADE
);