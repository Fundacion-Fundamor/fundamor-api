const express = require("express");
const router = express.Router();
const foundationsController = require("../controllers/foundationsController");

// foundation list
router.get("/", foundationsController.list);

// get foundation
router.get("/:id", foundationsController.get);

// create foundation
router.post("/", foundationsController.create);

// update foundation
router.put("/", foundationsController.update);

// delete foundation
router.delete("/:id", foundationsController.delete);

module.exports = router;
