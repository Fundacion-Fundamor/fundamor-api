const jwt = require("jsonwebtoken");

exports.create = (req, res) =>{
	try{
		const user= {
			id:1,
			name:"Peter",
			email:"peter@example.com"
		};
		jwt.sign({user}, "secretkey", {expiresIn:"30m"}, (err, token)=>{
			res.status(200).json({
				token
			});
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({
			state: false,
			message: "Ha ocurrido un error al generar el token"
		});
	}
};