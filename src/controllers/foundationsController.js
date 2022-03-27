/* eslint-disable camelcase */
const { Op } = require("sequelize");
const foundation = require("../models").foundation;
const animal = require("../models").animal;
exports.create = async (req, res) => {


	try {

		let condition = [{ nombre: req.body.nombre }];

		if (req.body.correo) {
			condition.push({ correo: req.body.correo });
		}
		const searchResult = await foundation.findAll({
			where: {
				[Op.or]: condition
			}
		});

		if (searchResult.length === 0) {
			const result = await foundation.create(req.body);
			res.status(201).json({
				state: true,
				message: "La fundación se ha creado con éxito",
				data: result.id_fundacion // id assigned
			});
		} else {
			res.status(200).json({
				state: false,
				message: "Ya existe una fundación registrada con este nombre o correo"

			});
		}

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al crear la fundación"
		});
	}
};

exports.delete = async (req, res) => {
	try {

		const result = await foundation.destroy({
			where: {
				id_fundacion: req.params["id"]
			}
		});

		if (result === 1) {
			res.status(200).json({
				state: true,
				message: "La fundación se ha eliminado exitosamente"
			});
		} else {
			res.status(200).json({
				state: false,
				message: "La fundación no existe"
			});
		}

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la fundación"
		});
	}
};


exports.myFoundation = async (req, res) => {

	try {
		const searchResult = await foundation.findByPk(req.userSession.id_fundacion);

		if (searchResult) {

			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(200).json({
				state: false,
				message: "La fundación no existe"

			});
		}

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la fundación"
		});
	}

};

exports.get = async (req, res) => {

	try {
		const searchResult = await foundation.findByPk(req.params["id"]);

		if (searchResult) {

			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(200).json({
				state: false,
				message: "La fundación no existe"

			});
		}

	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la fundación"
		});
	}

};

exports.update = async (req, res) => {
	try {

		await foundation.update(req.body, {
			where: {
				id_fundacion: req.userSession.id_fundacion
			}
		});

		res.status(200).json({
			state: true,
			message: "Los datos de la fundación se han actualizado exitosamente"

		});

	} catch (error) {

		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al actualizar los datos de la fundación"
		});

	}
};
exports.list = async (req, res) => {


	try {
		const searchResult = await foundation.findAll({});

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
			message: "Ha ocurrido un error al obtener la lista de fundaciones"
		});
	}

};

exports.publicAnimalList = async (req, res) => {


	try {
		const searchResult = await animal.findAll({
			where: {
				id_fundacion: req.params.id
			},
			include: "animalImage",
			order: [["id_animal", "DESC"]]
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
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}
};