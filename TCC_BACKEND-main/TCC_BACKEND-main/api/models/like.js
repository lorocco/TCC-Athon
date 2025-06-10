'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
   
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.Pessoa, {
      foreignKey: 'pessoaLike'})
    Like.belongsTo(models.Post, {
      foreignKey: 'postLike'})
  };
  return Like;
};