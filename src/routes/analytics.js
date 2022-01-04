const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");
const verify = require("../middleware/auth/verify");

// analytics list
router.get("/countAnimals", verify, analyticsController.countAnimals);
router.get("/rescuedAnimals", verify, analyticsController.rescuedAnimals);
router.get("/rescuedAnimalsPerGender", verify, analyticsController.rescuedAnimalsPerGender);
router.get("/adoptedAnimals", verify, analyticsController.adoptedAnimals);
router.get("/adoptedAnimalsPerGender", verify, analyticsController.adoptedAnimalsPerGender);
// get analytics
router.get("/:id", verify, analyticsController.adoptions);



module.exports = router;
