const express = require("express");
const router = express.Router();
const foundationsController = require("../controllers/foundationsController");
const { foundationValidationRules, validate } = require("../middleware/validator");
const verify = require("../middleware/auth/verify");

// foundation list
router.get("/", verify, foundationsController.list);

// get foundation of user in session
router.get("/myFoundation", verify, foundationsController.myFoundation);

//
router.get("/:id", verify, foundationsController.get);

// create foundation
router.post("/", verify, foundationValidationRules(), validate, foundationsController.create);

// update foundation
router.put("/", verify, foundationsController.update);

// delete foundation
router.delete("/:id", verify, foundationsController.delete);

module.exports = router;
