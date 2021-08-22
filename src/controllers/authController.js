
/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const employee = require("../models").employee;
const helpers = require("../helpers/helpers");
exports.create = async (req, res) => {
	try {

		const searchResult = await employee.findOne({
			where: {
				correo: req.body.correo
			}
		});

		if (searchResult) {

			const validPassword = await helpers.comparePassword(req.body.contrasenia, searchResult.contrasenia);
			if (validPassword) {
				const payload = {
					employee:{
						id: searchResult.id_empleado,
						email: searchResult.correo,
						id_fundacion: searchResult.id_fundacion
					}
				
				};
				jwt.sign(payload, process.env.TOKEN_SECRET_KEY, { expiresIn: "30m" }, (err, token) => {
					res.status(200).json({
						token
					});
				});
			} else {
				res.status(400).json({
					state: false,
					message: "La contraseña ingresada es incorrecta"

				});
			}

		} else {
			res.status(404).json({
				state: false,
				message: "El usuario no existe",
				data: searchResult
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al generar el token"
		});
	}
};