module.exports = (sequelize, DataTypes) => {
    const Proposta = sequelize.define('Proposta', {
      id_proposta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_anuncio: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mensagem: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      preco_oferecido: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      data_envio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      status: {
        type: DataTypes.ENUM('pendente', 'aceita', 'recusada'),
        defaultValue: 'pendente'
      }
    });
  
    Proposta.associate = (models) => {
      Proposta.belongsTo(models.Anuncio, { foreignKey: 'id_anuncio' });
      Proposta.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
    };
  
    return Proposta;
  };
  