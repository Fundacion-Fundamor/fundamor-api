const express = require("express");
const router = express.Router();
const adoptersController = require("../controllers/adoptersController");


const verify = require("../middleware/auth/verify");
/**create adopter
 *
 * expected objet:
 * {
 *       id_adoptante: String,
 *       nombre:String,
 *       telefono_casa: String (opcional),
 *       telefono_celular: String,
 *       ciudad: String,
 *       ocupacion: String,
 *       correo: String (Opcional),
 *       contrasenia: String (Opcional)
 * }
 *
 */
router.post("/", verify, adoptersController.create);

// adopter list
router.get("/", verify, adoptersController.list);

// get adopter
router.get("/:id", verify, adoptersController.get);

// update adopter
router.put("/", verify, adoptersController.update);

// delete adopter
router.delete("/:id", verify, adoptersController.delete);

module.exports = router;