const express = require("express");
const router = express.Router();
const foundationsController = require("../controllers/foundationsController");
const {check} = require ("express-validator");

// foundation list
router.get("/", foundationsController.list);

// get foundation
router.get("/:id", foundationsController.get);

// create foundation
router.post("/",
	[
		check("nombre", "El nombre es obligatorio").not().isEmpty(),
		check("correo", "Correo electrónico inválido").isEmail(),
		check("telefono", "El telefono debe ser de al menos 6 caracteres").isLength({min: 6})
	], foundationsController.create);

// update foundation
router.put("/", foundationsController.update);

// delete foundation
router.delete("/:id", foundationsController.delete);

module.exports = router;
