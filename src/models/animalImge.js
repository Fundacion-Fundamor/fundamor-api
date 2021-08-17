
/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class animalImage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.animalImage.belongsTo(models.animal, {
				foreignKey: "id_fundacion"
			});
		}
	}
	animalImage.init({
		id_imagen_animal: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true },
		id_animal: { type: DataTypes.INTEGER, allowNull: false },
		ruta: { type: DataTypes.STRING(200), allowNull: false }
	}, {
		sequelize,
		modelName: "animalImage",
		tableName: "imagen_animal",
		timestamps: false
	});
	return animalImage;
};