const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { tokenValidationRules, validate } = require("../middleware/validator");



router.post("/token", tokenValidationRules(), validate, authController.create);





router.post("/recoveryPassword", authController.recoveryPassword);
module.exports = router;
