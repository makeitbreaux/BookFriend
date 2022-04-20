"use strict";

/** Express app for BookFriend. */

const express = require("express");
const cors = require("cors");
const path = require("path");
const { PORT } = require("./config");

const { NotFoundError } = require("./expressError");

const { authenticateJWT } = require("./middleware/auth");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
// const homepageRoutes = require('./routes/homepage');
const serveStatic = require('serve-static')

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

app.use(serveStatic(path.join(__dirname, 'dist')))
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
// app.use("/homepage", homepageRoutes);

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
