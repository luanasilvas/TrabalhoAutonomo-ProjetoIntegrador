module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id_cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // ID autoincrementado para cada cliente
      primaryKey: true, // Chave primária
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Nome de usuário único
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false, // Nome real do cliente
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
    historico_contratacoes: {
      type: DataTypes.TEXT, // Histórico de serviços contratados
    },
    avaliacao: {
      type: DataTypes.FLOAT, // Avaliação média do cliente
    },
    localizacao: {
      type: DataTypes.STRING, // Localização do cliente
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Data de criação da conta
    },
  }, {
    timestamps: false,  // Não usa createdAt e updatedAt
    tableName: 'Clientes', // Define o nome da tabela
  });

  return Cliente;
};
