const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animalsController");

// animal list
router.get("/", animalsController.list);

// get animal
router.get("/:id", animalsController.get);

// create animal
router.post("/", animalsController.create);

// update animal
router.put("/", animalsController.update);

// delete animal
router.delete("/", animalsController.delete);

module.exports = router;
