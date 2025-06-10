'use strict';
module.exports = (sequelize, DataTypes) => {
  const Esportes = sequelize.define('Esportes', {
    nomeEporte: DataTypes.STRING
  }, {});
  Esportes.associate = function(models) {
    Esportes.hasMany(models.Pessoa, {
      foreignKey: 'esportePessoa'})
  };
  return Esportes;
};