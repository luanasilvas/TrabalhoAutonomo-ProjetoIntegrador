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

// Importa os modelos diretamente
db.Cliente = require('./clienteModel');
db.Anuncio = require('./anuncioModel');
db.Trabalhador = require('./trabalhadorModel');
db.Proposta = require('./propostaModel');
db.Avaliacao = require('./avaliacaoModel');

// Define as associações, se necessário
db.Trabalhador.hasMany(db.Avaliacao, { foreignKey: 'id_trabalhador' });
db.Avaliacao.belongsTo(db.Trabalhador, { foreignKey: 'id_trabalhador' });

// Sincroniza os modelos com o banco de dados
db.sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar os modelos:', error);
  });

module.exports = db;
