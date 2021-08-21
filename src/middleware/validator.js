const { check, validationResult } = require("express-validator");

const foundationValidationRules = () => {
	return 	[
		check("nombre", "El nombre es obligatorio").not().isEmpty(),
		check("correo", "Correo electrónico inválido").isEmail(),
		check("telefono", "El telefono debe ser de al menos 6 caracteres").isLength({min: 6})
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

	return res.status(422).json({
		errors: extractedErrors
	});
};

module.exports = {
	foundationValidationRules,
	validate
};