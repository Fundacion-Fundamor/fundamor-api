/* eslint-disable camelcase */
const postImage = require("../models").postImage;
const fs = require("fs").promises;


exports.upload = async (req, res) => {

	let images = [];

	(req.files.postImages).forEach(element => {
		let image = {

			id_publicacion: req.body.id_publicacion,
			ruta: "images/postImages/" + element.filename

		};
		images.push(image);
	});

	try {
		await postImage.bulkCreate(images);

		res.status(201).json({
			state: true,
			message: "Las imágenes se han subido correctamente"

		});
	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al registrar las imágenes de la publicación"
		});
	}

};

exports.delete = async (req, res) => {
	try {
		const searchResult = await postImage.findAll({
			where: {
				id_imagen_publicacion: req.body.id_imagenes
			}
		});


		if (searchResult) {
			for (let element of searchResult) {
				await fs.unlink(`./src/public/${element.ruta}`);
			}

			const result = await postImage.destroy({
				where: {
					id_imagen_publicacion: req.body.id_imagenes
				}
			}
			);

			if (result) {
				res.status(200).json({
					state: true,
					message: "Las imágenes se han eliminado exitosamente"
				});
			} else {
				res.status(200).json({
					state: false,
					message: "Error al eliminar las imágenes",
					data: result
				});
			}
		} else {
			res.status(200).json({
				state: false,
				message: "Las imágenes no existen"
			});
		}
	} catch (error) {
		// console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener las imágenes"
		});
	}
};