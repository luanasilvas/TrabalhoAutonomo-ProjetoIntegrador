const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');
const Usuario = require('./usuarioModel');

const Cliente = sequelize.define('Cliente', {
  id_cliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_usuario: { type: DataTypes.INTEGER, references: { model: Usuario, key: 'id_usuario' } },
  localizacao: DataTypes.STRING,
  historico_contratacoes: DataTypes.TEXT,
  avaliacao: DataTypes.FLOAT
}, { timestamps: false });

module.exports = Cliente;
