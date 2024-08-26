const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');

const Usuario = sequelize.define('Usuario', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  senha: { type: DataTypes.STRING, allowNull: false },
  tipo_usuario: { type: DataTypes.ENUM('trabalhador', 'cliente'), allowNull: false },
  data_criacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { timestamps: false });

module.exports = Usuario;
