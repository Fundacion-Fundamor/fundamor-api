const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { tokenValidationRules, validate } = require("../middleware/validator");
const verify = require("../middleware/auth/verify");


router.post("/token", tokenValidationRules(), validate, authController.create);


router.get("/", verify, authController.authenticatedUser);


router.post("/recoveryPassword", authController.recoveryPassword);
module.exports = router;
