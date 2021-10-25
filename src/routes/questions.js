const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");
const { questionValidationRules, validate } = require("../middleware/validator");
const verify = require("../middleware/auth/verify");

// question list
router.get("/", verify, questionsController.list);

// get question
router.get("/:id", verify, questionsController.get);

// create question
router.post("/", verify, questionValidationRules(), validate, questionsController.create);

// update question
router.put("/", verify, questionValidationRules(), validate, questionsController.update);

// delete question
router.delete("/:id", verify, questionsController.delete);

// delete multiple question
router.delete("/", verify, questionsController.deleteMultiple);

module.exports = router;
