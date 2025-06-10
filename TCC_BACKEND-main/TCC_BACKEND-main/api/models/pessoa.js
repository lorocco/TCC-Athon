'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    emailPessoa: DataTypes.STRING,
    senhaPessoa: DataTypes.STRING,
    dataNascPessoa: DataTypes.STRING,
    nomePessoa: DataTypes.STRING,
    imagem: DataTypes.STRING
  }, {});
  Pessoa.associate = function(models) {
    Pessoa.belongsTo(models.Esportes, {
      foreignKey: 'esportePessoa'})
    Pessoa.belongsTo(models.Funcao, {
      foreignKey: 'funcaoPessoa'})
    Pessoa.belongsTo(models.Generos, {
      foreignKey: 'generoPessoa'})
    Pessoa.hasMany(models.Post, {
      foreignKey: 'pessoaPost'})
    Pessoa.hasMany(models.Like, {
      foreignKey: 'pessoaLike'})
  };
  return Pessoa;
};