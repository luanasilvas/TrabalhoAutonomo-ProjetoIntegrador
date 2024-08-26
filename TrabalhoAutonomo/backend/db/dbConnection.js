const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lataforma_trabalho_autonomo', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
