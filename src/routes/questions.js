const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");
const verify = require("../middleware/auth/verify");

// question list
router.get("/", verify, questionsController.list);

// get question
router.get("/:id", verify, questionsController.get);

// create question
router.post("/", verify, questionsController.create);

// update question
router.put("/", verify, questionsController.update);

// delete question
router.delete("/:id", verify, questionsController.delete);

module.exports = router;
