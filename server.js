"use strict";

const app = require("./server/app");
const { PORT } = require("./server/config");

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});