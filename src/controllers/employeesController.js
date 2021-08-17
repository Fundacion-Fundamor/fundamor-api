
/* eslint-disable camelcase */
const employee = require("../models").employee;
const adoption = require("../models").adoption;
const animal = require("../models").animal;
exports.create = async (req, res) => {

	//ejemplos de busquedas con joins

	//se puede hacer asi
	const employee = await employee.findOne({
		where: {
			rol: "administrador"
		}
	});

	// primero se obtiene el empleado  y luego la  fundacion asociada del empleado
	const hisFoundation = await employee.getFoundation();

	// o así, se obtiene el empleado y la fundacion asociada en la misma consulta
	const allData = await employee.findOne({
		where: {
			rol: "administrador"
		},
		include: "foundation"
	});


	res.status(200).json({
		message: "building this...",

		data2: hisFoundation,
		data3: allData

	});
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

	//mas ejemplos de busquedas con joins

	//se puede hacer asi, que devuelve la lista de adopciones y cada adopcion tiene adentro los datos de el animal asociado
	const allData = await adoption.findAll({
		where: {
			id_animal: 1
		},
		include: "animal"
	});

	//o asi, que devuelve un solo animal y un arreglo con la lista de adopciones asociadas
	const allData2 = await animal.findAll({
		where: {
			id_animal: 1
		},
		include: "adoption"
	});
	res.status(200).json({
		message: "building this...",

		data2: allData,
		data3: allData2

	});



};
