/* eslint-disable camelcase */
"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		// Reminder: Table names must be singular nouns
		await queryInterface.createTable("empleado", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_empleado: {
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
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("empleado");
	}
};