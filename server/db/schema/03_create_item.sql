DROP TABLE IF EXISTS item CASCADE;

CREATE TABLE item (
  "id" SERIAL PRIMARY KEY,
  "item_name" varchar not null,
  "category" varchar not null,
  "subcategory" varchar not null,
  "color" varchar not null,
  "purchase_date" Date,
  "use_count" Integer DEFAULT 0,
  "img_src" varchar not null,
  "description" varchar,
  "season" varchar,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
  "closet_id" integer REFERENCES "closet" (id) ON DELETE CASCADE,
  "last_worn_date" Date,
  "size" varchar  not null,
  "brand_name" varchar,
  "expired_timestamp" TIMESTAMP DEFAULT CURRENT_TIMESTAMP + interval '1 day',
  "delete" BOOLEAN DEFAULT false
);
