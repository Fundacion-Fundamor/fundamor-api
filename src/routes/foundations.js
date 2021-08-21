const express = require("express");
const router = express.Router();
const foundationsController = require("../controllers/foundationsController");
const { foundationValidationRules, validate } = require("../middleware/validator");

// foundation list
router.get("/", foundationsController.list);

// get foundation
router.get("/:id", foundationsController.get);

// create foundation
router.post("/", foundationValidationRules(), validate, foundationsController.create);

// update foundation
router.put("/", foundationsController.update);

// delete foundation
router.delete("/:id", foundationsController.delete);

module.exports = router;
