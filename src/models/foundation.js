/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
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
      // define association here
    }
  }
  foundation.init({
    id_fundacion: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false, autoIncrement: true },
    correo: DataTypes.STRING(70),
    cuenta_donaciones: DataTypes.STRING(45),
    nombre: { type: DataTypes.STRING(70), allowNull: false },
    telefono: DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: "foundation",
    tableName: "fundacion",
    timestamps: false
  });
  return foundation;
};