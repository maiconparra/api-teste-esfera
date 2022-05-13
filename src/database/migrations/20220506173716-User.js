'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Sobrenome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      CPF: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Telefone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('User');
  }
};
