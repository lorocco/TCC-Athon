'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pessoaLike: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Pessoas', key: 'id'}
      },
      postLike: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Posts', key: 'id'}
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
    return queryInterface.dropTable('Likes');
  }
};