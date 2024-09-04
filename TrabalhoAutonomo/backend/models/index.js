const { Sequelize, DataTypes } = require('sequelize');
const config = require('../db/config'); 

const environment = process.env.NODE_ENV || 'development';
const configEnv = config[environment];

// Inicialização do Sequelize
const sequelize = new Sequelize(
  configEnv.database,
  configEnv.username,
  configEnv.password,
  configEnv
);

const db = {};

// Importa os modelos
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Definindo modelos
db.Cliente = require('./clienteModel')(sequelize, Sequelize.DataTypes);
db.Anuncio = require('./anuncioModel')(sequelize, Sequelize.DataTypes);
db.Profissional = require('./profissionalModel')(sequelize, Sequelize.DataTypes);
db.Usuário = require('./usuarioModel')(sequelize, Sequelize.DataTypes);

module.exports = db;