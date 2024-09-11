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
db.Trabalhador = require('./trabalhadorModel')(sequelize, DataTypes);  // Substituição de Profissional por Trabalhador
db.Proposta = require('./propostaModel')(sequelize, DataTypes);        // Adicionando modelo Proposta
db.Avaliacao = require('./avaliacaoModel')(sequelize, DataTypes);      // Adicionando modelo Avaliacao

// models/index.js
db.sequelize.sync({ alter: true }) // Use alter: true para ajustar a tabela existente
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar os modelos:', error);
  });

module.exports = db;
