const express = require("express");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try {
        const index = await get(`https://book-friend.herokuapp.com/`);
        return res.status(200).json({index});
        
    } catch (error) {
        return next(error);
    }})
  

  module.exports = router;