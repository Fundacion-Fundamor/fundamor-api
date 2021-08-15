const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
	jwt.verify(req.token, "secretkey", (error, authData)=>{
		if(error){
			res.sendStatus(403);
		}else{
			res.json({
				message:"A new post has been created",
				authData
			});
		}
	});
};