'use strict';
module.exports = (sequelize, DataTypes) => {
  const Generos = sequelize.define('Generos', {
    nomeGenero: DataTypes.STRING
  }, {});
  Generos.associate = function(models) {
    Generos.hasMany(models.Pessoa, {
      foreignKey: 'generoPessoa'})
  };
  return Generos;
};