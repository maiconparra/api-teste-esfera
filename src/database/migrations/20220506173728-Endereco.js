'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Endereco', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Cep: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Logradouro: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Numero: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Complemento: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Bairro: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Cidade: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Estado: {
        allowNull: false,
        type: Sequelize.STRING
      },
      UserId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'User',
          key: 'id'
        }
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
    return queryInterface.dropTable('Endereco');
  }
};
