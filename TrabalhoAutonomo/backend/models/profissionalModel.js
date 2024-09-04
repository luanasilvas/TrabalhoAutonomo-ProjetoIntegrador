const { DataTypes } = require('sequelize');
const Usuario = require('./usuarioModel');

module.exports = (sequelize) => {
  const Trabalhador = sequelize.define('Trabalhador', {
    id_trabalhador: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario(sequelize), // Chama a função para obter o modelo
        key: 'id_usuario',
      },
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    habilidades: {
      type: DataTypes.TEXT,
    },
    localizacao: {
      type: DataTypes.STRING,
    },
    avaliacao: {
      type: DataTypes.FLOAT,
    },
  }, {
    tableName: 'trabalhadores',
    timestamps: false,
  });

  return Trabalhador;
};