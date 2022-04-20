"use strict";

/** Express app for BookFriend. */

const express = require("express");
const cors = require("cors");
const path = require("path");


const { NotFoundError } = require("./server/expressError");

const { authenticateJWT } = require("./server/middleware/auth");
const authRoutes = require("./server/routes/auth");
const usersRoutes = require("./server/routes/users");
// const homepageRoutes = require('./routes/homepage');


const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

app.use(express.static(path.resolve(__dirname, "./server")));
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
// app.use("/homepage", homepageRoutes);


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
