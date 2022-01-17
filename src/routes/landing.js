const express = require("express");

const router = express.Router();
const landingController = require("../controllers/landingController");


//render a index page
router.get("/", landingController.main);

//render a post page
router.get("/post", landingController.post);

//render a post page
router.get("/post/detail/:id_post", landingController.postDetail);

//render a animal list page
router.get("/animals", landingController.animals);

//render a animal ldetail page
router.get("/animals/detail/:id_animal", landingController.animalDetail);

//render a contact page
router.get("/contact", landingController.contact);

//render a about page
router.get("/about", landingController.about);



//get animal list paginate
router.get("/api/v2/animals", landingController.animalsPagination);

module.exports = router;