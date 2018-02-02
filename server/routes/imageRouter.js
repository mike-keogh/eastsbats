var express = require("express");
var router = express.Router();

var imageDb = require("../db/imageDb");

router.get("/", (req, res) => {
  imageDb.getImages(req.app.get("db")).then(game => {
    console.log("game", req);
    res.json(game);
  });
});

module.exports = router;
