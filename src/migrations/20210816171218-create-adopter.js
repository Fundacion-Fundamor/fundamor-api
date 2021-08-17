/* eslint-disable camelcase */
"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("adopters", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_adoptante: {
				type: Sequelize.STRING
			},
			nombre: {
				type: Sequelize.STRING
			},
			telefono_casa: {
				type: Sequelize.STRING
			},
			telefono_celular: {
				type: Sequelize.STRING
			},
			ciudad: {
				type: Sequelize.STRING
			},
			ocupacion: {
				type: Sequelize.STRING
			},
			correo: {
				type: Sequelize.STRING
			},
			contrasenia: {
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
		await queryInterface.dropTable("adopters");
	}
};