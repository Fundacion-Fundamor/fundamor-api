const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const verify = require("../middleware/auth/verify");
const uploadImage = require("../middleware/upload");


/**create post
 * 
 * expected objet:
 * {
 *	titulo:String
 * 	cuerpo:String
 * } 
 */
router.post("/", verify, postController.create);


/**upload images of post
 *
 * expected formData:
 * {
 *	id_noticia:String
 *  postImages: Array
 * }
 */
router.post("/uploadImages", verify, uploadImage, postController.uploadImages);

//list post
router.get("/", verify, postController.list);

// get post
router.get("/:id", verify, postController.get);

/**update post
 *
 * expected objet:
 * {
 *	titulo:String
 * 	cuerpo:String
 * }
 */
router.put("/", verify, postController.update);

// delete post
router.delete("/:id", verify, postController.delete);


module.exports = router;