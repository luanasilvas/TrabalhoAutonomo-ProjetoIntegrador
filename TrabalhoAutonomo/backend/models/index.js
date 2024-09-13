// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Importar modelos
db.Trabalhador = require('./trabalhadorModel')(sequelize, DataTypes);
db.Cliente = require('./clienteModel')(sequelize, DataTypes);
db.Proposta = require('./propostaModel')(sequelize, DataTypes);
db.Anuncio = require('./anuncioModel')(sequelize, DataTypes);
db.Avaliacao = require('./avaliacaoModel')(sequelize, DataTypes);

// Definir relacionamentos
db.Trabalhador.hasMany(db.Avaliacao, { foreignKey: 'id_trabalhador' });
db.Cliente.hasMany(db.Avaliacao, { foreignKey: 'id_cliente' });

// Outras associações
db.Cliente.hasMany(db.Proposta, { foreignKey: 'id_cliente' });
db.Trabalhador.hasMany(db.Proposta, { foreignKey: 'id_trabalhador' });
db.Trabalhador.hasMany(db.Anuncio, { foreignKey: 'id_trabalhador' });

module.exports = db;
