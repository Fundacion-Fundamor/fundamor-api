/**Módulo que ofrece utilidades de encriptación y formateo de datos
 * 
 * @author Neyder Figueroa
 * @author Andrés Llinás
 * @since 2021 Universidad del Quindío
 * @copyright Todos los derechos reservados
 */

const bcrypt = require("bcryptjs");
const helpers = {};

helpers.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	return hash;
};

helpers.comparePassword = async (password, savedPassword) => {
	try {
		return await bcrypt.compare(password, savedPassword);
	} catch (e) {
		console.log(e);
	}
};

helpers.formatDate = (mysqlDate) => {
	if (mysqlDate != null) {
		var date = new Date(mysqlDate);

		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();

		if (parseInt(day) < 10) {
			day = "0" + day;
		}
		if (parseInt(month) < 10) {
			month = "0" + month;
		}

		return year + "-" + month + "-" + day;
	} else {
		return "no establecida";
	}
};
module.exports = helpers;
