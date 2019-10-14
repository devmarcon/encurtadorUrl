const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

//@route GET /:code
//@desc Redireciona para url original
router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) return res.redirect(url.longUrl);
    else return res.status(401).json("URL não foi localizada");
  } catch (error) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
