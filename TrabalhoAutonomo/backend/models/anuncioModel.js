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
      allowNull: true, // Pode ser null
    },
    categoria: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true // Pode ser null
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true, // Pode ser null
    },
    telefone: {
      type: DataTypes.STRING(50),
      allowNull: true, // Pode ser null
    },
    redes_sociais: {
      type: DataTypes.TEXT,
      allowNull: true, // Pode ser null
    },
    referencias: {
      type: DataTypes.TEXT,
      allowNull: true, // Pode ser null
    },
    data_publicacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    tableName: 'Anuncios',
    timestamps: false,
  });

  Anuncio.associate = (models) => {
    Anuncio.belongsTo(models.Trabalhador, { foreignKey: 'id_trabalhador' });
  };

  return Anuncio;
};
