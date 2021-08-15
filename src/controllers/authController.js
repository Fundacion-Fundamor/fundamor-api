const jwt = require("jsonwebtoken");

exports.create = (req, res) =>{
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
};
