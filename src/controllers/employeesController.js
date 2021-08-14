exports.create = (req, res) => {
	console.log(req.body);
	res.send("Creating employee...");
};

exports.delete = (req, res) => {
	console.log(req.body);
	res.send("Deleting employee...");
};

exports.get = (req, res) => {
	console.log(req.body);
	res.send("Getting employee...");
};

exports.update = (req, res) => {
	console.log(req.body);
	res.send("Updating employee...");
};
exports.list = (req, res) => {
	console.log(req.body);
	res.send("Listing employees...");
};
