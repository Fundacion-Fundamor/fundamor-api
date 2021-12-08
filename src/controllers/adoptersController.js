
/* eslint-disable camelcase */
const adopter = require("../models").adopter;
const adoption = require("../models").adoption;
const animal = require("../models").animal;
const { Op } = require("sequelize");

exports.create = async (req, res) => {

	try {
		const searchResult = await adopter.findAll({
			where: req.body.correo ? {
				[Op.or]: [
					{ id_adoptante: req.body.id_adoptante },
					{ correo: req.body.correo }
				]
			} : {
				id_adoptante: req.body.id_adoptante

			}
		});
		if (searchResult.length === 0) {
			const result = await adopter.create(req.body);
			res.status(201).json({
				state: true,
				message: "El adoptante se ha registrado con éxito",
				data: result.id_adoptante // id assigned
			});
		} else {
			res.status(200).json({
				state: false,
				message: "Ya existe un adoptante registrado con esta identificación o correo"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al registrar el adoptante"
		});
	}

};

exports.delete = async (req, res) => {
	try {
		await adoption.destroy({
			where: {
				id_adoptante: req.params["id"]
			}
		});
		const result = await adopter.destroy({
			where: {
				id_adoptante: req.params["id"]
			}
		});

		if (result === 1) {
			res.status(200).json({
				state: true,
				message: "El adoptante se ha eliminado exitosamente"
			});
		} else {
			res.status(200).json({
				state: false,
				message: "El adoptante no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar el adoptante"
		});
	}
};

exports.get = async (req, res) => {
	try {
		const searchResult = await adopter.findByPk(req.params["id"], { attributes: { exclude: ["contrasenia"] } });

		if (searchResult) {
			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(404).json({
				state: false,
				message: "El adoptante no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener el adoptante"
		});
	}
};

exports.update = async (req, res) => {
	try {
		let searchResult = [];
		if (req.body.correo) {
			searchResult = await adopter.findAll({
				where: {
					correo: req.body.correo,
					id_adoptante:
					{
						[Op.ne]: req.body.id_adoptante
					}
				}
			});
		}

		if (searchResult.length === 0) {
			await adopter.update(req.body, {
				where: {
					id_adoptante: req.body.id_adoptante
				}
			});

			res.status(200).json({
				state: true,
				message: "Los datos del adoptante se han actualizado exitosamente"
			});

		} else {
			res.status(200).json({
				state: false,
				message: "Ya existe un adoptante registrado con este correo"
			});
		}

	} catch (error) {

		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al actualizar los datos del adoptante"
		});

	}
};
exports.list = async (req, res) => {

	try {
		//? como obtengo los adoptantes de una fundacion?
		const searchResult = await adopter.findAll({

			attributes: { exclude: ["contrasenia"] },
			include: {
				model: adoption, as: "adoption",
				include: {
					model: animal, as: "animal",
					where: {
						id_fundacion: req.userSession.id_fundacion
					}
				}
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
			message: "Ha ocurrido un error al obtener la lista de adoptantes"
		});
	}

};
