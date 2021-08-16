
/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class adoption extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	adoption.init({
		id_adopcion: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false, autoIncrement: true },
		id_animal: { type: DataTypes.INTEGER, allowNull: false },
		fecha_estudio: { type: DataTypes.DATE, allowNull: false },
		fecha_entrega: DataTypes.DATE,
		estado: { type: DataTypes.ENUM("Finalizada", "En proceso"), allowNull: false },
		observaciones: { type: DataTypes.STRING(200) },
		id_adoptante: { type: DataTypes.STRING(45), allowNull: false },
		id_empleado: { type: DataTypes.STRING(45), allowNull: false }
	}, {
		sequelize,
		modelName: "adoption",
		tableName: "adopcion",
		timestamps: false
	});
	return adoption;
};