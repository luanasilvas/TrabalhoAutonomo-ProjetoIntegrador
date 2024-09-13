// models/clienteModel.js
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id_cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    historico_contratacoes: {
      type: DataTypes.TEXT,
    },
    avaliacao: {
      type: DataTypes.FLOAT,
    },
    localizacao: {
      type: DataTypes.STRING,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,  
    tableName: 'Clientes',
  });

  return Cliente;
};
