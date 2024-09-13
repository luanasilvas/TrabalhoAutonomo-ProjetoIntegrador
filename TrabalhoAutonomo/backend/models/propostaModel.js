// models/propostaModel.js
module.exports = (sequelize, DataTypes) => {
  const Proposta = sequelize.define('Proposta', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_trabalhador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    valor: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendente',
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'Propostas',
    timestamps: false,
  });

  return Proposta;
};
