
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const storage = multer.diskStorage({
	destination: function (req, file, cb) {

		if (file.fieldname === "postImages") {
			cb(null, "./src/public/images/postImages");
		} else {
			cb(null, "./src/public/images/animalImages");
		}
	},
	filename: function (req, file, cb) {
		cb(null, uuidv4()+ path.extname(file.originalname).toLocaleLowerCase());
	}
});
module.exports = multer({
	storage,
	limits: { fileSize: 5000000 },
	fileFilter: (req, file, cb) => {
		const fileTypes = /jpg|jpeg|png/;
		const mimeType = fileTypes.test(file.mimetype);
		const extName = fileTypes.test(path.extname(file.originalname));
		if (mimeType && extName) {
			return cb(null, true);
		}
		cb(new Error("Error, solos se aceptan archivos de tipo imagen"));
	}

}).fields([
	{ name: "postImages", maxCount: 8 },
	{ name: "animalImages", maxCount: 8 }
]);