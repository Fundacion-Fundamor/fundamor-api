const express = require("express");
const router = express.Router();
const foundationsController = require("../controllers/foundationsController");
const { foundationValidationRules, validate } = require("../middleware/validator");
const verify = require("../middleware/auth/verify");

// foundation list
router.get("/", verify, foundationsController.list);

// get foundation of user in session
router.get("/myFoundation", verify, foundationsController.myFoundation);

//
router.get("/:id", verify, foundationsController.get);

//get animal list paginate, param is a foundation id
router.get("/:id/animals", foundationsController.animalsPagination);

//get animal list paginate, param is a foundation id
router.get("/:id/animal/:id_animal", foundationsController.getAnimal);

// create foundation
router.post("/", verify, foundationValidationRules(), validate, foundationsController.create);

// update foundation
router.put("/", verify, foundationsController.update);

// delete foundation
router.delete("/:id", verify, foundationsController.delete);

module.exports = router;
