const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("route Api");
});

module.exports = router;