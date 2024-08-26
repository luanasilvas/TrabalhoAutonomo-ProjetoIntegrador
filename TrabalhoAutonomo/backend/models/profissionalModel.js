const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');
const Usuario = require('./usuarioModel');

const Trabalhador = sequelize.define('Trabalhador', {
  id_trabalhador: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_usuario: { type: DataTypes.INTEGER, references: { model: Usuario, key: 'id_usuario' } },
  descricao: DataTypes.TEXT,
  habilidades: DataTypes.TEXT,
  localizacao: DataTypes.STRING,
  avaliacao: DataTypes.FLOAT
}, { timestamps: false });

module.exports = Trabalhador;
