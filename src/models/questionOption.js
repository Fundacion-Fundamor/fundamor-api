/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class questionOption extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	questionOption.init({
		id_opcion: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true },
		id_pregunta: { allowNull: false, type: DataTypes.INTEGER },
		descripcion: { type: DataTypes.STRING(70), allowNull: false }
	}, {
		sequelize,
		modelName: "questionOption",
		tableName: "opcion_pregunta",
		timestamps: false
	});
	return questionOption;
};