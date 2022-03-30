const express = require("express");
const router = express.Router();
const foundationsController = require("../controllers/foundationsController");
const { foundationValidationRules, adopterFormValidationRules, contactFormValidationRules, validate } = require("../middleware/validator");
const verify = require("../middleware/auth/verify");

// foundation list
router.get("/", verify, foundationsController.list);

// get foundation of user in session
router.get("/myFoundation", verify, foundationsController.myFoundation);

//
router.get("/:id", verify, foundationsController.get);

//get animal list paginate, param id is a foundation id
router.get("/:id/animals", foundationsController.animalsPagination);

//get post list paginate, param id is a foundation id
router.get("/:id/post", foundationsController.postPagination);

//get post detail, param id is a foundation id
router.get("/:id/post/:id_post", foundationsController.getPost);


//get animal detail, param id is a foundation id
router.get("/:id/animal/:id_animal", foundationsController.getAnimal);

//get adopter form , param id is a foundation id
router.get("/:id/adopt/:id_animal", foundationsController.adopterForm);

// create foundation
router.post("/", verify, foundationValidationRules(), validate, foundationsController.create);

// update foundation
router.put("/", verify, foundationsController.update);

// delete foundation
router.delete("/:id", verify, foundationsController.delete);

//receive contact data for message
router.post("/contactmessage/:foudation_id", contactFormValidationRules(), validate, foundationsController.sendContactMessage);

module.exports = router;
