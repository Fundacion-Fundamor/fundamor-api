
/* eslint-disable camelcase */
const employee = require("../models").employee;
const helpers = require("../helpers/helpers");
exports.create = async (req, res) => {

	try {
		const searchResult = await employee.findByPk(req.body.id_empleado);
		if (!searchResult) {
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
				message: "Ya existe un colaborador registrado con esta identificación"

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

	res.status(200).json({
		message: "NOT IMPLEMENTED: Employee delete"
	});
};

exports.get = (req, res) => {
	res.status(200).json({
		message: "NOT IMPLEMENTED: Employee get"
	});
};

exports.update = (req, res) => {
	console.log(req.body);
	res.status(200).json({
		message: "NOT IMPLEMENTED: Employee update"
	});
};
exports.list = async (req, res) => {

	console.log(req.body);
	res.status(200).json({
		message: "NOT IMPLEMENTED: Employee list"
	});

};
