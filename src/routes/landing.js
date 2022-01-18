const express = require("express");

const router = express.Router();
const landingController = require("../controllers/landingController");
const { adopterFormValidationRules, validate, contactFormValidationRules } = require("../middleware/validator");

//render a index page
router.get("/", landingController.main);

//render a post page
router.get("/post", landingController.post);

//render a post page
router.get("/post/detail/:id_post", landingController.postDetail);

//render a animal list page
router.get("/animals", landingController.animals);

//render a animal detail page
router.get("/animals/detail/:id_animal", landingController.animalDetail);


//render a adopter form
router.get("/animals/form/:id_animal", landingController.adopterForm);

//render a contact page
router.get("/contact", landingController.contact);

//render a about page
router.get("/about", landingController.about);

//get animal list paginate
router.get("/api/v2/animals", landingController.animalsPagination);

//receive adopter form
router.post("/api/v2/adopterForm", adopterFormValidationRules(), validate, landingController.receiveAdopterForm);

//receive contact data for message
router.post("/api/v2/contactmessage", contactFormValidationRules(), validate, landingController.sendContactMessage);
module.exports = router;