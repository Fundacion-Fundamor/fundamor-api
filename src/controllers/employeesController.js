exports.create = (req, res) => {
	res.status(200).json({
		message:"Creating employee..."
	});
};

exports.delete = (req, res) => {
	res.status(200).json({
		message:"Deleting employee..."
	});
};

exports.get = (req, res) => {
	res.status(200).json({
		message:"Getting employee..."
	});
};

exports.update = (req, res) => {
	console.log(req.body);
	res.status(200).json({
		message:"Updating employee..."
	});
};
exports.list = (req, res) => {
	res.status(200).json({
		message:"Listing employees..."
	});
};
