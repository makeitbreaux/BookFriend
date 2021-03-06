const express = require("express");
const router = new express.Router();
const pool = require("../db");

router.get("/", async (req, res, next) => {
    try {
        const user = await pool.query(`SELECT * FROM users WHERE username = $1`, [req.body.username]);
        return res.json(user.rows[0]);

        res.send('Successful response.');
        
    } catch (error) {
        res.status(400).json({
            message: "Some error occurred",
            err
          });
    }})
  

  module.exports = router;