const express = require("express");
const { BadRequestError } = require("../expressError");
const router = new express.Router();

router.get("/homepage", async (req, res, next) => {
    try {
        const index = await getHomepage(req.body);
        res.send(index)
        console.log(index)
        // return res.status(200).json({index});
        
    } catch (error) {
        return next(BadRequestError());
    }})
  

  module.exports = router;