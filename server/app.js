"use strict";

/** Express app for BookFriend. */

const express = require("express");
const cors = require("cors");
const path = require("path");
const { NotFoundError } = require("./expressError");
const { authenticateJWT } = require("./middleware/auth");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
// const homepageRoutes = require('./routes/homepage');
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
// app.use("/homepage", homepageRoutes);

const router = express.Router();

router.get("/*", authorization, async (req, res) => {
  try {

      const user = await pool.query(`SELECT * FROM users WHERE user_id = $1`, [req.user_id]);
      return res.json(user.rows[0]);

  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
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
