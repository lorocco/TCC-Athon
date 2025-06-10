'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emailPessoa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senhaPessoa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataNascPessoa: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      nomePessoa: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      esportePessoa: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Esportes', key: 'id'}
      },
      generoPessoa: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Generos', key: 'id'}
      },
      funcaoPessoa: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Funcoes', key: 'id'}
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pessoas');
  }
};