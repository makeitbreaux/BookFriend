"use strict";

const app = require("./app");
const { getDatabaseUri } = require("./config");


app.listen(getDatabaseUri, function () {
  console.log(`Started on http://localhost:${getDatabaseUri}`);
});