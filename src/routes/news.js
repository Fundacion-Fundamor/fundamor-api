const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const {verify} = require("../middleware/auth/index.js");

router.post("/post", verify, newsController.create);

module.exports = router;
