// models/anuncioModel.js
module.exports = (sequelize, DataTypes) => {
  const Anuncio = sequelize.define('Anuncio', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_trabalhador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    valor: {
      type: DataTypes.FLOAT,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'Anuncios',
    timestamps: false,
  });

  return Anuncio;
};
