// Require express
const express = require("express");
// Require router
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Server is up and running");
});

module.exports = router;