const jwt = require("jsonwebtoken");

/**Módulo que verifica la existencia y validez de un token
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
module.exports = (req, res, next) => {
	const token = req.header("x-auth-token");
	if (!token) {
		return res.status(401).json({ message: "Acceso no autorizado" });
	}

	try {
		const validateToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
		req.userSession = validateToken.employee;
		next();
	} catch (error) {
		
		res.status(401).json({ message: "Su sesión ha expirado, por favor inicie la sesión nuevamente" });
	}
};

