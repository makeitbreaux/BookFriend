const express = require("express");
const { BadRequestError } = require("../expressError");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try {
        const index = await getHomepage(req.body);
        return res.status(200).json({index});
        
    } catch (error) {
        return next(BadRequestError());
    }})
  

  module.exports = router;