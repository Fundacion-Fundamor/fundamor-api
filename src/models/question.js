/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class question extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	question.init({
		id_pregunta: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true },
		titulo: { type: DataTypes.STRING(100), allowNull: false },
		respuesta: { type: DataTypes.STRING(70) },
		tipo_pregunta: DataTypes.ENUM("arbierta", "multiple")
	}, {
		sequelize,
		modelName: "question",
		tableName: "pregunta",
		timestamps: false
	});
	return question;
};