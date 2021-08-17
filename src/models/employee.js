/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class employee extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.employee.belongsTo(models.foundation, {
				foreignKey: "id_fundacion"
			});
			models.employee.hasMany(models.adoption, {
				foreignKey: "id_empleado",
				as: "adoption"
			});
		}
	}
	employee.init({
		id_empleado: { primaryKey: true, type: DataTypes.STRING(45), allowNull: false},
		id_fundacion: { type: DataTypes.INTEGER, allowNull: false },
		correo: { type: DataTypes.STRING(70), allowNull: false },
		contrasenia: { type: DataTypes.STRING(300), allowNull: false },
		nombre: { type: DataTypes.STRING(70), allowNull: false },
		rol: DataTypes.STRING(45)
	}, {
		sequelize,
		modelName: "employee",
		tableName: "empleado",
		timestamps: false
	});
	return employee;
};