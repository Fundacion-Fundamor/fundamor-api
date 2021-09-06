const express = require("express");
const router = express.Router();
const animalImagesController = require("../controllers/animalImagesController");
const uploadImage = require("../middleware/upload");
const verify = require("../middleware/auth/verify");
const { animalImageValidationRules, validate } = require("../middleware/validator");



/**upload images of animal
 *
 * expected formData:
 * {
 *	id_animal:String
 *  animalImages: Array
 * }
 */
router.post("/uploadImages", verify, animalImageValidationRules(), validate, uploadImage, animalImagesController.upload);


/**
 * Se espera un arreglo con los ids de las imagenes
 */
router.delete("/", verify, animalImagesController.delete);

module.exports = router;