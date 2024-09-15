module.exports = (sequelize, DataTypes) => {
  const Trabalhador = sequelize.define('Trabalhador', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // ID autoincrementado para cada trabalhador
      primaryKey: true, // Chave primária
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Nome de usuário único
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false, // Nome real do trabalhador
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // E-mail único
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false, // Senha de login
    },
    descricao: {
      type: DataTypes.TEXT, // Descrição profissional do trabalhador
    },
    habilidades: {
      type: DataTypes.TEXT, // Habilidades do trabalhador
    },
    localizacao: {
      type: DataTypes.STRING, // Localização do trabalhador
    },
    avaliacao: {
      type: DataTypes.FLOAT, // Avaliação média do trabalhador
    },
    foto_perfil: {
      type: DataTypes.STRING, // URL da foto de perfil
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Data de criação do perfil
    },
  }, {
    timestamps: true, // Habilita createdAt e updatedAt
    tableName: 'Trabalhadores', // Nome da tabela no banco
  });

  return Trabalhador;
};
