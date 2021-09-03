/* eslint-disable camelcase */
const animalImage = require("../models").animalImage;
const fs = require("fs").promises;

exports.upload = async (req, res) => {

	let images = [];

	(req.files.animalImages).forEach(element => {
		let image = {

			id_animal: req.body.id_animal,
			ruta: "images/animalImages/" + element.filename

		};
		images.push(image);
	});

	try {
		await animalImage.bulkCreate(images);

		res.status(201).json({
			state: true,
			message: "Las imágenes se han subido correctamente"

		});
	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al registrar las imágenes del animal"
		});
	}

};

exports.delete = async (req, res) => {
	try {
		const searchResult = await animalImage.findAll({
			where: {
				id_imagen_animal: req.body.id_imagenes
			}
		});


		if (searchResult) {
			searchResult.forEach(async (element) => {
				await fs.unlink(`./src/public/${element.ruta}`);
			});

			const result = await animalImage.destroy({
				where: {
					id_imagen_animal: req.body.id_imagenes
				}
			}
			);

			if (result) {
				res.status(200).json({
					state: true,
					message: "Las imágenes se han eliminado exitosamente"
				});
			} else {
				res.status(404).json({
					state: false,
					message: "Error al eliminar las imágenes",
					data: result
				});
			}
		} else {
			res.status(404).json({
				state: false,
				message: "Las imágenes no existen"
			});
		}
	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener las imágenes"
		});
	}
};