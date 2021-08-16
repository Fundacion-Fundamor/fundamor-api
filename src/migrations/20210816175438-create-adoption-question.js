/* eslint-disable camelcase */
"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("adoptionQuestions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_pregunta_adopcion: {
				type: Sequelize.INTEGER
			},
			id_adopcion: {
				type: Sequelize.INTEGER
			},
			id_pregunta: {
				type: Sequelize.INTEGER
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
		await queryInterface.dropTable("adoptionQuestions");
	}
};