/* eslint-disable camelcase */
"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("questions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_pregunta: {
				type: Sequelize.INTEGER
			},
			titulo: {
				type: Sequelize.STRING
			},
			respuesta: {
				type: Sequelize.STRING
			},
			tipo_pregunta: {
				type: Sequelize.ENUM
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
		await queryInterface.dropTable("questions");
	}
};