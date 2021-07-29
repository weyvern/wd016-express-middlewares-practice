CREATE TABLE "token" (
  "id" SERIAL PRIMARY KEY,
  "value" text
);

  CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "token" int,
    "name" text,
    "lastName" text,
    "email" text,
    UNIQUE(token)
  );

ALTER TABLE "users" ADD FOREIGN KEY ("token") REFERENCES "token" ("id");
