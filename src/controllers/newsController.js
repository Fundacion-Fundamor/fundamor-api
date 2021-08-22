const post = require("../models").post;


exports.create = async (req, res) => {

	try {
		const result = await post.create(req.body);
		res.status(201).json({
			state: true,
			message: "La publicación se ha creado con éxito",
			data: result.id_publicacion // id assigned
		});

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al crear la publicación"
		});
	}
};


exports.uploadImages = async (req, res, err) => {

	console.log(err);
	res.status(201).json({
		state: true,
		message: "Las imagenes se han subido correctamente"
	});
};