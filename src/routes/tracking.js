const express = require("express");
const router = express.Router();
const tracking = require("../controllers/trackingController");
const verify = require("../middleware/auth/verify");

// tracking list
router.get("/", verify, tracking.list);

// get tracking
router.get("/:id", verify, tracking.get);

// create tracking
router.post("/", verify, tracking.create);

// update tracking
router.put("/", verify, tracking.update);

// delete tracking
router.delete("/:id", verify, tracking.delete);

module.exports = router;
