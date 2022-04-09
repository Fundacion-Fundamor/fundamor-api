const express = require("express");
const router = express.Router();
const foundationsController = require("../controllers/foundationsController");
const { foundationValidationRules, adopterFormValidationRules, contactFormValidationRules, validate } = require("../middleware/validator");
const verify = require("../middleware/auth/verify");


// foundation list
// router.get("/", verify, foundationsController.list);

// get foundation of user in session
router.get("/myFoundation", foundationsController.myFoundation);


//get animal list paginate
router.get("/animals", foundationsController.animalsPagination);

//get post list paginate
router.get("/post", foundationsController.postPagination);

//get post detail,
router.get("/post/:id_post", foundationsController.getPost);


//get animal detail, 
router.get("/animal/:id_animal", foundationsController.getAnimal);

//get adopter form , param id is a foundation id
router.get("/adopt/:id_animal", foundationsController.adopterForm);

// create foundation
router.post("/", verify, foundationValidationRules(), validate, foundationsController.create);

// update foundation
router.put("/", verify, foundationsController.update);

// delete foundation
// router.delete("/:id", verify, foundationsController.delete);

//receive contact data 
router.post("/contactmessage", contactFormValidationRules(), validate, foundationsController.sendContactMessage);

//receive adoption form data 
router.post("/adoptionForm", adopterFormValidationRules(), validate, foundationsController.receiveAdopterForm);


//
router.get("/:id", verify, foundationsController.get);

module.exports = router;
