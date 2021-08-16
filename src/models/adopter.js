/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class adopter extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	adopter.init({
		id_adoptante: { primaryKey: true, type: DataTypes.STRING(45) },
		nombre: { type: DataTypes.STRING(70) },
		telefono_casa: { type: DataTypes.STRING(45) },
		telefono_celular: { type: DataTypes.STRING(45) },
		ciudad: { type: DataTypes.STRING(90) },
		ocupacion: { type: DataTypes.STRING(90) },
		correo: { type: DataTypes.STRING(45) },
		contrasenia: { type: DataTypes.STRING(300) }
	}, {
		sequelize,
		modelName: "adopter",
		tableName: "adoptante",
		timestamps: false
	});
	return adopter;
};