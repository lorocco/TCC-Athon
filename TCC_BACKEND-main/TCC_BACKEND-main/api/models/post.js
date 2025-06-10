'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    texto: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.Pessoa, {
      foreignKey: 'pessoaPost'})
    Post.hasMany(models.Like, {
      foreignKey: 'postLike'})
  };
  return Post;
};