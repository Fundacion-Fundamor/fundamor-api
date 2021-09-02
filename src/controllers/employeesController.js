
/* eslint-disable camelcase */
const employee = require("../models").employee;
const { Op } = require("sequelize");
const helpers = require("../helpers/helpers");
exports.create = async (req, res) => {

	try {
		const searchResult = await employee.findAll({
			where: {
				[Op.or]: [
					{ id_empleado: req.body.id_empleado },
					{ correo: req.body.correo }
				]
			}
		});
		if (searchResult.length === 0) {
			req.body.id_fundacion = req.userSession.id_fundacion;
			req.body.contrasenia = await helpers.encryptPassword(req.body.contrasenia);

			const result = await employee.create(req.body);
			res.status(201).json({
				state: true,
				message: "El colaborador se ha registrado con éxito",
				data: result.id_empleado // id assigned
			});
		} else {
			res.status(409).json({
				state: false,
				message: "Ya existe un colaborador registrado con esta identificación o correo"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al registrar el colaborador"
		});
	}

};

exports.delete = async (req, res) => {
	try {

		const result = await employee.destroy({
			where: {
				id_empleado: req.params["id"]
			}
		});

		if (result === 1) {
			res.status(200).json({
				state: true,
				message: "El colaborador se ha eliminado exitosamente"
			});
		} else {
			res.status(404).json({
				state: false,
				message: "El colaborador no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar el colaborador"
		});
	}
};

exports.get = async (req, res) => {
	try {
		const searchResult = await employee.findByPk(req.params["id"], { attributes: { exclude: ["contrasenia"] } });

		if (searchResult) {
			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(404).json({
				state: false,
				message: "El colaborador no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener el colaborador"
		});
	}
};

exports.update = async (req, res) => {
	try {

		const searchResult = await employee.findAll({
			where: {
				correo: req.body.correo,
				id_empleado:
				{
					[Op.ne]: req.body.id_empleado
				}
			}
		});
		//? como actualizar la cedula
		if (searchResult.length === 0) {
			await employee.update(req.body, {
				where: {
					id_empleado: req.body.id_empleado
				}
			});

			res.status(200).json({
				state: true,
				message: "Los datos del colaborador se han actualizado exitosamente",
				data: searchResult
			});

		} else {
			res.status(409).json({
				state: false,
				message: "Ya existe un colaborador registrado con este correo"
			});
		}

	} catch (error) {

		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al actualizar los datos del colaborador"
		});

	}
};
exports.list = async (req, res) => {

	try {
		const searchResult = await employee.findAll({
			where: {
				id_fundacion: req.userSession.id_fundacion
			},
			attributes: { exclude: ["contrasenia"] }
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
			message: "Ha ocurrido un error al obtener la lista de colaboradores"
		});
	}
};
