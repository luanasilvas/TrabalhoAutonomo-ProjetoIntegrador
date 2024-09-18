// backend/models/index.js
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // Certifique-se de que as variáveis de ambiente estão carregadas

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
});

const db = {};

// Importação dos modelos
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Trabalhador = require('./trabalhadorModel')(sequelize, DataTypes);
db.Cliente = require('./clienteModel')(sequelize, DataTypes);
db.Proposta = require('./propostaModel')(sequelize, DataTypes);
db.Anuncio = require('./anuncioModel')(sequelize, DataTypes);
db.Avaliacao = require('./avaliacaoModel')(sequelize, DataTypes);

// Definição dos relacionamentos entre as tabelas
db.Trabalhador.hasMany(db.Avaliacao, { foreignKey: 'id_trabalhador' }); // Um trabalhador pode ter várias avaliações
db.Avaliacao.belongsTo(db.Trabalhador, { foreignKey: 'id_trabalhador' }); // Uma avaliação pertence a um trabalhador

db.Cliente.hasMany(db.Avaliacao, { foreignKey: 'id_cliente' }); // Um cliente pode fazer várias avaliações
db.Avaliacao.belongsTo(db.Cliente, { foreignKey: 'id_cliente' }); // Uma avaliação pertence a um cliente

db.Cliente.hasMany(db.Proposta, { foreignKey: 'id_cliente' }); // Um cliente pode enviar várias propostas
db.Proposta.belongsTo(db.Cliente, { foreignKey: 'id_cliente' }); // Uma proposta pertence a um cliente

db.Trabalhador.hasMany(db.Proposta, { foreignKey: 'id_trabalhador' }); // Um trabalhador pode receber várias propostas
db.Proposta.belongsTo(db.Trabalhador, { foreignKey: 'id_trabalhador' }); // Uma proposta pertence a um trabalhador

db.Trabalhador.hasMany(db.Anuncio, { foreignKey: 'id_trabalhador' }); // Um trabalhador pode criar vários anúncios
db.Anuncio.belongsTo(db.Trabalhador, { foreignKey: 'id_trabalhador' }); // Um anúncio pertence a um trabalhador

module.exports = db; // Exporta os modelos e a conexão para uso em outras partes do projeto
