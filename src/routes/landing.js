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

//render a animal list page
router.get("/animals/detail/:id_animal", landingController.animalDetail);

//render a animal list page
router.get("/contact", landingController.contact);

module.exports = router;