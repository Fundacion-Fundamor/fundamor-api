const express = require("express");
const router = express.Router();
const questionOptionsController = require("../controllers/questionOptionsController");
const { questionOptionValidationRules, validate } = require("../middleware/validator");
const verify = require("../middleware/auth/verify");

// question options list
router.get("/", verify, questionOptionsController.list);

// get question options
router.get("/:id", verify, questionOptionsController.get);

// create question options
router.post("/", verify, questionOptionValidationRules(), validate, questionOptionsController.create);

// update question options
router.put("/", verify, questionOptionValidationRules(), validate, questionOptionsController.update);

// delete question options
router.delete("/:id", verify, questionOptionsController.delete);

// delete multiple question options
router.delete("/", verify, questionOptionsController.deleteMultiple);

module.exports = router;
