/* eslint-disable camelcase */
"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("empleados", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_empleado: {
				type: Sequelize.STRING
			},
			id_fundacion: {
				type: Sequelize.INTEGER
			},
			correo: {
				type: Sequelize.STRING
			},
			contrasenia: {
				type: Sequelize.STRING
			},
			nombre: {
				type: Sequelize.STRING
			},
			rol: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	}, // eslint-disable-next-line no-unused-vars
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("empleados");
	}
};