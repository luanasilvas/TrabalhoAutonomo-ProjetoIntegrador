module.exports = (sequelize, DataTypes) => {
  const Avaliacao = sequelize.define('Avaliacao', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // ID autoincrementado para cada avaliação
      primaryKey: true, // Chave primária
    },
    id_trabalhador: {
      type: DataTypes.INTEGER,
      allowNull: false, // ID do trabalhador avaliado
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false, // ID do cliente que fez a avaliação
    },
    nota: {
      type: DataTypes.FLOAT,
      allowNull: false, // Nota dada pelo cliente
    },
    comentario: {
      type: DataTypes.TEXT, // Comentário opcional do cliente
    },
    data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Data da avaliação
    },
  }, {
    tableName: 'Avaliacoes', // Nome da tabela no banco
    timestamps: false, // Desabilita os timestamps automáticos
  });

  return Avaliacao;
};
