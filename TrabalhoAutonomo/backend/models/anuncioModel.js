module.exports = (sequelize, DataTypes) => {   
  const Anuncio = sequelize.define('Anuncio', {
    id_anuncio: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // ID autoincrementado para cada anúncio
      primaryKey: true, // Chave primária
    },
    id_trabalhador: {
      type: DataTypes.INTEGER,
      allowNull: false, // ID do trabalhador associado ao anúncio
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false, // Título do anúncio
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false, // Descrição detalhada do anúncio
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true, // Preço do serviço oferecido (pode ser nulo)
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false, // Categoria do anúncio
    },
    data_publicacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Data de publicação do anúncio
    },
  }, {
    tableName: 'Anuncios', // Define o nome da tabela no banco de dados
    timestamps: false, // Não usa createdAt e updatedAt
  });

  return Anuncio;
};
