const { check, validationResult } = require("express-validator");

const animalImageValidationRules = () => {
	return [
		check("id_animal", "El nombre es obligatorio").not().isEmpty(),
		check("ruta", "La ruta es obligatoria").not().isEmpty()
	];
};
const postImageValidationRules = () => {
	return [
		check("id_publicacion", "La imagen se debe asociar a una publicación").not().isEmpty(),
		check("ruta", "La ruta es obligatoria").not().isEmpty()
	];
};

const questionOptionValidationRules = () => {
	return [
		check("opciones", "Solo se admite un arreglo de datos").isArray()

	];
};

const employeeValidationRules = () => {
	return [
		check("correo", "Correo electrónico inválido").isEmail().not().isEmpty(),
		check("contrasenia", "La contraseña es obligatoria y debe tener al menos 6 caracteres").isLength({ min: 6 }).not().isEmpty(),
		check("nombre", "El nombre es obligatorio").not().isEmpty()
	];
};

const employeeValidationEditRules = () => {
	return [
		check("correo", "Correo electrónico inválido").isEmail().not().isEmpty(),
		check("nombre", "El nombre es obligatorio").not().isEmpty()
	];
};
const adopterValidationRules = () => {
	return [
		check("nombre", "El nombre es obligatorio").not().isEmpty(),
		//check("telefono_casa", "El telefono de la casa es un campo obligatorio").not().isEmpty(),
		check("telefono_celular", "El telefono celular es un campo obligatorio").not().isEmpty(),
		check("ciudad", "La ciudad es un campo obligatorio").not().isEmpty(),
		check("ocupacion", "La ocupación es un campo obligatorio").not().isEmpty()
		// check("correo", "Correo electrónico inválido").isEmail().not().isEmpty(),
		// check("contrasenia", "La contraseña es obligatoria y debe tener al menos 6 caracteres").isLength({ min: 6 }).not().isEmpty()
	];
};
const adoptionValidationRules = () => {
	return [
		check("id_animal", "Debe especificar el animal a adoptar").not().isEmpty(),
		// check("fecha_estudio", "La fecha del estudio es obligatoria").not().isEmpty(), //se asume que es la actual
		//check("fecha_entrega", "La fecha de la entrega es obligatoria").not().isEmpty(),
		check("estado", "El estado de la adopción debe ser 'Finalizada' o 'En proceso'").isIn(["Finalizada", "En proceso"]).not().isEmpty(),
		//check("observaciones", "Las observaciones son un campo obligatorio").not().isEmpty(),
		check("id_adoptante", "El adoptante es obligatorio").not().isEmpty(),
		check("id_adopcion", "El identificador de adopción es obligatorio").not().isEmpty()
	];
};
const animalValidationRules = () => {
	return [
		check("especie", "Se debe especificar la especie del animal").not().isEmpty(),
		check("nombre", "El nombre del animal es obligatorio").not().isEmpty(),
		check("fecha_nacimiento", "La fecha de nacimiento es un campo obligatorio").not().isEmpty(),
		check("sexo", "Se debe especificar el sexo del animal").not().isEmpty(),
		check("color", "Se debe especificar el color del animal").not().isEmpty(),
		check("esterilizado", "Se debe especificar si el animal ha sido esterilizado").not().isEmpty(),
		check("esterilizado", "'Esterilizado' debe ser un valor binario").isBoolean(),
		check("desparasitado", "Se debe especificar si el animal ha sido desparasitado").not().isEmpty(),
		check("desparasitado", "'Desparasitado' debe ser un valor binario").isBoolean(),
		check("tamanio", "Se debe especificar el tamaño del animal").not().isEmpty(),
		check("estado", "Se debe especificar el estado del animal").not().isEmpty()
	];
};
const postValidationRules = () => {
	return [
		check("nombre", "El nombre es obligatorio").not().isEmpty()
	];
};
const questionValidationRules = () => {
	return [

		check("titulo", "La pregunta debe llevar un titulo").not().isEmpty(),
		check("tipo_pregunta", "El tipo de pregunta debe ser debe ser 'abierta' o 'multiple'").isIn(["abierta", "multiple"]).not().isEmpty()
	];
};
const adoptionQuestionValidationRules = () => {
	return [

		check("id_pregunta", "El campo id_pregunta es obligatorio").not().isEmpty()
	];
};
const trackingValidationRules = () => {
	return [
		check("id_adopcion", "Debe especificar la adopcion").not().isEmpty(),
		check("anotaciones", "El registro de seguimiento debe llevar anotaciones").not().isEmpty(),
		check("estado", "El tipo de pregunta debe ser debe ser 'abierta' o 'multiple'").isIn(["abierta", "multiple"]).not().isEmpty()
	];
};
const foundationValidationRules = () => {
	return [
		check("nombre", "El nombre es obligatorio").not().isEmpty()
		// check("correo", "Correo electrónico inválido").isEmail().not().isEmpty(),
		// check("telefono", "El telefono debe ser de al menos 6 caracteres").isLength({min: 6}).not().isEmpty()
	];
};
const tokenValidationRules = () => {
	return [
		check("correo", "Correo electrónico inválido").isEmail().not().isEmpty(),
		check("contrasenia", "La contraseña es obligatoria").not().isEmpty()
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map(err => extractedErrors.push(err.msg));

	return res.status(422).json({
		errors: extractedErrors
	});
};

module.exports = {
	employeeValidationRules,
	employeeValidationEditRules,
	adopterValidationRules,
	adoptionValidationRules,
	animalValidationRules,
	adoptionQuestionValidationRules,
	postValidationRules,
	foundationValidationRules,
	questionValidationRules,
	animalImageValidationRules,
	postImageValidationRules,
	trackingValidationRules,
	tokenValidationRules,
	questionOptionValidationRules,
	validate
};