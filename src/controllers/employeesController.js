
/* eslint-disable camelcase */
const employee = require("../models").employee;
const adoption = require("../models").adoption;
const animal = require("../models").animal;
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




	// const contra = await helpers.encryptPassword(req.body.contrasenia);
	// const validPassword = await helpers.comparePassword(req.body.contrasenia, "$2a$10$3iAL5a/Jaos5CpHu0SxMauC5oH/XMHtRrisoML9m6JLPMDNCnkV9K");
	// res.status(200).json({
	// 	message: "building this...",

	// 	data2: contra,
	// 	data3:validPassword


	// });
	// //ejemplos de busquedas con joins

	// //se puede hacer asi
	// const employee = await employee.findOne({
	// 	where: {
	// 		rol: "administrador"
	// 	}
	// });

	// // primero se obtiene el empleado  y luego la  fundacion asociada del empleado
	// const hisFoundation = await employee.getFoundation();

	// // o así, se obtiene el empleado y la fundacion asociada en la misma consulta
	// const allData = await employee.findOne({
	// 	where: {
	// 		rol: "administrador"
	// 	},
	// 	include: "foundation"
	// });


	// res.status(200).json({
	// 	message: "building this...",

	// 	data2: hisFoundation,
	// 	data3: allData

	// });
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
