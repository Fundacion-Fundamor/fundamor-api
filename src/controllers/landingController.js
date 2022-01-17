/* eslint-disable camelcase */
const animal = require("../models").animal;
exports.main = async (req, res) => {

	res.render("pages/index");
};

exports.post = async (req, res) => {

	res.render("pages/post");
};

exports.postDetail = (req, res) => {

	res.render("pages/postDetail");
};


exports.animals = async (req, res) => {

	res.render("pages/animals", { animals: [] });
};


exports.animalsPagination = async (req, res) => {


	console.log(req.query);

	try {
		const searchResult = await animal.findAndCountAll({
			where: {
				id_fundacion: 2
			},
			include: "animalImage",
			distinct: true,
			order: [["id_animal", req.query.order === "recent" ? "DESC" : "ASC"]],
			limit: req.query.max ? parseInt(req.query.max) : 0,
			offset: req.query.min ? parseInt(req.query.min) : 0
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
			message: "Ha ocurrido un error al obtener la lista de animales"
		});
	}


};


exports.contact = async (req, res) => {


	res.render("pages/contact");
};


exports.animalDetail = async (req, res) => {

	try {
		const searchResult = await animal.findByPk(req.params["id_animal"], { include: "animalImage" });
		const otherAnimals = await animal.findAll({
			where: {
				id_fundacion: 2
			},
			include: "animalImage",
			distinct: true,
			order: [["id_animal", "ASC"]],
			limit: 10,
			offset: 0
		});

		if (searchResult) {
			res.render("pages/animalDetail", { animal: searchResult, state: true, otherAnimals: otherAnimals });

		} else {

			res.render("pages/animalDetail", { state: false, msg: "El animal que está intentando buscar no existe." });

		}

	} catch (error) {
		console.error(error);
		res.render("pages/animalDetail", { state: false, msg: "Ha ocurrido un error al obtener el animal, por favor intente mas tarde" });

	}


};

exports.about = (req, res) => {

	res.render("pages/about");
};
