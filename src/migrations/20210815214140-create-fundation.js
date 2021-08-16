'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fundations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_fundacion: {
        type: Sequelize.INTEGER
      },
      correo: {
        type: Sequelize.STRING
      },
      cuenta_donaciones: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      telefono: {
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
    await queryInterface.dropTable('fundations');
  }
};