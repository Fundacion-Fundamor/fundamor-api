const express = require("express");
const router = express.Router();
const questionOptionsController = require("../controllers/questionOptionsController");
const verify = require("../middleware/auth/verify");

// question options list
router.get("/", verify, questionOptionsController.list);

// get question options
router.get("/:id", verify, questionOptionsController.get);

// create question options
router.post("/", verify, questionOptionsController.create);

// update question options
router.put("/", verify, questionOptionsController.update);

// delete question options
router.delete("/:id", verify, questionOptionsController.delete);

module.exports = router;
