const express = require("express");
const router = express.Router();
const adoptionsController = require("../controllers/adoptionsController");
const verify = require("../middleware/auth/verify");
const {adoptionValidationRules, validate } = require("../middleware/validator");


// adoption list
router.get("/", verify, adoptionsController.list);

// get adoption
router.get("/:id", verify, adoptionsController.get);

// create adoption
router.post("/", verify, adoptionValidationRules(), validate, adoptionsController.create);

// update adoption
router.put("/", verify, adoptionValidationRules(), validate, adoptionsController.update);

// delete adoption
router.delete("/:id", verify, adoptionsController.delete);

module.exports = router;
