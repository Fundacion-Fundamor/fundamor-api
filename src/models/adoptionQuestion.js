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
			models.adoptionQuestion.belongsTo(models.question, {
				foreignKey: "id_pregunta"
			});
			models.adoptionQuestion.belongsTo(models.adoption, {
				foreignKey: "id_adopcion"
			});
		}
	}
	adoptionQuestion.init({
		id_pregunta_adopcion: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true },
		id_adopcion: { allowNull: false, type: DataTypes.INTEGER },
		id_pregunta: { allowNull: false, type: DataTypes.INTEGER },
		respuesta: { type: DataTypes.STRING(600) }
	}, {
		sequelize,
		modelName: "adoptionQuestion",
		tableName: "pregunta_adopcion",
		timestamps: false
	});
	return adoptionQuestion;
};