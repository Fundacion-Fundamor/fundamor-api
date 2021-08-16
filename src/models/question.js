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
		id_fundacion: { allowNull: false, type: DataTypes.INTEGER },
		titulo: { type: DataTypes.STRING(100), allowNull: false },
		tipo_pregunta: { type: DataTypes.ENUM("arbierta", "multiple"), allowNull: false }
	}, {
		sequelize,
		modelName: "question",
		tableName: "pregunta",
		timestamps: false
	});
	return question;
};