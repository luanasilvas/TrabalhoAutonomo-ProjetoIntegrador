module.exports = (sequelize, DataTypes) => {
  const Anuncio = sequelize.define('Anuncio', {
    id_anuncio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    id_trabalhador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    data_publicacao: {
      type: DataTypes.DATE, // Ajuste o tipo de dado para DATE
      defaultValue: DataTypes.NOW, // Define o valor padrão como a data e hora atual
    }
  }, {
    tableName: 'Anuncios',
    timestamps: false, // Ajuste conforme necessário, pode ser true se você quiser incluir colunas de timestamps
  });

  // Definição dos relacionamentos, se houver
  Anuncio.associate = (models) => {
    // Um anúncio pertence a um trabalhador
    Anuncio.belongsTo(models.Trabalhador, { foreignKey: 'id_trabalhador' });
  };

  return Anuncio;
};
