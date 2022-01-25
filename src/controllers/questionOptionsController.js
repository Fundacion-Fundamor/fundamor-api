/* eslint-disable camelcase */
const questionOption = require("../models").questionOption;

exports.create = async (req, res) => {

	try {

		await questionOption.bulkCreate(req.body.opciones, { updateOnDuplicate: ["descripcion"] });

		res.status(201).json({
			state: true,
			message: "El item de respuesta se ha registrado con éxito"
		});

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al registrar el item"
		});
	}

};

exports.delete = async (req, res) => {
	try {

		const result = await questionOption.destroy({
			where: {
				id_opcion: req.params["id"]
			}
		});

		if (result === 1) {
			res.status(200).json({
				state: true,
				message: "El item se ha eliminado exitosamente"
			});
		} else {
			res.status(200).json({
				state: false,
				message: "El item no existe"
			});
		}

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar el item"
		});
	}
};
exports.deleteMultiple = async (req, res) => {
	try {

		const result = await questionOption.destroy({
			where: {
				id_opcion: req.body.ids_opciones
			}
		});

		if (result) {
			res.status(200).json({
				state: true,
				message: "El item se ha eliminado exitosamente"
			});
		} else {
			res.status(200).json({
				state: false,
				message: "El item no existe"
			});
		}

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar el item"
		});
	}
};
exports.get = async (req, res) => {
	try {
		const searchResult = await questionOption.findByPk(req.params["id"]);

		if (searchResult) {
			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(200).json({
				state: false,
				message: "El item no existe"
			});
		}

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener el item"
		});
	}
};

exports.update = async (req, res) => {
	try {

		await questionOption.update(req.body, {
			where: {
				id_opcion: req.body.id_opcion
			}
		});

		res.status(200).json({
			state: true,
			message: "Los datos del item se han actualizado exitosamente"

		});

	} catch (error) {

		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al actualizar los datos del item"
		});

	}
};
exports.list = async (req, res) => {

	try {
		const searchResult = await questionOption.findAll({
			where: {
				id_pregunta: req.body.id_pregunta
			}
		});

		if (searchResult.length !== 0) {

			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(200).json({
				state: false,
				message: "No existen registros en la base de datos"

			});
		}

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de items de esta pregunta"
		});
	}
};
