
/* eslint-disable camelcase */

const animal = require("../models").animal;

const fs = require("fs").promises;

exports.create = async (req, res) => {

	try {
		req.body.id_fundacion = req.userSession.id_fundacion;
		const result = await animal.create(req.body);
		res.status(200).json({
			state: true,
			message: "Se ha registrado el animal con éxito",
			data: result.id_animal // id assigned
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al guardar el animal"
		});
	}

};

exports.delete = async (req, res) => {
	try {
		const searchResult = await animal.findOne({
			where: {
				id_animal: req.params["id"]
			},
			include: "animalImage"
		});


		if (searchResult) {

			for (let element of searchResult.animalImage) {
				fs.access(`./src/public/${element.ruta}`, (error) => {
					if (error) {
						console.log("ERROR AL ELIMINAR IMAGENES", error);
						return;
					}
					fs.unlink(`./src/public/${element.ruta}`);
				});
			}

			const result = await searchResult.destroy();

			if (result) {
				res.status(200).json({
					state: true,
					message: "El animal se ha eliminado exitosamente"
				});
			} else {
				res.status(200).json({
					state: false,
					message: "Error al eliminar el animal",
					data: result
				});
			}
		} else {
			res.status(200).json({
				state: false,
				message: "El animal no existe"
			});
		}
	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener el animal"
		});
	}
};

exports.get = async (req, res) => {
	try {
		const searchResult = await animal.findByPk(req.params["id"], { include: "animalImage" });

		if (searchResult) {


			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(200).json({
				state: false,
				message: "El animal no existe"

			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener el animal"
		});
	}
};

exports.update = async (req, res) => {
	try {

		await animal.update(req.body, {
			where: {
				id_animal: req.body.id_animal
			}
		});

		res.status(200).json({
			state: true,
			message: "Los datos del animal se han actualizado exitosamente"
		});

	} catch (error) {

		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al actualizar los datos del animal"
		});

	}
};

exports.list = async (req, res) => {
	try {
		const searchResult = await animal.findAll({
			where: {
				id_fundacion: req.userSession.id_fundacion
			},
			include: "animalImage"
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
