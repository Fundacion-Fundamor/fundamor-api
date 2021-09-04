const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/token", authController.create);





router.post("/recoveryPassword", authController.recoveryPassword);
module.exports = router;
