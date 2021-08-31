const express = require("express");
const router = express.Router();
const adoptionsController = require("../controllers/adoptionsController");
const verify = require("../middleware/auth/verify");

// adoption list
router.get("/", verify, adoptionsController.list);

// get adoption
router.get("/:id", verify, adoptionsController.get);

// create adoption
router.post("/", verify, adoptionsController.create);

// update adoption
router.put("/", verify, adoptionsController.update);

// delete adoption
router.delete("/:id", verify, adoptionsController.delete);

module.exports = router;
