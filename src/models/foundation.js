/* eslint-disable camelcase */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class foundation extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			models.foundation.hasMany(models.employee, {
				foreignKey: "id_fundacion",
				as: "employee"
			});
			models.foundation.hasMany(models.post, {
				foreignKey: "id_fundacion",
				as: "post"
			});
			models.foundation.hasMany(models.animal, {
				foreignKey: "id_fundacion",
				as: "animal"
			});
			models.foundation.hasMany(models.question, {
				foreignKey: "id_fundacion",
				as: "question"
			});
		}
	}
	foundation.init({
		id_fundacion: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false, autoIncrement: true },
		correo: DataTypes.STRING(70),
		cuenta_donaciones: DataTypes.STRING(300),
		nombre: { type: DataTypes.STRING(70), allowNull: false },
		telefono: DataTypes.STRING(20),
		direccion: DataTypes.STRING(100),
		mision: DataTypes.STRING(255),
		vision: DataTypes.STRING(255),
		url_mapa: DataTypes.TEXT,
		url_video: DataTypes.STRING(300)

	}, {
		sequelize,
		modelName: "foundation",
		tableName: "fundacion",
		timestamps: false
	});
	return foundation;
};