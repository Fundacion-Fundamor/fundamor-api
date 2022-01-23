/* eslint-disable camelcase */

const animal = require("../models").animal;
const adoption = require("../models").adoption;

const { Op } = require("sequelize");
var Sequelize = require("sequelize");
exports.countAnimals = async (req, res) => {
	console.log(req.query);

	try {

		let searchResult = 0;
		let orSentence = [];
		let andSentence = [];
		if (req.query) {

			if (req.query.adopted === "false") {

				orSentence.push({ estado: "Sin adoptar" },
					{ estado: "En proceso" });


			} else if (req.query.adopted === "true") {

				orSentence.push({ estado: "Adoptado" });
			}


			//discrimina (el primero y este NO se deben combinar)
			if (req.query.state) {

				andSentence.push({ estado: req.query.state });

			}

			//discrimina
			if (req.query.specie) {
				if (req.query.specie === "perro") {
					andSentence.push({ especie: "perro" });
				} else if (req.query.specie === "gato") {
					andSentence.push({ especie: "gato" });
				}
			}

			//discrimina
			if (req.query.gender) {
				if (req.query.gender === "macho") {
					andSentence.push({ sexo: "macho" });
				} else if (req.query.gender === "hembra") {
					andSentence.push({ sexo: "hembra" });
				}
			}


		}

		if (orSentence.length !== 0 && andSentence !== 0) {
			searchResult = await animal.count({

				where: {
					id_fundacion: req.userSession.id_fundacion,
					[Op.or]: orSentence,
					[Op.and]: andSentence

				}
			});
		} else if (orSentence.length !== 0) {
			searchResult = await animal.count({

				where: {
					id_fundacion: req.userSession.id_fundacion,
					[Op.or]: orSentence


				}
			});
		} else if (andSentence.length !== 0) {
			searchResult = await animal.count({

				where: {
					id_fundacion: req.userSession.id_fundacion,

					[Op.and]: andSentence

				}
			});
		} else {
			searchResult = await animal.count({

				where: {
					id_fundacion: req.userSession.id_fundacion
				}
			});
		}


		res.status(200).json({
			state: true,
			message: "Resultados obtenidos",
			data: searchResult
		});

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}

};


exports.rescuedAnimals = async (req, res) => {


	try {

		let actualYear = new Date().getFullYear();
		//toca hacer 2 consultas una para perros y otra para gatos
		let dogsRescuedPerMonth = await animal.findAll({
			attributes: [
				[Sequelize.literal(`COUNT(*)`), 'rescued_animals'],
				[Sequelize.fn('MONTH', Sequelize.col('fecha_rescate')), 'rescue_month']
			],
			where: {
				id_fundacion: req.userSession.id_fundacion,
				fecha_rescate: {

					[Op.lt]: new Date("12-31-" + req.query.year ?? actualYear),
					[Op.gt]: new Date("01-01-" + req.query.year ?? actualYear)
				},
				especie: "perro"

			},
			// group: [Sequelize.fn('date_trunc', 'YEAR', Sequelize.col('fecha_rescate'))]
			group: [Sequelize.fn('MONTH', Sequelize.col('fecha_rescate')), 'rescue_month']

			// group:["YEAR(date)"]
		});

		let catsRescuedPerMonth = await animal.findAll({
			attributes: [
				[Sequelize.literal(`COUNT(*)`), 'rescued_animals'],
				[Sequelize.fn('MONTH', Sequelize.col('fecha_rescate')), 'rescue_month']
			],
			where: {
				id_fundacion: req.userSession.id_fundacion,
				fecha_rescate: {

					[Op.lt]: new Date("12-31-" + req.query.year ?? actualYear),
					[Op.gt]: new Date("01-01-" + req.query.year ?? actualYear)
				},
				especie: "gato"

			},
			// group: [Sequelize.fn('date_trunc', 'YEAR', Sequelize.col('fecha_rescate'))]
			group: [Sequelize.fn('MONTH', Sequelize.col('fecha_rescate')), 'rescue_month']

			// group:["YEAR(date)"]
		});


		res.status(200).json({
			state: true,
			message: "Resultados obtenidos",
			data: { dogs: dogsRescuedPerMonth, cats: catsRescuedPerMonth }
		});

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}

};




exports.rescuedAnimalsPerGender = async (req, res) => {


	try {

		let actualYear = new Date().getFullYear();

		let maleRescuedPerMonth = await animal.findAll({
			attributes: [
				[Sequelize.literal(`COUNT(*)`), 'rescued_animals'],
				[Sequelize.fn('MONTH', Sequelize.col('fecha_rescate')), 'rescue_month']
			],
			where: {
				id_fundacion: req.userSession.id_fundacion,
				fecha_rescate: {

					[Op.lt]: new Date("12-31-" + req.query.year ?? actualYear),
					[Op.gt]: new Date("01-01-" + req.query.year ?? actualYear)
				},
				sexo: "macho"

			},
			group: [Sequelize.fn('MONTH', Sequelize.col('fecha_rescate')), 'rescue_month']
		});

		let femaleRescuedPerMonth = await animal.findAll({
			attributes: [
				[Sequelize.literal(`COUNT(*)`), 'rescued_animals'],
				[Sequelize.fn('MONTH', Sequelize.col('fecha_rescate')), 'rescue_month']
			],
			where: {
				id_fundacion: req.userSession.id_fundacion,
				fecha_rescate: {

					[Op.lt]: new Date("12-31-" + req.query.year ?? actualYear),
					[Op.gt]: new Date("01-01-" + req.query.year ?? actualYear)
				},
				sexo: "hembra"

			},
			group: [Sequelize.fn('MONTH', Sequelize.col('fecha_rescate')), 'rescue_month']
		});


		res.status(200).json({
			state: true,
			message: "Resultados obtenidos",
			data: { male: maleRescuedPerMonth, female: femaleRescuedPerMonth }
		});

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}

};


exports.adoptedAnimals = async (req, res) => {
	try {

		let actualYear = new Date().getFullYear();

		let dogsAdoptedPerMonth = await adoption.findAll({
			attributes: [
				[Sequelize.literal(`COUNT(*)`), 'adopted_animals'],
				[Sequelize.fn('MONTH', Sequelize.col('fecha_entrega')), 'month']

			],
			include: "animal",
			where: {
				fecha_entrega: {

					[Op.lt]: new Date("12-31-" + req.query.year ?? actualYear),
					[Op.gt]: new Date("01-01-" + req.query.year ?? actualYear)
				},
				"$animal.especie$": "perro",
				"$animal.id_fundacion$": req.userSession.id_fundacion

			},
			group: [Sequelize.fn('MONTH', Sequelize.col('fecha_entrega')), 'month']
		});

		let catsAdoptedPerMonth = await adoption.findAll({
			attributes: [
				[Sequelize.literal(`COUNT(*)`), 'adopted_animals'],
				[Sequelize.fn('MONTH', Sequelize.col('fecha_entrega')), 'month']

			],
			include: "animal",
			where: {
				fecha_entrega: {

					[Op.lt]: new Date("12-31-" + req.query.year ?? actualYear),
					[Op.gt]: new Date("01-01-" + req.query.year ?? actualYear)
				},
				"$animal.especie$": "gato",
				"$animal.id_fundacion$": req.userSession.id_fundacion

			},
			group: [Sequelize.fn('MONTH', Sequelize.col('fecha_entrega')), 'month']
		});

		res.status(200).json({
			state: true,
			message: "Resultados obtenidos",
			data: {
				dogs: dogsAdoptedPerMonth,
				cats: catsAdoptedPerMonth
			}
		});

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}

};


exports.adoptedAnimalsPerGender = async (req, res) => {
	try {

		let actualYear = new Date().getFullYear();

		let maleAdoptedPerMonth = await adoption.findAll({
			attributes: [
				[Sequelize.literal(`COUNT(*)`), 'adopted_animals'],
				[Sequelize.fn('MONTH', Sequelize.col('fecha_entrega')), 'month']

			],
			include: "animal",
			where: {
				fecha_entrega: {

					[Op.lt]: new Date("12-31-" + req.query.year ?? actualYear),
					[Op.gt]: new Date("01-01-" + req.query.year ?? actualYear)
				},
				"$animal.sexo$": "macho",
				"$animal.id_fundacion$": req.userSession.id_fundacion

			},
			group: [Sequelize.fn('MONTH', Sequelize.col('fecha_entrega')), 'month']
		});

		let femaleAdoptedPerMonth = await adoption.findAll({
			attributes: [
				[Sequelize.literal(`COUNT(*)`), 'adopted_animals'],
				[Sequelize.fn('MONTH', Sequelize.col('fecha_entrega')), 'month']

			],
			include: "animal",
			where: {
				fecha_entrega: {

					[Op.lt]: new Date("12-31-" + req.query.year ?? actualYear),
					[Op.gt]: new Date("01-01-" + req.query.year ?? actualYear)
				},
				"$animal.sexo$": "hembra",
				"$animal.id_fundacion$": req.userSession.id_fundacion

			},
			group: [Sequelize.fn('MONTH', Sequelize.col('fecha_entrega')), 'month']
		});

		res.status(200).json({
			state: true,
			message: "Resultados obtenidos",
			data: {
				male: maleAdoptedPerMonth,
				female: femaleAdoptedPerMonth
			}
		});

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}

};



exports.sterilizedAnimals = async (req, res) => {


	try {

		let totalCats = await animal.count({

			where: {
				id_fundacion: req.userSession.id_fundacion,
				estado: { [Op.ne]: "Adoptado" },
				especie: "gato"
			}
		});

		let totalDogs = await animal.count({

			where: {
				id_fundacion: req.userSession.id_fundacion,
				estado: { [Op.ne]: "Adoptado" },
				especie: "perro"
			}
		});


		let cats = await animal.count({

			where: {
				id_fundacion: req.userSession.id_fundacion,
				estado: { [Op.ne]: "Adoptado" },
				especie: "gato",
				esterilizado: true
			}

		});

		let dogs = await animal.count({

			where: {
				id_fundacion: req.userSession.id_fundacion,
				estado: { [Op.ne]: "Adoptado" },
				especie: "perro",
				esterilizado: true
			}

		});


		res.status(200).json({
			state: true,
			message: "Resultados obtenidos",
			data: { dogs, cats, totalCats, totalDogs }
		});

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}

};


exports.dewormedAnimals = async (req, res) => {


	try {

		let totalCats = await animal.count({

			where: {
				id_fundacion: req.userSession.id_fundacion,
				estado: { [Op.ne]: "Adoptado" },
				especie: "gato"
			}
		});

		let totalDogs = await animal.count({

			where: {
				id_fundacion: req.userSession.id_fundacion,
				estado: { [Op.ne]: "Adoptado" },
				especie: "perro"
			}
		});


		let cats = await animal.count({

			where: {
				id_fundacion: req.userSession.id_fundacion,
				estado: { [Op.ne]: "Adoptado" },
				desparasitado: true,
				especie: "gato"
			}

		});

		let dogs = await animal.count({

			where: {
				id_fundacion: req.userSession.id_fundacion,
				estado: { [Op.ne]: "Adoptado" },
				especie: "perro",
				desparasitado: true

			}

		});


		res.status(200).json({
			state: true,
			message: "Resultados obtenidos",
			data: { dogs, cats, totalCats, totalDogs }
		});

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}

};


exports.adoptions = async (req, res) => {
};