'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('adopcions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_adopcion: {
        type: Sequelize.INTEGER
      },
      id_animal: {
        type: Sequelize.INTEGER
      },
      fecha_estudio: {
        type: Sequelize.DATE
      },
      fecha_entrega: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.ENUM
      },
      observaciones: {
        type: Sequelize.STRING
      },
      id_adoptante: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('adopcions');
  }
};