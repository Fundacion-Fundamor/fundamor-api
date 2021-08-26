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
			models.adopter.hasMany(models.adoption, {
				foreignKey: "id_adopcion",
				as: "adoption"
			});
		}
	}
	adopter.init({
		id_adoptante: { primaryKey: true, type: DataTypes.STRING(45), allowNull: false },
		nombre: { type: DataTypes.STRING(70), allowNull: false},
		telefono_casa: { type: DataTypes.STRING(45) },
		telefono_celular: { type: DataTypes.STRING(45), allowNull: false},
		ciudad: { type: DataTypes.STRING(90) },
		ocupacion: { type: DataTypes.STRING(90), allowNull: false },
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