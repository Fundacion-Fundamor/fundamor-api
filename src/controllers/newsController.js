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