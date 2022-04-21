const express = require("express");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try {
        const index = await getHomepage(req.body);
        return res.status(200).json({index});
        
    } catch (error) {
        return next(error);
    }})
  

  module.exports = router;