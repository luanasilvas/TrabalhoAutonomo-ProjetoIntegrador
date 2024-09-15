module.exports = (sequelize, DataTypes) => {
  const Proposta = sequelize.define('Proposta', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // ID autoincrementado para cada proposta
      primaryKey: true, // Chave primária
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false, // ID do cliente que fez a proposta
    },
    id_trabalhador: {
      type: DataTypes.INTEGER,
      allowNull: false, // ID do trabalhador para quem a proposta é feita
    },
    descricao: {
      type: DataTypes.TEXT, // Descrição da proposta
    },
    valor: {
      type: DataTypes.FLOAT, // Valor da proposta
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendente', // Status da proposta (padrão: pendente)
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Data de criação da proposta
    },
  }, {
    tableName: 'Propostas', // Nome da tabela
    timestamps: false, // Não usa createdAt e updatedAt
  });

  return Proposta;
};
