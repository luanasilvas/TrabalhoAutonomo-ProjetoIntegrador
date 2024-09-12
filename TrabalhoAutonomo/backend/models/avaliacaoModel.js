const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');

const Avaliacao = sequelize.define('Avaliacao', {
  id_avaliacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_trabalhador: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Trabalhador',
      key: 'id_trabalhador'
    },
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  avaliacao: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  comentario: {
    type: DataTypes.STRING,
    allowNull: true
  },
  data_avaliacao: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});

module.exports = Avaliacao;
