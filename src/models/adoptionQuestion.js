/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class adoptionQuestion extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	adoptionQuestion.init({
		id_pregunta_adopcion: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true },
		id_adopcion: { allowNull: false, type: DataTypes.INTEGER },
		id_pregunta: { allowNull: false, type: DataTypes.INTEGER },
		respuesta: { type: DataTypes.STRING(100) }
	}, {
		sequelize,
		modelName: "adoptionQuestion",
		tableName: "pregunta_adopcion",
		timestamps: false
	});
	return adoptionQuestion;
};