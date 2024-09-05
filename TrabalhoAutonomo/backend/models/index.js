// db/index.js
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../db/config'); 

const environment = process.env.NODE_ENV || 'development';
const configEnv = config[environment];

// Inicialização do Sequelize
const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  port: configEnv.port,
  dialect: configEnv.dialect,
  logging: console.log,
});

const db = {};

// Importa os modelos
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Definindo modelos
db.Cliente = require('./clienteModel')(sequelize, DataTypes);
db.Anuncio = require('./anuncioModel')(sequelize, DataTypes);
db.Profissional = require('./profissionalModel')(sequelize, DataTypes);
db.Usuario = require('./usuarioModel')(sequelize, DataTypes);

module.exports = db;
