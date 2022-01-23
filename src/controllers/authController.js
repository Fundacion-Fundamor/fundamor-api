
/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const employee = require("../models").employee;
const helpers = require("../helpers/helpers");

const nodemailer = require("nodemailer");
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
					employee: {
						id: searchResult.id_empleado,
						id_fundacion: searchResult.id_fundacion,
						rol:searchResult.rol
					}

				};
				jwt.sign(payload, process.env.TOKEN_SECRET_KEY, { expiresIn: "60m" }, (err, token) => {
					res.status(200).json({
						state: true,
						token
					});
				});
			} else {
				res.status(200).json({
					state: false,
					message: "El correo o la contraseña son incorrectos"

				});
			}

		} else {
			res.status(200).json({
				state: false,
				message: "El usuario no existe",
				data: searchResult
			});
		}

	} catch (error) {
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al generar el token"
		});
	}
};


exports.authenticatedUser = async (req, res) => {

	try {
		const searchResult = await employee.findByPk(req.userSession.id, { attributes: { exclude: ["contrasenia"] } });

		if (searchResult) {
			res.status(200).json({
				state: true,
				message: "Resultados obtenidos",
				data: searchResult
			});
		} else {
			res.status(200).json({
				state: false,
				message: "El colaborador no existe"
			});
		}

	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al obtener el colaborador"
		});
	}
};

exports.recoveryPassword = async (req, res) => {

	try {

		const searchResult = await employee.findOne({
			where: {
				correo: req.body.correo
			}
		});

		if (searchResult) {

			let newPassword = helpers.generatePassword();
			let encryptedNewPassword = await helpers.encryptPassword(newPassword);

			searchResult.contrasenia = encryptedNewPassword; // update password in the instance
			await searchResult.save(); //update password in db

			// Generate test SMTP service account from ethereal.email
			// Only needed if you don't have a real mail account for testing
			let testAccount = await nodemailer.createTestAccount();

			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
				host: "smtp.ethereal.email",
				port: 587,
				secure: false, // true for 465, false for other ports
				auth: {
					user: testAccount.user, // generated ethereal user
					pass: testAccount.pass // generated ethereal password
				}
			});

			// send mail with defined transport object
			let info = await transporter.sendMail({
				from: "adopcionesFundamos@support.com", // sender address
				to: req.body.correo, // list of receivers
				subject: "Plataforma de adopción", // Subject line
				text: "Recuperacion de contraseña", // plain text body
				html: `<b>La nueva contraseña es ${newPassword}</b>` // html body
			});

			console.log("Message sent: %s", info.messageId);
			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

			// Preview only available when sending through an Ethereal account
			console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

			res.status(200).json({
				message: "Sí el correo ingresado existe recibira un mensaje con su nueva contraseña"
			});

		} else {
			res.status(200).json({
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
