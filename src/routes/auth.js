const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/token", authController.create);

module.exports = router;