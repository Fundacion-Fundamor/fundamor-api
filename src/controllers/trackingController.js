/* eslint-disable camelcase */
const tracking = require("../models").tracking;
const adoption = require("../models").adoption;
exports.create = async (req, res) => {

	try {
		const searchResult = await adoption.findByPk(req.body.id_adopcion);
		if (searchResult.estado === "finalizada") {
			req.body.fecha = Date.now();

			const result = await tracking.create(req.body);
			res.status(201).json({
				state: true,
				message: "El seguimiento se ha registrado con éxito",
				data: result.id_seguimiento // id assigned
			});
		} else {
			res.status(200).json({
				state: false,
				message: "Solo se pueden registrar seguimientos a los procesos de adopción que hayan finalizado"
	
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al registrar el seguimiento"
		});
	}

};

exports.delete = async (req, res) => {
	try {

		const result = await tracking.destroy({
			where: {
				id_seguimiento: req.params["id"]
			}

		});

		if (result === 1) {
			res.status(200).json({
				state: true,
				message: "El seguimiento se ha eliminado exitosamente"
			});
		} else {
			res.status(200).json({
				state: false,
				message: "El seguimiento no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar el seguimiento"
		});
	}
};

exports.get = async (req, res) => {
	try {
		const searchResult = await tracking.findByPk(req.params["id"]);

		if (searchResult) {
			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(200).json({
				state: false,
				message: "El seguimiento no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener el seguimiento"
		});
	}
};

exports.update = async (req, res) => {
	try {

		await tracking.update(req.body, {
			where: {
				id_seguimiento: req.body.id_seguimiento
			}
		});

		res.status(200).json({
			state: true,
			message: "Los datos del seguimiento se han actualizado exitosamente"

		});

	} catch (error) {

		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al actualizar los datos del seguimiento"
		});

	}
};
exports.list = async (req, res) => {

	try {
		const searchResult = await tracking.findAll({
			where: {
				id_adopcion: req.body.id_adopcion
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
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de seguimientos de esta adopcion"
		});
	}
};
