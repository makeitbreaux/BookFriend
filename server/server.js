"use strict";

const app = require("./app");
const { PORT } = require("./config");
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST, function () {
  console.log(`Started on http://localhost:${PORT}`);
});