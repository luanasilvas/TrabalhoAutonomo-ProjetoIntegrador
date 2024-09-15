const { Sequelize } = require('sequelize'); 
require('dotenv').config(); // Carrega as variáveis de ambiente definidas no arquivo .env
const config = require('./config'); // Importa as configurações de banco de dados

// Verifica se o ambiente está definido, caso contrário, usa 'development' como padrão
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]; // Seleciona as configurações apropriadas para o ambiente atual (development, test, production)

if (!dbConfig) {
  throw new Error(`No configuration found for environment: ${env}`); // Gera um erro se as configurações não forem encontradas para o ambiente
}

// Exibe as configurações de conexão no console para facilitar a depuração
console.log("DB_HOST:", dbConfig.host);
console.log("DB_USER:", dbConfig.username);
console.log("DB_PASSWORD:", dbConfig.password);
console.log("DB_NAME:", dbConfig.database);
console.log("DB_PORT:", dbConfig.port);

// Cria uma nova instância do Sequelize com as configurações do banco de dados
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect, // O tipo de banco de dados (ex: MySQL, PostgreSQL)
  logging: console.log, // Ativa o logging para mostrar as queries SQL executadas
});

// Função assíncrona que tenta autenticar a conexão com o banco de dados
(async () => {
  try {
    await sequelize.authenticate(); // Testa a conexão com o banco de dados
    console.log('Connection has been established successfully.'); // Mensagem de sucesso se a conexão for bem-sucedida
  } catch (error) {
    console.error('Unable to connect to the database:', error); // Exibe um erro se a conexão falhar
  }
})();

// Exporta a instância do Sequelize para que possa ser usada em outros arquivos para realizar operações no banco de dados
module.exports = sequelize;
