const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');

const Trabalhador = sequelize.define('Trabalhador', {
  id_trabalhador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  habilidades: {
    type: DataTypes.STRING,
    allowNull: true
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avaliacao: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  foto_perfil: {
    type: DataTypes.STRING,
    allowNull: true
  },
  data_criacao: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});

module.exports = Trabalhador;
