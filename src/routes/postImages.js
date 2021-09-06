const express = require("express");
const router = express.Router();
const postImagesController = require("../controllers/postImagesController");
const uploadImage = require("../middleware/upload");
const { postImageValidationRules, validate } = require("../middleware/validator");
const verify = require("../middleware/auth/verify");


/**upload images of animal
 *
 * expected formData:
 * {
 *	id_publicacion:String
 *  postImages: Array
 * }
 */
router.post("/uploadImages", verify, postImageValidationRules(), validate, uploadImage, postImagesController.upload);


/**
 * Se espera un arreglo con los ids de las imagenes
 */
router.delete("/", verify, postImagesController.delete);

module.exports = router;