
/* eslint-disable camelcase */
const adoption = require("../models").adoption;
const animal = require("../models").animal;
const employee = require("../models").employee;
const adoptionQuestion = require("../models").adoptionQuestion;
const adopter = require("../models").adopter;

const { Op } = require("sequelize");
/**Primero se inserta el adoptante, luego la adopcion y finalmente las preguntas
 * adopterData:{},
 * adoptionData:{},
 * y luego se actualiza el animal
 * questionsData:[{}]
 * 
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
	try {

		let { adoptionData, adopterData, questionsData } = req.body;

		let id_adopter = "";

		console.log(adopterData);
		if (adopterData.selected) {
			id_adopter = adopterData.id_adoptante;
		} else {
			const searchResult = await adopter.findAll({
				where: adopterData.correo ? {
					[Op.or]: [
						{ id_adoptante: adopterData.id_adoptante },
						{ correo: adopterData.correo }
					]
				} : {
					id_adoptante: adopterData.id_adoptante

				}
			});
			if (searchResult.length === 0) {
				//crea el adoptante
				const result = await adopter.create(adopterData);
				id_adopter = result.id_adoptante;

			} else {
				res.status(200).json({
					state: false,
					message: "Ya existe un adoptante registrado con esta identificación o correo"
				});
			}

		}
		adoptionData.id_empleado = req.userSession.id;
		adoptionData.id_adoptante = id_adopter;
		adoptionData.fecha_estudio = Date.now();

		//crea la adopcion
		const result = await adoption.create(adoptionData);

		if (result) {

			let animalState = "";
			if (adoptionData.estado === "finalizada") {
				animalState = "Adoptado";
			} else if (adoptionData.estado === "en proceso" || adoptionData.estado === "en espera") {
				animalState = "En proceso de adopción";
			} else {
				animalState = "Sin adoptar";

			}

			//actualiza el estado del animal
			await animal.update({ estado: animalState }, {
				where: {
					id_animal: adoptionData.id_animal
				}
			});
			if (questionsData.length !== 0) {

				let questionsFormattedData = questionsData.filter((element) => {

					element.id_adopcion = result.id_adopcion;
					return element;
				});

				const resultQuestionAnswers = await adoptionQuestion.bulkCreate(questionsFormattedData);
				if (resultQuestionAnswers) {
					res.status(201).json({
						state: true,
						message: "La adopción se ha registrado con éxito",
						data: result.id_adopcion // id assigned
					});
				} else {
					res.status(201).json({
						state: false,
						message: "Ha ocurrido un error al registrar las respuestas del formulario"
					});
				}
			} else {

				res.status(201).json({
					state: true,
					message: "La adopción se ha registrado con éxito",
					data: result.id_adopcion // id assigned
				});
			}
		} else {
			res.status(201).json({
				state: false,
				message: "Ha ocurrido un error al crear la adopción"

			});
		}



	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al registrar la adopción"
		});
	}
};

exports.delete = async (req, res) => {
	try {

		const result = await adoption.destroy({
			where: {
				id_adopcion: req.params["id"]
			},
			include: "tracking"

		});
		await adoptionQuestion.destroy({
			where: {
				id_adopcion: req.params["id"]
			}
		});

		if (result > 0) {
			res.status(200).json({
				state: true,
				message: "La adopción se ha eliminado exitosamente"
			});
		} else {
			res.status(200).json({
				state: false,
				message: "La adopción no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al eliminar la adopción"
		});
	}
};

exports.get = async (req, res) => {
	try {
		const searchResult = await adoption.findByPk(req.params["id"], {
			include: [
				"animal", { model: adopter }, { model: employee }, "tracking"
			]
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
				message: "La adopción no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la adopción"
		});
	}
};

exports.update = async (req, res) => {
	try {

		await adoption.update(req.body, {
			where: {
				id_adopcion: req.body.id_adopcion
			}
		});
		const searchResult = await adoption.findByPk(req.body.id_adopcion, {
			include: [
				"animal"
			]
		});


		if (searchResult) {


			let animalState = "";
			if (req.body.estado === "finalizada") {
				animalState = "Adoptado";
			} else if (req.body.estado === "en proceso" || req.body.estado === "en espera") {
				animalState = "En proceso de adopción";
			} else {
				animalState = "Sin adoptar";

			}

			const resAnimal = await animal.update({ estado: animalState }, {
				where: {
					id_animal: searchResult.animal.id_animal
				}
			});
			if (resAnimal) {
				res.status(200).json({
					state: true,
					message: "Los datos de la adopción se han actualizado exitosamente"
				});
			}else{
				res.status(200).json({
					state: false,
					message: "Ha ocurrido un error al actualizar el estado del animal"
				});
			}
		} else {
			res.status(200).json({
				state: false,
				message: "El animal asociado a la adopción no existe"
			});

		}



	} catch (error) {

		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al actualizar los datos de la adopción"
		});

	}
};
exports.list = async (req, res) => {

	try {
		const searchResult = await adoption.findAll({
			include: [
				{
					model: animal,
					where: {
						id_fundacion: req.userSession.id_fundacion
					}
				},
				{
					model: adopter
				}
			]
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
			message: "Ha ocurrido un error al obtener la lista de la adopciones"
		});
	}
};
