DROP TABLE IF EXISTS item CASCADE;

CREATE TABLE item (
  "id" integer PRIMARY KEY,
  "item_name" varchar not null,
  "category" varchar not null,
  "color" varchar not null,
  "purchase_date" Date,
  "use_count" Integer,
  "img_src" varchar not null,
  "description" varchar,
  "season" varchar,
  "created_at" timestamp,
  "closet_id" integer REFERENCES "closet" (id) ON DELETE CASCADE,
  "last_worn_date" Date,
  "size" varchar  not null,
  "brand_name" varchar
);