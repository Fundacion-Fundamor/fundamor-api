/* eslint-disable camelcase */
const question = require("../models").question;
const questionOption = require("../models").questionOption;

exports.create = async (req, res) => {

	try {

		req.body.id_fundacion = req.userSession.id_fundacion;
		const result = await question.create(req.body);

		if (req.body.opciones_pregunta) {
			let questionOptions = [];
			(req.body.opciones_pregunta).forEach(element => {
				element.id_pregunta = result.id_pregunta;
				questionOptions.push(element);
			});
			await questionOption.bulkCreate(questionOptions);
		}
		res.status(201).json({
			state: true,
			message: "La pregunta se ha registrado con éxito",
			data: result.id_pregunta // id assigned
		});

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al registrar la pregunta"
		});
	}

};

exports.delete = async (req, res) => {
	try {

		const result = await question.destroy({
			where: {
				id_pregunta: req.params["id"]
			},
			include: "questionOptions"
		});

		res.status(200).json({
			state: result === 1,
			message: result === 1 ? "La pregunta se ha eliminado exitosamente" : "La pregunta no existe"
		});

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar la pregunta"
		});
	}
};

exports.deleteMultiple = async (req, res) => {
	try {

		const result = await question.destroy({
			where: {
				id_pregunta: req.body.id_preguntas
			},
			include: "questionOptions"
		});

		res.status(200).json({
			state: result > 0,
			message: result > 0 ? "Las preguntas se han eliminado exitosamente" : "Las preguntas no existen"
		});

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar las preguntas"
		});
	}
};



exports.get = async (req, res) => {
	try {
		const searchResult = await question.findByPk(req.params["id"], { include: "questionOptions" });

		res.status(200).json({
			state: searchResult !== null,
			message: searchResult !== null ? "Resultados obtenidos" : "La pregunta no existe",
			data: searchResult
		});

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la pregunta"
		});
	}
};

exports.update = async (req, res) => {
	try {

		await question.update(req.body, {
			where: {
				id_pregunta: req.body.id_pregunta
			}
		});

		res.status(200).json({
			state: true,
			message: "Los datos de la pregunta se han actualizado exitosamente"

		});

	} catch (error) {

		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al actualizar los datos de la pregunta"
		});

	}
};
exports.list = async (req, res) => {

	try {
		const searchResult = await question.findAll({
			where: {
				id_fundacion: req.userSession.id_fundacion
			},
			order: [
				["id_pregunta", "ASC"],
				["questionOptions", "id_opcion", "ASC"]
			],
			include: "questionOptions"

		});

		res.status(200).json({
			state: searchResult.length !== 0,
			message: searchResult.length !== 0 ? "Resultados obtenidos" : "No existen registros en la base de datos",
			data: searchResult
		});

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de preguntas"
		});
	}
};
