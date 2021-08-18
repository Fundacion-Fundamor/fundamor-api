
exports.create = (req, res) => {

	res.json({
		message: "A new post has been created",
		userSession: req.userSession
	});
};