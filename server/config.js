"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = process.env.PORT || 8080;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "bookfriend_test"
      : process.env.DATABASE_URL || 'postgres://nabxygftvdyrem:3973ff4fe6ce34365a1823a421ae69e08a01e28537f12e92cffeb9bd03664fc4@ec2-34-194-158-176.compute-1.amazonaws.com:5432/d8tobp3l8qbusl';
}

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("Bookfriend Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};

// TO CREATE CONNECTION IN DB TO HEROKU PG DB
// psql --host=ec2-34-194-158-176.compute-1.amazonaws.com --port=5432 --username=nabxygftvdyrem --password --dbname=d8tobp3l8qbusl