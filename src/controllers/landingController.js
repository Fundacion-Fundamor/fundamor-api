
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


	let animals = [

		{
			nombre: "pepe"
		},
		{
			nombre: "pepe"
		},
		{
			nombre: "pepe"
		},
		{
			nombre: "pepe"
		},
		{
			nombre: "pepe"
		},
		{
			nombre: "pepe"
		},
		{
			nombre: "pepe"
		},
		{
			nombre: "pepe"
		}, {
			nombre: "pepe"
		}
	];

	res.render("pages/animals", { animals: animals });
};


exports.contact = async (req, res) => {


	res.render("pages/contact");
};


exports.animalDetail = (req, res) => {

	res.render("pages/animalDetail");
};

exports.about = (req, res) => {

	res.render("pages/about");
};
