/* eslint-disable camelcase */
const question = require("../models").question;

exports.create = async (req, res) => {

	try {

		req.body.id_fundacion = req.userSession.id_fundacion;
		const result = await question.create(req.body);
		res.status(201).json({
			state: true,
			message: "La pregunta se ha registrado con éxito",
			data: result.id_pregunta // id assigned
		});

	} catch (error) {
		console.error(error);
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

		if (result === 1) {
			res.status(200).json({
				state: true,
				message: "La pregunta se ha eliminado exitosamente"
			});
		} else {
			res.status(404).json({
				state: false,
				message: "La pregunta no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar la pregunta"
		});
	}
};

exports.get = async (req, res) => {
	try {
		const searchResult = await question.findByPk(req.params["id"], { include: "questionOptions" });

		if (searchResult) {
			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(404).json({
				state: false,
				message: "La pregunta no existe"
			});
		}

	} catch (error) {
		console.error(error);
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

		console.error(error);
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
			include: "questionOptions"

		});

		if (searchResult.length !== 0) {

			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(404).json({
				state: false,
				message: "No existen registros en la base de datos"

			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de preguntas"
		});
	}
};
