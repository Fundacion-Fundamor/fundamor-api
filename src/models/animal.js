
/* eslint-disable camelcase */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class animal extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.animal.hasMany(models.animalImage, {
				foreignKey: "id_animal",
				as: "animalImage"
			});
			models.animal.hasMany(models.adoption, {
				foreignKey: "id_animal",
				as: "adoption"
			});
		}
	}
	animal.init({
		id_animal: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false, autoIncrement: true },
		id_fundacion: { type: DataTypes.INTEGER, allowNull: false },
		especie: { type: DataTypes.STRING(45), allowNull: false },
		nombre: { type: DataTypes.STRING(45), allowNull: false },
		fecha_nacimiento: { type: DataTypes.DATE, allowNull: false },
		sexo: { type: DataTypes.STRING(10), allowNull: false },
		caracteristicas: { type: DataTypes.STRING(300) },
		sitio_rescate: { type: DataTypes.STRING(190) },
		fecha_rescate: { type: DataTypes.DATE },
		color: { type: DataTypes.STRING(45), allowNull: false },
		vacunas: { type: DataTypes.STRING(100), allowNull: false },
		esterilizado: { type: DataTypes.BOOLEAN, allowNull: false },
		desparasitado: { type: DataTypes.BOOLEAN, allowNull: false },
		tamanio: { type: DataTypes.STRING(45), allowNull: false },
		estado: { type: DataTypes.STRING(30), allowNull: false }
	}, {
		sequelize,
		modelName: "animal",
		tableName: "animal",
		timestamps: false
	});
	return animal;
};