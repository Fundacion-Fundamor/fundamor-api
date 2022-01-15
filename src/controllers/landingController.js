
exports.main = async (req, res) => {


	res.render("pages/index");
};



exports.post = async (req, res) => {


	res.render("pages/post");
};

exports.postDetail = (req, res) => {

	res.render("pages/postDetail");
};


exports.animals = async (req, res) => {


	res.render("pages/animals");
};


exports.contact = async (req, res) => {


	res.render("pages/contact");
};


exports.animalDetail = (req, res) => {

	res.render("pages/animalDetail");
};
