module.exports = (sequelize, DataTypes) => {
  const Trabalhador = sequelize.define('Trabalhador', {
    id_trabalhador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    habilidades: {
      type: DataTypes.STRING,
      allowNull: false
    },
    localizacao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avaliacao: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    foto_perfil: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  return Trabalhador;
};
