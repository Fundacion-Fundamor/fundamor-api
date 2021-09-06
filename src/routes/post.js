const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const verify = require("../middleware/auth/verify");
const {postValidationRules, validate } = require("../middleware/validator");


/**create post
 * 
 * expected objet:
 * {
 *	titulo:String
 * 	cuerpo:String
 * } 
 */
router.post("/", verify, postValidationRules(), validate, postController.create);

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
