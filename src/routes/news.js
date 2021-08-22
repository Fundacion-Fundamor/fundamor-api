const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const verify = require("../middleware/auth/verify");
const uploadImage = require("../middleware/upload");

router.post("/post", verify, newsController.create);

router.post("/uploadImages", uploadImage, newsController.uploadImages);
module.exports = router;
