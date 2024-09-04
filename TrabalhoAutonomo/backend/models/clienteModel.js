const { DataTypes } = require('sequelize');
const Usuario = require('./usuarioModel'); 

module.exports = (sequelize) => {
  const Cliente = sequelize.define('Cliente', {
    id_cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario(sequelize), // Chama a função para obter o modelo
        key: 'id_usuario',
      },
    },
    localizacao: {
      type: DataTypes.STRING,
    },
    historico_contratacoes: {
      type: DataTypes.TEXT,
    },
    avaliacao: {
      type: DataTypes.FLOAT,
    },
  }, {
    tableName: 'clientes',
    timestamps: false,
  });

  return Cliente;
};