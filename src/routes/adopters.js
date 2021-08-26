const express = require("express");
const router = express.Router();
const adoptersController = require("../controllers/adoptersController");


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
router.post("/", adoptersController.create);

// adopter list
router.get("/", adoptersController.list);

// get adopter
router.get("/:id", adoptersController.get);



// update adopter
router.put("/", adoptersController.update);

// delete adopter
router.delete("/:id", adoptersController.delete);

module.exports = router;