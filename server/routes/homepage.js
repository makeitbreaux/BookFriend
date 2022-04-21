const express = require("express");
const { default: fetch } = require("node-fetch");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try {
        const index = await fetch(`https://book-friend.herokuapp.com/`);
        return res.status(200).json({index});
        
    } catch (error) {
        return next(error);
    }})
  

  module.exports = router;