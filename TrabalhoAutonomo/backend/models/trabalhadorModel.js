module.exports = (sequelize, DataTypes) => {
  const Trabalhador = sequelize.define('Trabalhador', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
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
    descricao: {
      type: DataTypes.TEXT,
    },
    habilidades: {
      type: DataTypes.TEXT,
    },
    localizacao: {
      type: DataTypes.STRING,
    },
    avaliacao: {
      type: DataTypes.FLOAT,
    },
    foto_perfil: {
      type: DataTypes.STRING,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: true, // Habilita createdAt e updatedAt
    tableName: 'Trabalhadores',
  });

  return Trabalhador;
};