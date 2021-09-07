/* eslint-disable camelcase */
"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class tracking extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.tracking.belongsTo(models.adoption, {
				foreignKey: "id_adopcion"
			});
		}
	}
	tracking.init({
		id_seguimiento: { primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true },
		id_adopcion: { allowNull: false, type: DataTypes.INTEGER },
		fecha: { allowNull: false, type: DataTypes.DATE },
		anotaciones: { allowNull: false, type: DataTypes.STRING(500) }
	}, {
		sequelize,
		modelName: "tracking",
		tableName: "seguimiento",
		timestamps: false
	});
	return tracking;
};