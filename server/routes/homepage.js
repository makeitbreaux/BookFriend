const express = require("express");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try {
        res.send('Successful response.');
        
    } catch (error) {
        return next(error);
    }})
  

  module.exports = router;