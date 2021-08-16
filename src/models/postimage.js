/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class postImage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
	postImage.init({
		id_imagen_publicacion: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true },
		id_publicacion: { type: DataTypes.INTEGER, allowNull: false },
		ruta: { type: DataTypes.STRING(200), allowNull: false }
	}, {
		sequelize,
		modelName: "postImage",
		tableName: "imagen_publicacion",
		timestamps: false
	});
	return postImage;
};