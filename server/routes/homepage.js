const express = require("express");
const { BadRequestError } = require("../expressError");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try {
  
        const user = await pool.query(`SELECT * FROM users WHERE username = $1`, [req.params.username]);
        return res.json(user.rows[0]);
  
    } catch (error) {
        return next(BadRequestError());
    }})
  

  module.exports = router;