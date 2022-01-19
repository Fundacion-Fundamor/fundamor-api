/* eslint-disable camelcase */
const animal = require("../models").animal;
const question = require("../models").question;
const adoption = require("../models").adoption;
const adoptionQuestion = require("../models").adoptionQuestion;
const adopter = require("../models").adopter;
const post = require("../models").post;
const foundation = require("../models").foundation;
const { Op } = require("sequelize");

exports.main = async (req, res) => {

	var actualYear = new Date().getFullYear();

	const otherAnimals = await animal.findAll({
		where: {
			id_fundacion: 2,
			estado: "Sin adoptar"
		},
		include: "animalImage",
		distinct: true,
		order: [["id_animal", "ASC"]],
		limit: 20,
		offset: 0
	});

	const recentPost = await post.findAll({
		where: {
			id_fundacion: 2

		},
		include: "postImage",
		order: [["id_publicacion", "DESC"]],
		limit: 5
	});


	const foundationData = await foundation.findByPk(2);
	res.render("pages/index", { years: actualYear - 2011, otherAnimals: otherAnimals, recentPost: recentPost, foundation: foundationData });
};

exports.post = async (req, res) => {

	try {
		const searchResult = await post.findAll({
			where: {
				id_fundacion: 2

			},
			include: "postImage",
			order: [["id_publicacion", "DESC"]],
			limit: 5
		});

		if (searchResult && searchResult.length !== 0) {

			res.render("pages/post", { state: true, recentPost: searchResult });

		} else {
			res.render("pages/post", {
				state: false


			});
		}
	} catch (error) {
		res.render("pages/post", { state: false });
	}


};

exports.postPagination = async (req, res) => {


	console.log(req.query);

	try {
		let searchResult = null;

		if (req.query.min !== undefined && req.query.max !== undefined && req.query.search !== undefined) {


			searchResult = await post.findAndCountAll({
				where: {
					id_fundacion: 2,
					titulo: {
						[Op.like]: `%${req.query.search}%`
					}

				},
				include: "postImage",
				distinct: true,
				order: [["id_publicacion", "DESC"]],
				limit: req.query.max ? parseInt(req.query.max) : 0,
				offset: req.query.min ? parseInt(req.query.min) : 0
			});
		} else {
			searchResult = await post.findAndCountAll({
				where: {
					id_fundacion: 2

				},
				include: "postImage"
			});
		}
		if (searchResult && searchResult.length !== 0) {

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
			message: "Ha ocurrido un error al obtener la lista de publicaciones"
		});
	}


};


exports.postDetail = async (req, res) => {

	try {
		const searchResult = await post.findByPk(req.params["id_post"], {

			include: "postImage"
		});
		const recentPost = await post.findAll({
			where: {
				id_fundacion: 2

			},
			include: "postImage",
			order: [["id_publicacion", "DESC"]],
			limit: 5
		});

		if (searchResult) {
			res.render("pages/postDetail", { post: searchResult, state: true, recentPost: recentPost });

		} else {

			res.render("pages/postDetail", { state: false, msg: "Esta publicación no está disponible." });

		}

	} catch (error) {
		console.error(error);
		res.render("pages/postDetail", { state: false, msg: "Ha ocurrido un error al obtener la publicación, por favor intente mas tarde" });

	}

};


exports.animals = async (req, res) => {

	res.render("pages/animals", { animals: [] });
};


exports.animalsPagination = async (req, res) => {


	console.log(req.query);

	try {
		let searchResult = null;

		if (req.query.min !== undefined && req.query.max !== undefined && req.query.order !== undefined &&
			req.query.search !== undefined && req.query.specie !== undefined && req.query.size !== undefined) {


			searchResult = await animal.findAndCountAll({
				where: {
					id_fundacion: 2,
					estado: "Sin adoptar",
					nombre: {
						[Op.like]: `%${req.query.search}%`
					},
					especie: {
						[Op.like]: `%${req.query.specie}%`
					},
					tamanio: {
						[Op.like]: `%${req.query.size}%`
					}
				},
				include: "animalImage",
				distinct: true,
				order: [["id_animal", req.query.order === "recent" ? "DESC" : "ASC"]],
				limit: req.query.max ? parseInt(req.query.max) : 0,
				offset: req.query.min ? parseInt(req.query.min) : 0
			});
		} else {
			searchResult = await animal.findAndCountAll({
				where: {
					id_fundacion: 2,
					estado: "Sin adoptar"
				},
				include: "animalImage"
			});
		}
		if (searchResult && searchResult.length !== 0) {

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
		const searchResult = await animal.findByPk(req.params["id_animal"], {

			include: "animalImage"
		});
		const otherAnimals = await animal.findAll({
			where: {
				id_fundacion: 2,
				estado: "Sin adoptar"
			},
			include: "animalImage",
			distinct: true,
			order: [["id_animal", "ASC"]],
			limit: 10,
			offset: 0
		});

		if (searchResult && searchResult.estado === "Sin adoptar") {
			res.render("pages/animalDetail", { animal: searchResult, state: true, otherAnimals: otherAnimals });

		} else {

			res.render("pages/animalDetail", { state: false, msg: "El animal que está intentando buscar no existe." });

		}

	} catch (error) {
		console.error(error);
		res.render("pages/animalDetail", { state: false, msg: "Ha ocurrido un error al obtener el animal, por favor intente mas tarde" });

	}


};
exports.adopterForm = async (req, res) => {

	try {
		const animalDetail = await animal.findByPk(req.params["id_animal"], {

			include: "animalImage"
		});


		if (animalDetail && animalDetail.estado === "Sin adoptar") {
			const questions = await question.findAll({
				where: {
					id_fundacion: 2
				},
				order: [
					["id_pregunta", "ASC"],
					["questionOptions", "id_opcion", "ASC"]
				],
				include: "questionOptions"

			});

			res.render("pages/adopterForm", { state: true, animal: animalDetail, questions: questions });
		} else {
			res.render("pages/adopterForm", { state: false, msg: "En este momento este animal no se encuentra disponible para ser adoptado" });

		}

	} catch (error) {
		console.error(error);
		res.render("pages/adopterForm", { state: false, msg: "Ha ocurrido un error al obtener el animal, por favor intente mas tarde" });

	}
};


exports.receiveAdopterForm = async (req, res) => {

	console.log(req.body);

	try {
		const {
			idAnimal = null,
			name = null,
			identification = null,
			email = null,
			ocupacion = null,
			ciudad = null,
			fijo = null,
			movil = null,
			questions = null
		} = req.body;


		let id_adopter = "";


		const searchResult = await adopter.findByPk(identification);
		if (searchResult) {
			id_adopter = searchResult.id_adoptante;

		} else {
			//crea el adoptante
			const result = await adopter.create({
				id_adoptante: identification,
				nombre: name,
				telefono_casa: fijo === "" ? null : fijo,
				telefono_celular: movil === "" ? null : movil,
				ciudad: ciudad === "" ? null : ciudad,
				ocupacion: ocupacion === "" ? null : ocupacion,
				correo: email === "" ? null : email

			});
			id_adopter = result.id_adoptante;
		}


		let adoptionData = {
			id_adoptante: id_adopter,
			fecha_estudio: Date.now(),
			id_animal: idAnimal,
			estado: "en espera"
		};

		//crea la adopcion
		const result = await adoption.create(adoptionData);

		if (result) {

			if (questions.length !== 0) {

				let questionsFormattedData = [];
				for (let iterator in questions) {

					questionsFormattedData.push({
						id_adopcion: result.id_adopcion,
						id_pregunta: iterator.startsWith("m") ? iterator.split("-")[1] : iterator,
						respuesta: questions[iterator]
					});

				}

				const resultQuestionAnswers = await adoptionQuestion.bulkCreate(questionsFormattedData);
				if (resultQuestionAnswers) {
					res.status(201).json({
						state: true,
						message: "Su solicitud ha sido enviada, pronto nos contactaremos con usted para darle una respuesta",
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
					message: "Su solicitud ha sido enviada, pronto nos contactaremos con usted para darle una respuesta",
					data: result.id_adopcion // id assigned
				});
			}
		} else {
			res.status(201).json({
				state: false,
				message: "No se ha podido realizar la solicitud, por favor intente mas tarde"
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


exports.sendContactMessage = (req, res) => {

	res.status(200).json({
		state: true,
		message: "El mensaje ha sido enviado con éxito, nos pondremos en contacto contigo lo antes posible"
	});
};

exports.about = (req, res) => {

	res.render("pages/about");
};
