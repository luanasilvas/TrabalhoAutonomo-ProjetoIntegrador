const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Anuncio = sequelize.define('Anuncio', {
    id_anuncio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_profissional: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'anuncios',
    timestamps: false,
  });

  return Anuncio;
};