/* eslint-disable camelcase */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class empleado extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	empleado.init(
		{
			id_empleado: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			id_fundacion: DataTypes.INTEGER,
			correo: DataTypes.STRING(70),
			contrasenia: DataTypes.STRING(300),
			nombre: DataTypes.STRING(70),
			rol: DataTypes.STRING(45)
		},
		{
			sequelize,
			modelName: "empleado"
		}
	);
	return empleado;
};
