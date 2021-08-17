// const empleado = require("../models").empleado;

exports.create = async (req, res) => {

	res.status(200).json({
		message: "NOT IMPLEMENTED: Employee create"
	});
};

exports.delete = (req, res) => {
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
exports.list = (req, res) => {
	res.status(200).json({
		message: "NOT IMPLEMENTED: Employee list"
	});
};
