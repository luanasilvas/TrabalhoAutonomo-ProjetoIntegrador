module.exports = (sequelize, DataTypes) => {
    const Avaliacao = sequelize.define('Avaliacao', {
      id_avaliacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_trabalhador: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      comentario: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      nota: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      data_avaliacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
    Avaliacao.associate = (models) => {
      Avaliacao.belongsTo(models.Trabalhador, { foreignKey: 'id_trabalhador' });
      Avaliacao.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
    };
  
    return Avaliacao;
  };
  