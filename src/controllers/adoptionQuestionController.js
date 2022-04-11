/* eslint-disable camelcase */
const adoptionQuestion = require("../models").adoptionQuestion;


exports.create = async (req, res) => {

	try {
		//se espera un array de objetos
		const result = await adoptionQuestion.bulkCreate(req.body.respuestas);

		res.status(201).json({
			state: true,
			message: `Se han asociado ${result.length} preguntas a esta adopcion`
		});

	} catch (error) {

		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al asociar las preguntas"
		});
	}

};

exports.delete = async (req, res) => {
	try {

		const result = await adoptionQuestion.destroy({
			where: {
				id_pregunta_adopcion: req.params["id"]
			}
		});

		if (result === 1) {
			res.status(200).json({
				state: true,
				message: "La pregunta se ha desasociado exitosamente"
			});
		} else {
			res.status(200).json({
				state: false,
				message: "La pregunta no existe"
			});
		}

	} catch (error) {
	
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al desasociar la pregunta"
		});
	}
};

exports.deleteMultiple = async (req, res) => {
	try {

		//result is rows affected
		//se espera un array de strings
		const result = await adoptionQuestion.destroy({
			where: {
				id_pregunta_adopcion: req.body.asociaciones
			}
		});

		if (result > 0) {
			res.status(200).json({
				state: true,
				message: `Se han desasociado ${result} preguntas exitosamente`
			});
		} else {
			res.status(200).json({
				state: false,
				message: "Las preguntas no existen"
			});
		}

	} catch (error) {
	
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al desasociar la pregunta"
		});
	}
};


exports.list = async (req, res) => {

	try {
		const searchResult = await adoptionQuestion.findAll({
			where: {
				id_adopcion: req.params["id"]
			},
			include: "question"

		});

		if (searchResult) {

			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(200).json({
				state: false,
				message: "No existen preguntas asociadas a esta adopción"

			});
		}

	} catch (error) {
	
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de preguntas"
		});
	}
};
