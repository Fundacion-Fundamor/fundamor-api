// const { login } = require("./login");
// const { forgotPassword } = require('./forgotPassword')
// const { getRefreshToken } = require('./getRefreshToken')
// const { register } = require('./register')
// const { resetPassword } = require('./resetPassword')
// const { roleAuthorization } = require('./roleAuthorization')
const { verify } = require("./verify");


const onlyAdmin = (req, res, next) => {


	if (req.userSession.rol === "administrador") {
		next();
	} else {
		res.status(401).json({ message: "Acceso no autorizado" });

	}

};

module.exports = {
	// login
	// forgotPassword,
	// getRefreshToken,
	// register,
	// resetPassword,
	// roleAuthorization,
	onlyAdmin,
	verify
};