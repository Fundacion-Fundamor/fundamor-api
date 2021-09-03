const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animalsController");
const verify = require("../middleware/auth/verify");

// animal list
router.get("/", verify, animalsController.list);

// get animal
router.get("/:id", verify, animalsController.get);

// create animal
router.post("/", verify, animalsController.create);

// update animal
router.put("/", verify, animalsController.update);

// delete animal
router.delete("/:id", verify, animalsController.delete);

module.exports = router;
