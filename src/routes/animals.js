const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animalsController");
const verify = require("../middleware/auth/verify");
const { animalValidationRules, validate } = require("../middleware/validator");

// animal list
router.get("/", verify, animalsController.list);

// get animal
router.get("/:id", verify, animalsController.get);

// create animal
router.post("/", verify, animalValidationRules(), validate, animalsController.create);

// update animal
router.put("/", verify, animalValidationRules(), validate, animalsController.update);

// delete animal
router.delete("/:id", verify, animalsController.delete);

module.exports = router;
