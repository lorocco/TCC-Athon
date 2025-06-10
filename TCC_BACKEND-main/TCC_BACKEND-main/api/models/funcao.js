'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funcao = sequelize.define('Funcao', {
    nomeFuncao: DataTypes.STRING
  }, {
    tableName: 'Funcoes'
  });
  Funcao.associate = function(models) {
    Funcao.hasMany(models.Pessoa, {
      foreignKey: 'funcaoPessoa'})
  };
  return Funcao;
};